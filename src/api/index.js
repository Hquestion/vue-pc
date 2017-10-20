import httpService from '../service/httpService';
export default {
    getExamList: function(){
        let item = {
            name: '九龙中学第一次月考',
            examType: '月考',
            examDate: '2017-02-05',
            analysisDate: '2017-02-09',
            stuCount: '500'
        };
        let res = [];
        for(let i = 0; i < 1000; i++) {
            let obj = JSON.parse(JSON.stringify(item));
            obj.name += i;
            obj.id = i;
            res.push(obj);
        }
        return Promise.resolve(res);
    },
    transferToPdf: function(data){
        return new Promise((resolve, reject) => {
            httpService.post('http://api10.51jyfw.com//api/File/Html2PDF', {
                content: data.content,
                type: data.type || 'A4',
                name: data.name || '导出下载'
            }).then(res=> {
                resolve(res);
            }, reject);
        });
    }
}
