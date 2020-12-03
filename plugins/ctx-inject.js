/*
组件asyncData函数中, 给context上下文对象, 添加工具函数
*/
export default ({ app }, inject) => {
    // 参数app是上下文对象context的内置属性,可以在asyncData的context参数中获取到
    app.F1 = param => {
        console.log("上下文初始化组件页面时触发了F1函数, 参数:", param);
    };

    // inject可以给Vue实例, vuex, context同时注入内容, 用$函数名进行调用 , Fn在store/index.js中调用了
    inject("Fn", param => {
        console.log("同时注入函数Fn被触发, 参数:", param);
    });
};
