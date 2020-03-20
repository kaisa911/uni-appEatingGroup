export default {
    namespaced: true,
    state: {
        swiperList: [],
        entranceList: [],
        coursesList: []
    },
    getters: {},
    mutations: {
        setSwiperItem(state: any,swiperData: string){
           state.swiperList = swiperData;
        },
        setEntranceList(state: any){
            state.entranceList =[
                {imageUrl: null,name:'本周推荐'},
                {imageUrl: null,name:'私教课程'},
                {imageUrl: null,name:'赠一得一'},
                {imageUrl: null,name:'购卡续费'},
                {imageUrl: null,name:'小团体课'},
                {imageUrl: null,name:'活力操课'},
                {imageUrl: null,name:'静安课程'},
                {imageUrl: null,name:'训练营'},]
        },
        setcoursesList(state:any, courses:string){
            state.coursesList = courses;
        }
    },
    actions: {
        setSwiper(context:any){
            context.commit('setSwiperItem', [{imageName:"one",imageUrl:"./../static/image/fish1.jpg"},
            {imageName:"two",imageUrl:"./../static/image/fish2.jpg"},
            {imageName:"three",imageUrl:"./../static/image/fish3.jpg"},
            {imageName:"four",imageUrl:"./../static/image/fish4.jpg"}]);
        },
        setCourses(context:any){
            context.commit('setcoursesList',[{
                title: '哈他瑜伽',
                des: '给与身心的解放',
                money: '68.00',
            },{
                title: '流瑜伽',
                des: '给与身心的解放,这句话最多可以显示两行',
                money: '68.00',
            },{
                title: '骗他瑜伽',
                des: '给与身心的解放',
                money: '68.00',
            }]);
        }
    }
}