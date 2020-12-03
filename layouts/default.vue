<template>
    <v-app dark>
        <!---顶部导航-->
        <mobile-nav v-if="showM()" />
        <pc-nav v-else />
        <!---内容-->
        <v-main>
            <!--router-view-->
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
        </v-main>

        <!---底部导航-->
        <cg-footer v-if="!showM()"></cg-footer>
    </v-app>
</template>

<script>
import CgAppBar from "~/components/nav/nav";
import MobileNav from "~/components/nav/mobile-nav.vue";
import PcNav from "~/components/nav/pc-nav.vue";
import CgFooter from "~/components/footer/footer";
export default {
    data() {
        return {
            isLoadding: false,
            clipped: false,
            drawer: false,
            fixed: false,
            items: [
                {
                    icon: "mdi-apps",
                    title: "Welcome",
                    to: "/"
                },
                {
                    icon: "mdi-chart-bubble",
                    title: "Inspire",
                    to: "/inspire"
                },
                {
                    icon: "mdi-chart-apps",
                    title: "Search",
                    to: "/search/default"
                }
            ],
            miniVariant: false,
            right: true,
            rightDrawer: false,
            title: "Vuetify.js",
            showAlert: false,
            dialog: false
        };
    },
    components: {
        CgAppBar,
        CgFooter,
        PcNav,
        MobileNav
    },
    methods: {
        reserve() {
            this.isLoadding = true;
            console.log(this.isLoadding);
            window.setTimeout(() => {
                this.isLoadding = false;
                console.log(this.isLoadding);
            }, 2000);
        },
        showM() {
            return ["xs", "sm"].indexOf(this.$vuetify.breakpoint.name) != -1
                ? true
                : false;
        }
    }
};
</script>
<style lang="less" scoped>
.con1 {
    width: 900px;
}
.nav {
    position: fixed;
    top: 0;
}
</style>
