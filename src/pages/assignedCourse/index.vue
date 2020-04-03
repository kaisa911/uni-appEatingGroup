<template>
    <view class="assignedCourse-page">
        <Week></Week>
        <courseList :courseType="courseType"></courseList>
    </view>
</template>

<script lang="ts">
    import Week from '../../components/course/week.vue'
    import courseList from '../../components/course/courseList.vue'
    import {Component,Vue} from 'vue-property-decorator';

    @Component({
        components:{
            Week,
            courseList
        }
    })
    
    //不同种类的课程
    export default class curriculum extends Vue{
        private courseType:string = '';

        onLoad(option:{type:''}){
            this.courseType = option.type;
        }
    }
</script>
