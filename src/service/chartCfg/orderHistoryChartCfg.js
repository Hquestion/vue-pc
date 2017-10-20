/**
 * 堆叠折线图
 */
export default {
    title: {
        text: '各班历次考试排名变化曲线图'
    },
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data:['初三1班','初三2班','初三3班','初三4班','初三5班','初三6班','初三7班','初三8班','初三9班','初三10班','初三11班'],
        bottom: 0,
        type: 'scroll',
        width: '70%'
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '8%',
        containLabel: true
    },
    xAxis: {
        type: 'category',
        boundaryGap: ['10%', '10%'],
        data: ['理综0517','理综0524','理综0531','理综0620','理综0630']
    },
    yAxis: {
        type: 'value',
        inverse: true,
        min: 0,
        boundaryGap: ['10%', '10%'],
        interval: 1
    },
    series: [
        {
            name:'初三1班',
            type:'line',
            data:[1, 2, 1, 1, 2]
        },
        {
            name:'初三2班',
            type:'line',
            data:[3, 1, 2, 2, 1]
        },
        {
            name:'初三3班',
            type:'line',
            data:[2, 3, 5, 3, 5]
        },
        {
            name:'初三4班',
            type:'line',
            data:[4, 5, 4, 4, 3]
        },
        {
            name:'初三5班',
            type:'line',
            data:[5, 4, 3, 5, 4]
        },
        {
            name:'初三6班',
            type:'line',
            data:[6, 3, 5, 3, 5]
        },
        {
            name:'初三7班',
            type:'line',
            data:[7, 7, 7, 7, 7]
        },
        {
            name:'初三8班',
            type:'line',
            data:[8, 8, 8, 8, 8]
        },
        {
            name:'初三9班',
            type:'line',
            data:[9, 9, 9, 9, 9]
        },
        {
            name:'初三10班',
            type:'line',
            data:[10, 10, 10, 10, 10]
        },
        {
            name:'初三11班',
            type:'line',
            data:[11, 11, 11, 11, 11]
        }
    ]
}
