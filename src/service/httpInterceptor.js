/**
 * Created by Administrator on 2016/7/1.
 */
import { Loading } from 'element-ui';
import { Message } from 'element-ui';

let loadingTimer = null;
let timeoutTimer = null;
let loading = null;

const REQ_TIME_OUT = 5000;

export function httpInterceptor(req, next){
    req.timeout = REQ_TIME_OUT;
    clearTimeout(loadingTimer);
    if(!req.ignore) {
        loading = Loading.service({
            text: '拼命加载中...'
        });
    }
    clearTimeout(timeoutTimer);
    timeoutTimer = setTimeout(function(){
        loading && loading.close();
        Message.error({
            message: '请求超时，请重试！'
        });
    }, req.timeout);
    next(function(res) {
        clearTimeout(loadingTimer);
        clearTimeout(timeoutTimer);
        loadingTimer = setTimeout(()=>{
            loading && loading.close();
        }, 300);
        if(res.status >= 500) {
            Message.error({
                message: '请求失败，服务器异常'
            });
        }
    });
}
