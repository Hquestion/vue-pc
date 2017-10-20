/**
 * 基准线上下绘制柱状图
 */
export default {
    avgScore: 90,
    title: {
        text: '基准均分图',
        left:'center'
    },
    tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter(params) {
            let tar = params[1];
            return tar.name + '<br/>' + tar.seriesName + ' : ' + tar.data.avg;
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '5%',
        containLabel: true
    },
    xAxis: {
        type : 'category',
        splitLine: {show:false},
        data : ['初三1','初三2','初三3','初三4','初三5','初三6'],
        axisLine: {
            show: false
        }
    },
    yAxis: {
        type : 'value',
        min: 30,
        max: 150,
        interval: 10
    },
    series: [
        {
            name: '辅助',
            type: 'bar',
            stack:  'avg',
            itemStyle: {
                normal: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                },
                emphasis: {
                    barBorderColor: 'rgba(0,0,0,0)',
                    color: 'rgba(0,0,0,0)'
                }
            },
            data: [90, 90, 90, 35, 45, 45]
        },
        {
            name: '平均分',
            type: 'bar',
            stack: 'avg',
            barMaxWidth: 30,
            avgScore: 90,
            label: {
                normal: {
                    show: true,
                    position: 'inside',
                    formatter: function(params){
                        return params.data.avg;
                    }
                }
            },
            markLine : {
                lineStyle: {
                    normal: {
                        type: 'solid',
                        width: 3
                    }
                },
                symbol: false,
                data : [
                    {yAxis: 90 }
                ]
            },
            data:[{
                value: 30,
                avg: 120
            },{
                value: 35,
                avg: 125
            },{
                value: 40,
                avg: 130
            },{
                value: 55,
                avg: 35
            },{
                value: 45,
                avg: 45
            },{
                value: 45,
                avg: 45
            }]
        }
    ]
}
