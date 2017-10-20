<template>
    <div class="avg-report">
        <div class="chart-container clear">
            <chart :options="barOption" theme="walden" id="avg-bar-chart" class="pull-left"></chart>
            <chart :options="option" theme="walden" id="avg-bzc-chart" class="pull-right"></chart>
        </div>
    </div>
</template>

<script>
    import 'echarts/lib/chart/bar';
    import 'echarts/lib/chart/scatter';
    import 'echarts/lib/component/tooltip';
    import 'echarts/lib/component/legend';
    import 'echarts/lib/component/title';
    import 'echarts/lib/component/markLine';
    import 'echarts/lib/component/markPoint';

    import avgBZCChartCfg from '../../../service/chartCfg/avgBZCChartCfg';
    import avgBarChartCfg from '../../../service/chartCfg/avgBarChartCfg';
    export default {
        name: '',
        data() {
            return {
                option: avgBZCChartCfg,
                barOption: avgBarChartCfg
            }
        },
        components: {

        },
        methods: {},
        computed: {},
        mounted() {

        }
    }
</script>

<style scoped>
    #avg-bar-chart, #avg-bzc-chart {
        width: 49%;
        height: 400px;
        display: inline-block;
        border: 1px solid #dedede;
    }
</style>
