import api from '../api';

function renderChart(cfg){
    return new Promise((resolve, reject) => {
        import(/* webpackChunkName: "echarts" */ '../service/chartCfg/echartLib').then(echarts => {
            cfg = JSON.parse(JSON.stringify(cfg));
            let $container = document.createElement('div');
            $container.style.width = '1100px';
            $container.style.height = '500px';
            let chart = echarts.init($container, 'walden');
            cfg.animation = false;
            chart.setOption(cfg);
            let url = chart.getConnectedDataURL({
                type: 'png',
                pixelRatio: 4,
                backgroundColor: '#fff'
            });
            resolve(url);
        });
    });
}
export default {
    methods: {
        convertPDF: function(){
            let cfg = require('../service/chartCfg/generalChartCfg').default;
            renderChart(cfg).then(url => {
                let content = '<!doctype html><head><meta charset="utf-8"></head><body style="background: #dedede;"><img src="' + url + '" style="width: 100%;"></body>';
                this.doDownload(content);
            });
        },
        convertExcel: function(){

        },
        convertPPT: function(){

        },
        doDownload(content){
            api.transferToPdf({
                content: content
            }).then(res => {
                let link = document.querySelector('#download-link');
                link.setAttribute('href', res.msg);
                link.setAttribute('download', '南京市第一中学初三年级第一次月考报表.pdf');
                link.querySelector('#downloadlabel').click();
            });
        }
    }
}
