import {createStore} from 'vuex'

export default createStore({
    state:{ //儲存資料
        message:'Hello World!'
    },
    mutations:{}, //數據修改
    actions:{}, //非同步操作 用於呼叫mutation
    getters:{} //修改資料回傳

})