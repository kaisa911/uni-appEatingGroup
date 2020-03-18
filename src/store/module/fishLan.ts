export default {
    state: {
        menuList: [{imageName:"one",imageUrl:"./../static/image/fish1.jpg"},
        {imageName:"two",imageUrl:"./../static/image/fish2.jpg"},
        {imageName:"three",imageUrl:"./../static/image/fish3.jpg"},
        {imageName:"four",imageUrl:"./../static/image/fish4.jpg"}]
    },
    getters: {},
    mutations: {
        setMenuList(state: Global.IState){
           console.log('来了没')
        }

    },
    actions: {}
}