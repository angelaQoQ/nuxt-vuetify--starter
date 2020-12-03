<template>
    <div>
        <!--对话框-->
        <template>
            <v-dialog v-model="dialog" width="500">
                <template v-slot:activator="{ on, attrs }">
                    <v-btn
                        small
                        color="red lighten-2"
                        dark
                        v-bind="attrs"
                        v-on="on"
                    >
                        Click Me
                    </v-btn>
                </template>

                <v-card>
                    <v-card-title class="headline grey lighten-2">
                        Privacy Policy
                    </v-card-title>

                    <v-card-text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam, quis nostrud
                        exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum.
                    </v-card-text>

                    <v-divider></v-divider>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="primary" text @click="dialog = false">
                            I accept
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>
        </template>

        <!--v-card-->
        <template>
            <div>
                <h1>v-card</h1>
                <v-card :loadding="isLoadding">
                    {{ isLoadding }}
                    <v-card-actions>
                        <v-btn color="deeppink" text @click="reserve"
                            >v-card-action
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </div>
        </template>

        <!--按钮组-->
        <v-card :loadding="true">
            <v-btn nuxt>测试按钮1 nuxt</v-btn>
            <v-btn :loading="false">loadding</v-btn>
            <v-btn>测试按钮1</v-btn>
            <v-btn>测试按钮1</v-btn>
            <v-btn>测试按钮1</v-btn>
            <v-btn>测试按钮1</v-btn>
        </v-card>

        <!--父套子检测滚动隐藏使用-->
        <v-responsive
            id="hide-on-scroll-example"
            class="overflow-y-auto"
            max-height="600"
        >
            <v-responsive height="1500" v-if="false"></v-responsive>
        </v-responsive>

        <v-container v-if="false">
            <h1>样式圆角</h1>
            <button class="rounded-pill">药丸</button>
            <button class="rounded-circle">原型</button>
            <hr />
            <h1>显示效果display</h1>
            <div class="d-md-none">中屏隐藏</div>
            <div class="d-flex">flex</div>
        </v-container>

        <v-container v-if="false" class="con1">
            <div class="subtitle-1 text-center">内容1 fluid=false</div>

            <v-row class="text-center no-gutters">
                <v-col>dense去除padding</v-col>
                <v-col>no-gutters 去掉默认内外间距</v-col>
                <v-col>3</v-col>
            </v-row>

            <button>1</button><v-spacer></v-spacer><button>1</button>

            <v-spacer></v-spacer>
            <button>1</button>

            <v-spacer></v-spacer>
            <button>1</button>
        </v-container>

        <v-container v-if="false">
            <div class="text-center">组件</div>
            <v-alert
                v-if="showAlert"
                border="right"
                color="pink"
                icon=""
                type="success"
                dense
                dismissible
                transition="scale-transition"
                >???</v-alert
            >
            <button @click="showAlert = !showAlert">展示alert</button>
        </v-container>

        <v-container v-if="false">
            <v-app-bar dense flat prominent></v-app-bar>
        </v-container>

        <v-container>
            <v-icon large color="red">mdi-account-plus</v-icon>
            <v-icon large color="green darken-2">
                mdi-domain
            </v-icon>
            <v-autocomplete chips deletable-chips multiple solo></v-autocomplete
        ></v-container>

        <v-container>
            <v-row>
                <v-col>
                    <v-img
                        src="https://cdn.vuetifyjs.com/images/parallax/material2.jpg"
                    >
                        <template v-slot:placeholder>
                            <v-row
                                class="fill-height ma-0"
                                align="center"
                                justify="center"
                            >
                                <v-progress-circular
                                    indeterminate
                                    color="grey lighten-5"
                                ></v-progress-circular>
                            </v-row>
                        </template>
                    </v-img>
                    <v-img
                        contain
                        src="https://bad.src/not/valid"
                        lazy-src="https://picsum.photos/id/11/100/60"
                        min-width="500"
                        min-height="300"
                    >
                    </v-img>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>
<script>
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
