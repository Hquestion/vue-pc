import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld';
import Home from '@/components/biz/Home';
const AnalysisHome = resolve => require(['@/components/biz/AnalysisHome'], resolve);
// import AnalysisHome from '@/components/biz/AnalysisHome';
// import GeneralReport from '@/components/biz/reports/GeneralReport';
// import AvgReport from '@/components/biz/reports/AvgReport';
const GeneralReport = () => import('@/components/biz/reports/GeneralReport');
const AvgReport = ()=> import('@/components/biz/reports/AvgReport');
const OrderHistoryReport = resolve => require(['@/components/biz/reports/OrderHistoryReport'], resolve);
const OrderStructureReport = resolve => require(['@/components/biz/reports/OrderStructureReport'], resolve);
const ScoreRangeReport = resolve => require(['@/components/biz/reports/ScoreRangeReport'], resolve);
const HighScoreRangeReport = resolve => require(['@/components/biz/reports/HighScoreRangeReport'], resolve);
const GoodStuListReport = resolve => require(['@/components/biz/reports/GoodStuListReport'], resolve);
const OrderChangeReport = resolve => require(['@/components/biz/reports/OrderChangeReport'], resolve);
const UnpassListReport = resolve => require(['@/components/biz/reports/UnpassListReport'], resolve);
const LowAchieveReport = resolve => require(['@/components/biz/reports/LowAchieveReport'], resolve);
const EdgeReport = resolve => require(['@/components/biz/reports/EdgeReport'], resolve);

import config from '../service/config';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/exam-analysis/:id',
            name: 'Analysis',
            component: AnalysisHome,
            redirect: to => {
                const {params} = to;
                return {
                    name: config.reportTypeNames.GENERAL,
                    params: {
                        id: params.id
                    }
                }
            },
            children: [{
                path: '/exam-analysis/:id/general',
                name: config.reportTypeNames.GENERAL,
                component: GeneralReport,
                meta: {
                    order: 1,
                }
            }, {
                path: '/exam-analysis/:id/avg',
                name: config.reportTypeNames.AVG,
                component: AvgReport,
                meta: {
                    order: 2,
                }
            }, {
                path: '/exam-analysis/:id/orderHistory',
                name: config.reportTypeNames.ORDER_HISTORY,
                component: OrderHistoryReport,
                meta: {
                    order: 3,
                }
            }, {
                path: '/exam-analysis/:id/orderStructure',
                name: config.reportTypeNames.ORDER_STRUCTURE,
                component: OrderStructureReport,
                meta: {
                    order: 4,
                }
            }, {
                path: '/exam-analysis/:id/scoreRange',
                name: config.reportTypeNames.SCORE_RANGE,
                component: ScoreRangeReport,
                meta: {
                    order: 5,
                }
            }, {
                path: '/exam-analysis/:id/highScoreRange',
                name: config.reportTypeNames.HIGH_SCORE_RANGE,
                component: HighScoreRangeReport,
                meta: {
                    order: 6,
                }
            }, {
                path: '/exam-analysis/:id/goodStuList',
                name: config.reportTypeNames.GOOD_STU_LIST,
                component: GoodStuListReport,
                meta: {
                    order: 7,
                }
            }, {
                path: '/exam-analysis/:id/stuOrderChangeList',
                name: config.reportTypeNames.ORDER_CHANGE_LIST,
                component: OrderChangeReport,
                meta: {
                    order: 8,
                }
            }, {
                path: '/exam-analysis/:id/unpassList',
                name: config.reportTypeNames.UNPASS_LIST,
                component: UnpassListReport,
                meta: {
                    order: 9,
                }
            }, {
                path: '/exam-analysis/:id/lowAchieve',
                name: config.reportTypeNames.LOW_ACHIEVE,
                component: LowAchieveReport,
                meta: {
                    order: 10,
                }
            }, {
                path: '/exam-analysis/:id/edgeStu',
                name: config.reportTypeNames.EDGE,
                component: EdgeReport,
                meta: {
                    order: 11,
                }
            }]
        }
    ]
})
