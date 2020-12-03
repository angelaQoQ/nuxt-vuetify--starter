<template>
    <v-container>
        // 轮播
        <v-carousel
            v-if="
                $vuetify.breakpoint.name == 'xs' ||
                    $vuetify.breakpoint.name == 'sm'
            "
            hide-delimiters
            cycle
            height="100"
            :dark="isDark"
            :show-arrows="false"
        >
            <v-carousel-item
                v-for="(item, i) in banenrItems"
                :key="i"
                :src="item.bannerUrl"
                @click="handleClickBanner(item)"
            ></v-carousel-item>
        </v-carousel>

        <v-carousel
            v-else
            hide-delimiters
            cycle
            :dark="isDark"
            :show-arrows="true"
        >
            <v-carousel-item
                v-for="(item, i) in banenrItems"
                :key="i"
                :src="item.bannerUrl"
                @click="handleClickBanner(item)"
            ></v-carousel-item>
        </v-carousel>

        // 首页结构数据
        <v-btn large rounded outlined @click="getData">点击请求数据</v-btn>

        <v-row justify="center" align="center">
            <notifications group="foo" />
            <v-col width="100%">
                <button @click="handleChangeSomeValue">
                    {{ $t("mails.two", $store.state.locale) }}
                </button>
                <img src="~/static/images/avatar.png" alt="" />
                <button class="btn">1111{{ someValue }}</button>
                <nuxt-link to="/ads">123</nuxt-link>
                <br />
                <hr />
                Vuex: <br />
                index.js中数据:{{ someValue }} <br />
                <button @click="handleSetData">
                    home.js中数据:{{ homeData2 + homeData1 }}
                </button>
                <hr />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
    // 在beforeCreate之前, 内部没有this , 参数1是ssr的context对象
    asyncData(context) {
        context.app.F1("一个参数");
        if (process.server) {
            console.log({ host: context.req.headers.host });
        }
    },

    // 运行在Vue的created之后, 内部this是vue实例, 之前再created中发送页面数据请求可以转移到此处,
    // 且不用先更新进Store再同步到页面, 效率更高.
    // 且数据请求时可以父子组件各自负责自身的请求, 可以在layouts中发送请求
    async fetch() {
        this.vmdata = "vm数据New";
        this.getData();
    },

    watchQuery: ["aaa"], // query参数aaa值变化时自动触发所有函数调用
    computed: {
        ...mapState(["someValue", "isDark"]), // index.js中变量可以直接使用, 子模块中数据通过this.$store.state.模块名.变量名 进行调用
        ...mapState("home", ["homeData2", "homeData1"])
    },
    data() {
        return {
            vmdata: "vm数据old",
            banenrItems: [
                {
                    src:
                        "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg"
                },
                {
                    src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg"
                },
                {
                    src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg"
                },
                {
                    src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg"
                }
            ],
            tipContent: "",
            showTip: false,
            pageInfo: {}
        };
    },
    methods: {
        async getData() {
            let _this = this;
            let res = await this.$axios.post("/hwyc/home/index");
            if (res.data.status == 0) {
                this.pageInfo = res.data.data.pageColumns;
                this.pageInfo.forEach((item, index) => {
                    if (item.name == "banner") {
                        _this.banenrItems = item.items;
                    }
                });
            } else {
                this.$notify({
                    group: "foo",
                    title: "Warning",
                    text: "Network error , status:" + res.data.status
                });
            }
        },
        async handleChangeSomeValue() {
            this.$notify({
                group: "foo",
                title: "Important message",
                text: "Hello user! This is a notification!"
            });
            let res = await this.$axios.$get("http://icanhazip.com");
            this.$store.dispatch("ChangeSomeValue", "123");
        },
        handleSetData() {
            this.$store.dispatch("home/SETHomeData", "打塔1");
        },
        // banner点击
        handleClickBanner(bannerItem) {
            return;
            switch (bannerItem.actionType) {
                case "URL":
                    window.location.href = bannerItem.action;
                    break;
                case "BOOK":
                    this.$router.push(
                        `/bookinfo/${bannerItem.typeOneNames[0] || "null"}/${
                            bannerItem.bookName
                        }/${bannerItem.id}`
                    );
                    break;
            }
        }
    },
    mounted() {}
};
</script>

<style lang="less" scoped>
.btn {
    color: red;
    span {
        color: green;
    }
}
</style>
