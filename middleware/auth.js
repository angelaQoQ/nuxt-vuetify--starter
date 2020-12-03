/*
    在页面渲染前自动调用的函数

    文件名就是 中间件的名称

    中间件接收 context 作为第一个参数

    执行顺序: nuxt.config.js  ->  匹配layout  -> 匹配的page

*/

export default function(context) {
    console.log("给书籍详情替换相关的 TDK , 处理SEO , 处理鉴权");
    console.log(context.req.url);
}
