<template>
    <view class="choose-week-panel">
        <i class="iconfont icon-houtui" @click="getweek(false)"></i>
        <view v-for="(item,index) in dataList" :key="index" class="day-item" :class="{'isSelect': item.number === isSelectNum}" 
            @click="setNum(item)">
            <text>{{item.date}}</text>
            <text>{{item.week}}</text>
        </view>
        <i class="iconfont icon-qianjin" @click="getweek(true)"></i>
    </view>
</template>

<script lang="ts">
    import {Component,Vue} from 'vue-property-decorator';
    @Component({
    })
    export default class Week extends Vue{
        private dateNumber:number[] = [0,1,2,3,4,5,6];
        private isAfter:boolean = true;
        private dataList:number[] = [];
        private isSelectNum:number = 0;

        mounted() {
           this.setDate(this.dateNumber)
        }

        setNum(item:{number:number}){
            this.isSelectNum  = item.number;
        }

        getweek(type:boolean){
            let last = this.dateNumber[6];
            let one = this.dateNumber[0];
            this.isAfter = type;
            this.dateNumber = [];
            for(let i= 1; i <= 7; i++){
                if(this.isAfter){
                    this.dateNumber.push(last+i);
                }else{
                    this.dateNumber.push(one-i);
                }
            }
            this.setDate(this.dateNumber);
        }

        setDate(dateNumber:number[]){
            let list:any = [];
            dateNumber.forEach((item:number) => {
                let dataWeek = this.GetDateStr(item);
                list.push(dataWeek);
            });

            this.dataList = list;
            return list;
        }

        GetDateStr(Count:number) {
            let dd = new Date()
            dd.setDate(dd.getDate() + Count) //获取Count天后的日期
            let m:any = dd.getMonth() + 1 //获取当前月份
            m = m < 10 ? '0' + m : m
            let d:any = dd.getDate() //获取当前月份的日期
            d = d < 10 ? '0' + d : d
            var w = dd.getDay() //获取星期几
            var week
            switch (w) {
                case 0:
                week = '周日'
                break
                case 1:
                week = '周一'
                break
                case 2:
                week = '周二'
                break
                case 3:
                week = '周三'
                break
                case 4:
                week = '周四'
                break
                case 5:
                week = '周五'
                break
                case 6:
                week = '周六'
                break
            }
            return {date:  m + '.' + d ,week: week, number:Count};
        }
    }
</script>
<style lang="scss">
    .choose-week-panel{
        padding: 10px 5px;
        display: flex;
        align-items: center;
        .iconfont{
            font-size: 45rpx;
            color: #333;
        }
        .day-item{
            font-size: 26rpx;
            color: #333;
            display: flex;
            flex-direction: column;
            flex:1;
            text-align: center;
            text{
                margin: 0 0 5px 0;
            }
        }
        .isSelect{
            border-bottom: 4rpx #996 solid;
        }
    }
</style>
