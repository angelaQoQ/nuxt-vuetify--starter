<template>
    <div>
        SEARCH
    </div>
</template>

<script>
export default {
    // 在Page中调用中间件
    middleware: "auth",
    // 指定当前路由加载时动画
    transition: "transSearch",
    // 路由参数校验
    validate({ params, query }) {
        // 必须是number类型
        return /^\d+$/.test(params.bookid) || /^\d+$/.test(query.a);
    },
    data() {
        return {};
    },
    mounted() {
    }
};
</script>
