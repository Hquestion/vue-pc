<template>
    <div class="hello">
        <chart :options="option" theme="walden" id="order-history-chart"></chart>
    </div>
</template>

<script>
    import 'echarts/lib/chart/line';
    import 'echarts/lib/component/tooltip';
    import 'echarts/lib/component/legend';
    import 'echarts/lib/component/legendScroll';
    import 'echarts/lib/component/title';

    import chartCfg from '../../../service/chartCfg/orderHistoryChartCfg';
    export default {
        name: '',
        data() {
            return {
                option: chartCfg
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
    #order-history-chart {
        width: 100%;
        height: 600px;
    }
</style>
