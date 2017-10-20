<template>
    <div id="app">
        <header class="align-left bg-success white clear">
            <div class="back bg-success-dark pull-left align-center" @click="back()">
                <i class="el-icon-arrow-left">返回</i>
            </div>
            <div class="pull-left">
                <span>李晓伟老师</span>,欢迎访问南京市第一中学成绩分析平台<span></span>
            </div>
        </header>
        <div class="main">
            <router-view/>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'app',
        mounted() {

        },
        methods: {
            back(){
                this.$router.go(-1);
            }
        }
    }
</script>

<style>
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        min-height: 100%;
        width: 100%;
    }
    header {
        width: 100%;
        height: 60px;
        line-height: 60px;
    }
    .main {
        width: 1100px;
        height: 100%;
        min-height: calc(100vh - 60px);
        margin: 0 auto;
        padding: 15px 10px;
        background: #fff;
    }
    .back {
        width: 80px;
        height: 100%;
        cursor: pointer;
    }
</style>
