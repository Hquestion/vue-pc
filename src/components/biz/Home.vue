<template>
    <div class="home align-left">
        <div class="filter">
            <el-select v-model="grade" placeholder="请选择" class="select">
                <el-option
                    v-for="item in gradeList"
                    :key="item.value"
                    :label="item.label"
                    :value="item">
                </el-option>
            </el-select>
            <el-select v-model="subject" placeholder="请选择" class="select">
                <el-option
                    v-for="item in subjectList"
                    :key="item.value"
                    :label="item.label"
                    :value="item">
                </el-option>
            </el-select>
            <el-input v-model="paperName" placeholder="请输入试卷名称" class="name-input"></el-input>
            <el-button icon="search" type="primary">搜索</el-button>
        </div>
        <div class="list-table exam-list">
            <div class="list-header">
                <el-row class="align-center">
                    <el-col :span="15">考试名称</el-col>
                    <el-col :span="3">考试类型</el-col>
                    <el-col :span="3">考试日期</el-col>
                    <el-col :span="3">分析发布时间</el-col>
                </el-row>
            </div>
            <div class="list-body">
                <el-row class="list-item" v-for="(examItem, index) in renderExams" :key="index">
                    <el-col :span="15" class="align-left exam-name">
                        <router-link :to="{name: 'Analysis', params: {id: examItem.id}}" v-text="examItem.name">考试名称</router-link>
                    </el-col>
                    <el-col :span="3" class="align-center" v-text="examItem.examType">月考</el-col>
                    <el-col :span="3" class="align-center" v-text="examItem.examDate">考试日期</el-col>
                    <el-col :span="3" class="align-center" v-text="examItem.analysisDate">分析发布时间</el-col>
                </el-row>
            </div>
        </div>
        <div class="pagination-block">
            <el-pagination class="align-center" :page-size="pageSize" :total="total" :current-page="currentPage" @current-change="jumpToPage" layout="prev,pager,next"></el-pagination>
        </div>
    </div>
</template>

<script>
    import api from '../../api';
    export default {
        name: '',
        data() {
            return {
                gradeList: [{
                    label: '全部年级',
                    value: '全部年级'
                }, {
                    label: '初一',
                    value: '初一'
                },{
                    label: '初二',
                    value: '初二'
                },{
                    label: '初三',
                    value: '初三'
                }],
                grade: {},
                subjectList: [{
                    label: '全部学科',
                    value: '全部学科'
                }, {
                    label: '语文',
                    value: '语文'
                },{
                    label: '英语',
                    value: '英语'
                },{
                    label: '数学',
                    value: '数学'
                }],
                subject: {},
                paperName: '',
                examList: [],
                currentPage: 1,
                pageSize: 20
            }
        },
        components: {


        },
        methods: {
            jumpToPage(page){
                this.currentPage = page;
            }
        },
        computed: {
            total(){
                return this.examList.length;
            },
            renderExams(){
                return this.examList.slice((this.currentPage - 1) * this.pageSize, this.currentPage * this.pageSize)
            }
        },
        mounted() {
            api.getExamList().then(res=>{
                this.examList = res;
            });
        }
    }
</script>

<style scoped>
    .select {
        width: 120px;
    }
    .name-input {
        width: 200px;
    }
    .exam-list {
        margin-top: 15px;
    }
    .exam-list .exam-name {
        text-indent: 10px;
    }
    .pagination-block {
        margin-top: 20px;
    }
</style>
