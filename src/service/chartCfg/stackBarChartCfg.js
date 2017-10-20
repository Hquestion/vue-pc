/**
 * 堆叠柱状图
 */
export default {
    tooltip : {
        trigger: 'item',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
            type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
    },
    legend: {
        data:['A+', 'A', 'B+', 'B', 'C+', 'C']
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis : [
        {
            type : 'category',
            data : ['初三1班','初三2班','初三3班','初三4班','初三5班','初三6班','初三7班','初三8班','初三9班','初三10班','初三11班']
        }
    ],
    yAxis : [
        {
            type : 'value'
        }
    ],
    series : [
        {
            name:'A+',
            type:'bar',
            stack: '名次构成',
            barMaxWidth : 30,
            data:[10, 15, 12, 13, 14, 20, 2, 10, 15, 12, 13],
            tooltip: {
                formatter: function(params){
                    return `${params.name} A+人数：${params.value}`;
                }
            }
        },
        {
            name:'A',
            type:'bar',
            stack: '名次构成',
            barMaxWidth : 30,
            data:[10, 15, 12, 13, 14, 20, 2, 10, 15, 12, 13]
        },
        {
            name:'B+',
            type:'bar',
            stack: '名次构成',
            barMaxWidth : 30,
            data:[10, 15, 12, 13, 14, 20, 2, 10, 15, 12, 13]
        },
        {
            name:'B',
            type:'bar',
            stack: '名次构成',
            barMaxWidth : 30,
            data:[10, 15, 12, 13, 14, 20, 2, 10, 15, 12, 13]
        },
        {
            name:'C+',
            type:'bar',
            stack: '名次构成',
            barMaxWidth : 30,
            data:[10, 15, 12, 13, 14, 20, 2, 10, 15, 12, 13]
        },
        {
            name:'C',
            type:'bar',
            barMaxWidth : 30,
            stack: '名次构成',
            data:[10, 15, 12, 13, 14, 20, 2, 10, 15, 12, 13]
        }
    ]
}
