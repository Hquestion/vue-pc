<template>
    <div class="analysis-home">
        <div class="exam-swiper">
            <swiper :options="swiperOption" ref="examSwiper">
                <swiper-slide v-for="(exam, index) in examList" :key="index" class="align-center">
                    <span v-text="exam.name"></span>
                </swiper-slide>
                <div class="swiper-button-prev" slot="button-prev"></div>
                <div class="swiper-button-next" slot="button-next"></div>
            </swiper>
        </div>
        <div class="exam-info-block">
            <el-row align="middle" type="flex">
                <el-col :span="5" class="light align-left">
                    <span>考生人数：</span><span v-text="current && current.stuCount"></span>
                </el-col>
                <el-col :span="5" class="light align-left">
                    <span>考试时间：</span><span v-text="current && current.examDate"></span>
                </el-col>
                <el-col :span="5" class="light align-left">
                    <span>分析发布时间：</span><span v-text="current && current.analysisDate"></span>
                </el-col>
                <el-col :span="9" class="align-right">
                    <el-button  type="warning" @click="download()">下载分析</el-button>
                    <el-button  type="primary">名次表</el-button>
                    <el-button  type="default">设置</el-button>
                </el-col>
            </el-row>
        </div>
        <el-tabs v-model="activeTab" type="card" @tab-click="handleClick" class="report-tab">
            <el-tab-pane :label="type.name" :name="type.type" v-for="(type, index) in reportTypes" :key="index"></el-tab-pane>
        </el-tabs>
        <div class="report-container">
            <transition :name="transitionName" mode="out-in">
                <router-view class="report-view"></router-view>
            </transition>
        </div>
        <el-dialog :visible.sync="downloadDialogVisible" class="download-dialog">
            <div class="title" slot="title">请选择下载类型</div>
            <div>
                <el-row>
                    <el-col :span="8">
                        <article class="bg-warning white" @click="doExport('excel')">
                            <h1>EXCEL</h1>
                            <div>下载Excel格式报表</div>
                        </article>
                    </el-col>
                    <el-col :span="8">
                        <article class="bg-success white" @click="doExport('ppt')">
                            <h1>PPT</h1>
                            <div>下载ppt格式分析</div>
                        </article>
                    </el-col>
                    <el-col :span="8">
                        <article class="bg-primary white" @click="doExport('pdf')">
                            <h1>PDF</h1>
                            <div>下载PDF详细分析报告</div>
                        </article>
                    </el-col>
                </el-row>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    const SWIPER_SLIDE_SIZE = 3;
    const MIDDLE_INDEX = Math.floor(SWIPER_SLIDE_SIZE / 2);
    import {swiper, swiperSlide} from 'vue-awesome-swiper';
    import api from '../../api';
    import config from '../../service/config';
    import convertReport from '../../mixins/convertReport';
    export default {
        name: 'AnalysisHome',
        data() {
            return {
                originExams: [],
                examList: [],
                startIndex: 0,    //截取原始数组起始下标
                activeTab: 'general',
                currentIndex: 0,    //当前激活的swiper下标
                transitionName: 'slide-left',
                downloadDialogVisible: false
            }
        },
        components: {
            swiper,
            swiperSlide
        },
        mixins: [convertReport],
        methods: {
            handleClick(){
                this.$router.replace({
                    name: this.activeTab,
                    params: {
                        id: this.current.id
                    }
                });
            },
            examSwiperEnd(swiper){
                swiper.lockSwipes();
                let activeIndex = swiper.activeIndex;
                this.startIndex += activeIndex;
                let shouldActiveIndex;
                if(this.startIndex < MIDDLE_INDEX) {
                    this.examList = this.originExams.slice(0, SWIPER_SLIDE_SIZE);
                    shouldActiveIndex = activeIndex;
                    this.startIndex = 0;
                }else if(this.startIndex > this.examTotal -  MIDDLE_INDEX){
                    this.examList = this.originExams.slice(this.examTotal + 1 - SWIPER_SLIDE_SIZE, this.examTotal + 1);
                    shouldActiveIndex = activeIndex;
                    this.startIndex = this.examTotal - SWIPER_SLIDE_SIZE;
                }else {
                    this.startIndex = this.startIndex - MIDDLE_INDEX;
                    this.examList = this.originExams.slice(this.startIndex, this.startIndex + SWIPER_SLIDE_SIZE);
                    shouldActiveIndex = MIDDLE_INDEX;
                }
                swiper.unlockSwipes();
                swiper.activeIndex = shouldActiveIndex;
                this.currentIndex = shouldActiveIndex;
                swiper.updateSlidesSize();
                this.updateCurrentExamInfo();
            },
            updateCurrentExamInfo(){
                this.activeTab = config.reportTypeNames.GENERAL;
                this.$router.replace({
                    name: this.activeTab,
                    params: {
                        id: this.current.id
                    }
                });
            },
            download(){
                this.downloadDialogVisible = true;
            },
            doExport(type){
                switch(type) {
                    case 'excel':
                        this.convertExcel();
                        break;
                    case 'ppt':
                        this.convertPPT();
                        break;
                    case 'pdf':
                        this.convertPDF();
                        break;
                    default:
                            break;
                }
            }
        },
        computed: {
            swiperOption(){
                return {
                    notNextTick: true,
                    autoPlay: false,
                    prevButton: '.swiper-button-prev',
                    nextButton: '.swiper-button-next',
                    freeMode: false,
                    slidesPerView: 1,
                    onSlideChangeEnd: this.examSwiperEnd
                };
            },
            examTotal() {
                return this.originExams.length;
            },
            reportTypes(){
                return config.reportTypes;
            },
            current: function() {
                return this.examList[this.currentIndex];
            }
        },
        created() {
            api.getExamList().then(res => {
                setTimeout(()=>{
                    this.originExams = res.slice(0,10);
                    this.startIndex = this.originExams.findIndex(item => {
                        return ('' + item.id) === ('' + this.$route.params.id)
                    });
                    let start = this.startIndex - MIDDLE_INDEX;
                    if(start <= 0) {
                        start = 0;
                    }
                    this.startIndex = start;
                    this.examList = this.originExams.slice(start, start + SWIPER_SLIDE_SIZE);
                    let indexInRender = this.examList.findIndex(item => ('' + item.id) === ('' + this.$route.params.id));
                    this.currentIndex = indexInRender;
                    this.$refs.examSwiper.swiper.slideTo(indexInRender);
                }, 500);
            });
        },
        mounted(){
            this.activeTab = this.$route.name;
        },
        watch: {
            '$route' (to, from) {
                const toDepth = to.meta.order;
                const fromDepth = from.meta.order;
                this.transitionName = toDepth < fromDepth ? 'slide-left' : 'slide-right'
            }
        }
    }
</script>

<style scoped>
    .exam-swiper {
        font-size: 24px;
        height: 80px;
        line-height: 80px;
    }
    .report-tab {
        margin-top: 20px;
    }
    .report-container {
        width: 100%;
        overflow-x: hidden;
    }
    .slide-left-enter-active, .slide-right-enter-active{
        transition: all .2s ease;
    }
    .slide-left-enter,.slide-left-leave-to{
        transform: translateX(-100%);
        opacity: 0;
    }
    .slide-right-enter,.slide-right-leave-to {
        transform: translateX(100%);
        opacity: 0;
    }
    .analysis-home .el-dialog article {
        width: 200px;
        height: 120px;
        border: 1px solid #ccc;
        margin: 0 auto;
        padding: 30px 0;
        cursor: pointer;
        border-radius: 10px;
    }
    .analysis-home .el-dialog article div {
        margin-top: 10px;
    }
</style>
