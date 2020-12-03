<template>
    <v-card class="overflow-hidden" width="100%">
        <v-app-bar app>
            <!--

            absolute
            dense
            clipped-left
            elevate-on-scroll
            elevation="12"
            class="no-gutters"
            scroll-target="#滚动的元素ID,可以使用HOME"
            :collapse="!collapseOnScroll"
            :collapse-on-scroll="collapseOnScroll"
            -->
            <!--汉堡按钮-->
            <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
            <!--标题-->
            <v-toolbar-title>Collapsing Bar</v-toolbar-title>
            <!--占满空位-->
            <v-spacer></v-spacer>
            <!--点点点菜单 及点击弹出列表 -->
            <v-menu v-if="false" top center>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn icon color="yellow" v-bind="attrs" v-on="on">
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item v-for="(item, i) in items" :key="i">
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
            <!--不换行菜单项-->
            <v-tabs v-if="false" align-with-title>
                <v-tab>Tab 1</v-tab>
                <v-tab>Tab 2</v-tab>
                <v-tab>Tab 3</v-tab>
            </v-tabs>
            <!--换行菜单项-->
            <template v-if="false" v-slot:extension>
                <v-tabs align-with-title>
                    <v-tab>Tab 1</v-tab>
                    <v-tab>Tab 2</v-tab>
                    <v-tab>Tab 3</v-tab>
                </v-tabs>
            </template>
        </v-app-bar>

        <v-navigation-drawer v-model="drawer" fixed temporary>
            <v-list nav dense>
                <v-list-item-group
                    v-model="group"
                    active-class="deep-purple--text text--accent-4"
                >
                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-home</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Home</v-list-item-title>
                    </v-list-item>

                    <v-list-item>
                        <v-list-item-icon>
                            <v-icon>mdi-account</v-icon>
                        </v-list-item-icon>
                        <v-list-item-title>Account</v-list-item-title>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>
    </v-card>
</template>
<script>
export default {
    data() {
        return {
            collapseOnScroll: true, // 滚动收起菜单导航
            items: [
                // 点点点菜单列表
                { title: "Click Me" },
                { title: "Click Me" },
                { title: "Click Me" },
                { title: "Click Me 2" }
            ],
            drawer: false, // 展示侧边抽屉
            group: null,
            clientHeight: 400 //默认窗口高度
        };
    },
    mounted() {
        if (window) {
            this.clientHeight = window.document.body.offsetHeight;
        }
    }
};
</script>
