/*
1
    根模块中的数据可以使用mapState提供, 但子模块中的数据要通过命名空间的方式访问
    数据访问: 组件中:
                1. this.$store.state.模块文件名.模块内变量
                2. computed:{...mapState("模块文件名" , ["模块内变量1" , "模块内变量2"]...)}
    数据修改: 组件中:
                this.$store.dispatch("模块文件名/action名" , action参数)

2
    可以将其他插件引入store中
*/
export const state = () => {
    return {
        someValue: "初始值",
        isDark:false,
    };
};

// mutations
export const mutations = {
    changeSomeValue(state, newValue) {
        this.$Fn("Store的mutations中触发修改Fn, state赋值为:" + newValue);
        state.someValue = newValue;
    }
};

// actions
export const actions = {
    ChangeSomeValue({ commit }, newValue) {
        this.$Fn("Store的actions中触发了Fn, state赋值为:" + newValue);
        commit("changeSomeValue", newValue);
    }
};
