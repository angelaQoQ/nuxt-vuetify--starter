/*
Vue插件 配置
需要使用 Vue.use() 时，你需要在 plugins/ 目录下创建相应的插件文件，并在 nuxt.config.js 中的 plugins 配置项中配置插件的路径。
 */
import Vue from "vue";
import Notifications from 'vue-notification'
import VueLazyLoad from "vue-lazyload";

Vue.use(Notifications);
/*
组件中
this.$notify({
    title: "Important message",
    text: "Hello user! This is a notification!"
});
*/

Vue.use(VueLazyLoad, {
    error: "@/static/images/avatar.png",
    loading: "@/static/images/avatar.png"
});
