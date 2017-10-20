<template>
    <div class="hello">
        <chart :options="option" theme="walden" id="chart"></chart>
    </div>
</template>

<script>
    import 'echarts/lib/chart/bar';
    import 'echarts/lib/component/tooltip';
    import 'echarts/lib/component/legend';
    import 'echarts/lib/component/legendScroll';
    import 'echarts/lib/component/title';
    import chartCfg from '../../../service/chartCfg/stackBarChartCfg';
    export default {
        name: '',
        data() {
            return {
                option: chartCfg
            }
        },
        components: {},
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
