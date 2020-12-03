<template>
    <div>
        default
    </div>
</template>
<script>
export default {
    // 组件每次加载前都会调用, 会将返回对象拼接到当前组件的data中, 早于created 函数内this不指向当期那组件实例
    // 用于处理异步数据请求
    async asyncData({ $axios }) {
        let ip = await $axios.get("https://www.easy-mock.com/mock/5c29c7c0c130244e45373047/alishow");
        return { name: "world", ip };
    },
    fetch() {
        // 页面渲染前填充store
    },
    head() {
        // vue mate
    },
    data() {
        return {};
    },
    mounted() {}
};
</script>
