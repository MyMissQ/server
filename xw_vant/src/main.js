import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { Cell, CellGroup } from 'vant';
import { Swipe, SwipeItem } from 'vant';
import { Search } from 'vant';
import { NoticeBar } from 'vant';
import axios from './axios'
import { Tabbar, TabbarItem } from 'vant';

Vue.use(Tabbar).use(TabbarItem);

Vue.use(NoticeBar);

Vue.use(Search);

Vue.use(Swipe).use(SwipeItem);

Vue.use(Cell).use(CellGroup);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')