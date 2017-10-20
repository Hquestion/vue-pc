<template>
    <div class="general-analysis">
        <chart :options="polar" theme="walden" id="chart"></chart>
    </div>
</template>

<script>
    import 'echarts/lib/chart/line';
    import 'echarts/lib/chart/bar';
    import 'echarts/lib/component/tooltip';
    import 'echarts/lib/component/legend';
    import 'echarts/lib/component/title';

    import chartCfg from '../../../service/chartCfg/generalChartCfg';
    export default {
        name: 'GeneralReport',
        data() {
            return {
                polar: chartCfg
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
    #chart {
        width: 100%;
        height: 500px;
    }
</style>
