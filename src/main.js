import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

//导入并安装vant组件库
import Vant from 'vant';
//为了能够覆盖默认的less变量，这里一定要把后缀名改为.less
import 'vant/lib/index.less';


//安装vant插件
Vue.use(Vant)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')