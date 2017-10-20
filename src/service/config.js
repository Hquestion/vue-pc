const reportTypeNames = {
    GENERAL: 'general',
    AVG: 'avg',
    ORDER_HISTORY: 'orderHistory',
    ORDER_STRUCTURE: 'orderStructure',
    SCORE_RANGE: 'scoreRange',
    HIGH_SCORE_RANGE: 'highScoreRange',
    GOOD_STU_LIST: 'goodStuList',
    ORDER_CHANGE_LIST: 'stuOrderChangeList',
    UNPASS_LIST: 'unpassList',
    LOW_ACHIEVE: 'lowAchieve',
    EDGE: 'edgeStu'
};
export default {
    reportTypeNames: reportTypeNames,
    reportTypes: [
        {
            name: '整体分析',
            type: reportTypeNames.GENERAL,
        }, {
            name: '均分分析',
            type: reportTypeNames.AVG,
        }, {
            name: '历次名次变化',
            type: reportTypeNames.ORDER_HISTORY,
        }, {
            name: '名次构成',
            type: reportTypeNames.ORDER_STRUCTURE,
        }, {
            name: '分数段',
            type: reportTypeNames.SCORE_RANGE,
        }, {
            name: '高分段',
            type: reportTypeNames.HIGH_SCORE_RANGE,
        }, {
            name: '优生名单',
            type: reportTypeNames.GOOD_STU_LIST,
        }, {
            name: '进退步名单',
            type: reportTypeNames.ORDER_CHANGE_LIST,
        }, {
            name: '不及格名单',
            type: reportTypeNames.UNPASS_LIST,
        }, {
            name: '学困情况',
            type: reportTypeNames.LOW_ACHIEVE,
        }, {
            name: '临界生',
            type: reportTypeNames.EDGE,
        }
    ]
}
