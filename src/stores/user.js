import { defineStore } from 'pinia'   // 导入 defineStore

export const useUserStore = defineStore('user', {
    //表示user对象{name:'',age:''}
    state: () => ({
        user: {}   // {  user: {}, token: '' }
    }),
    actions:{
        setUser(user){
            this.user=user
        }
    },

   //开启数据持久化
    persist:true

})
