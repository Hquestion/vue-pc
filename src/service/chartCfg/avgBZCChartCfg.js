/**
 * 散点图带标尺线
 */
export default {
    grid: {
        left: '3%',
        right: '7%',
        bottom: '5%',
        containLabel: true
    },
    tooltip : {
        // trigger: 'axis',
        showDelay : 0,
        formatter : function (params) {
            if (params.value.length > 1) {
                return '平均分：' + params.value[0] + '分<br/>'
                    + '标准差：' + params.value[1];
            }
        },
        axisPointer:{
            show: true,
            type : 'cross',
            lineStyle: {
                type : 'dashed',
                width : 1
            }
        }
    },
    xAxis : [
        {
            name: '标准差',
            nameGap: 20,
            nameLocation:'center',
            type : 'value',
            scale:true,
            axisLabel : {
                formatter: '{value}'
            },
            splitLine: {
                show: true
            }
        }
    ],
    yAxis : [
        {
            name: '平均分',
            type : 'value',
            scale:true,
            axisLabel : {
                formatter: '{value}'
            },
            splitLine: {
                show: true
            }
        }
    ],
    series : [
        {
            type:'scatter',
            data: [[161.2, 51.6], [167.5, 59.0], [159.5, 49.2], [157.0, 63.0], [155.8, 53.6],
                [170.0, 59.0], [159.1, 47.6], [166.0, 69.8], [176.2, 66.8], [160.2, 75.2],
                [172.5, 55.2], [170.9, 54.2], [172.9, 62.5], [153.4, 42.0], [160.0, 50.0],
                [147.2, 49.8], [168.2, 49.2], [175.0, 73.2], [157.0, 47.8], [167.6, 68.8]
            ],
            markPoint : {
                data : [
                    {type : 'max', name: '最大值'},
                    {type : 'min', name: '最小值'}
                ]
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
                    {type : 'average', name: '平均值'},
                    { xAxis: 160 }
                ]
            }
        }
    ]
}
