<template>
    <view class="curiculum-page">
        <Week></Week>
        <courseList></courseList>
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
    export default class curriculum extends Vue{
       
    }
</script>

