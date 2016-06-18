import Vue from 'vue'
import VueRouter from 'vue-router'
// require a *.vue component
import Vux from './components/Vux'
import VuxIcon from './components/VuxIcon'
import VuxTab from './components/VuxTab'
import VuxB from './components/VuxB'
import AppFooter from './components/AppFooter'

var Bar = Vue.extend({
    template: '<p>This is bar!</p>'
})
Vue.use(VueRouter);
// require a *.vue component
//import AppFooter from './components/App'
// 路由器需要一个根组件。
// 出于演示的目的，这里使用一个空的组件，直接使用 HTML 作为应用的模板
var App = Vue.extend({})
// 创建一个路由器实例
// 创建实例时可以传入配置参数进行定制，为保持简单，这里使用默认配置
var router = new VueRouter()
// 定义路由规则
// 每条路由规则应该映射到一个组件。这里的“组件”可以是一个使用 Vue.extend
// 创建的组件构造函数，也可以是一个组件选项对象。
// 稍后我们会讲解嵌套路由
router.map({
    '/vux': {
        component: Vux,
        subRoutes: {
            '/icon': {
                component: VuxIcon
            },
            '/tab': {
                component: VuxTab
            }
        }
    },
    '/foo': {
        component: AppFooter
    },
    '/bar': {
        component: Bar
    }
})
router.start(App, '#app')
