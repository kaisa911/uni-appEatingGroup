export default {
    namespaced: true,
    state: {
        menuList: []
    },
    getters: {},
    mutations: {
        setMenuList(state: any){
           state.menuList = [{imageName:"one",imageUrl:"./../static/image/fish1.jpg"},
           {imageName:"two",imageUrl:"./../static/image/fish2.jpg"},
           {imageName:"three",imageUrl:"./../static/image/fish3.jpg"},
           {imageName:"four",imageUrl:"./../static/image/fish4.jpg"}];
        }

    },
    actions: {}
}