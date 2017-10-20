/**
 * Created by 贺小雷 on 2017-07-21.
 */
import Vue from 'vue';
import VueResource from 'vue-resource';
import {httpInterceptor} from './httpInterceptor';

Vue.use(VueResource);

Vue.http.options.emulateJSON = true;
Vue.http.options.crossOrigin = true;
Vue.http.options.emulateHTTP = true;
Vue.http.interceptors.push(httpInterceptor);

const handleResponse = function(res, resolve, reject){
    if(res.ok && !res.data) {
        resolve();
    }else if(res.ok){
        try{
            if(typeof res.data === 'string') {
                res.data = JSON.parse(res.data);
            }
            if(typeof res.data.code !== 'undefined') {
                if(res.data.code === 0) {
                    resolve(res.data);
                }else {
                    reject(res.data);
                }
            }else {
                resolve(res.data);
            }
        }catch(e) {
            reject(res.data);
            console.error('JSON字符串解析错误！');
        }
    }else {
        reject(res.data);
    }
};

const sendRequest = function(type, url, data, ignoreLoading){
    if(typeof data === 'boolean') {
        ignoreLoading = data;
        data = {}
    }
    let param = {
        url: url,
        method: type,
        ignore: !!ignoreLoading
    };
    type === 'POST' ? param.body = JSON.stringify(data) : param.params = data;
    return new Promise((resolve, reject) => {
        Vue.http(param).then(res => {
            handleResponse(res, resolve, reject);
        }, res => {
            reject(res.data);
        });
    });
};

export default {
    post: function(url, data, ignoreLoading){
        return sendRequest.apply(this, ['POST', ...arguments]);
    },
    get: function(url, data, ignoreLoading){
        return sendRequest.apply(this, ['GET', ...arguments]);
    },
    jsonp: function(url, data){
        return Vue.http.jsonp(url);
    }
}
