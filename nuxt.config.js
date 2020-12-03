import colors from "vuetify/es5/util/colors";

// 环境配置文件, 配不对, 不瘠薄配了!
// require("dotenv").config();

const env = process.env.NODE_ENV;
console.log("^^^^^^^^^^^^^^^^env:" + env);

const host = process.HOST;

// 打包文件分析
if (env === "analyzer") {
    const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
        .BundleAnalyzerPlugin;
}

export default {
    // ssr服务配置
    server: {
        timing: {
            // 服务响应总时间
            total: true
        }
    },

    // 路由配置
    router: {
        linkActiveClass: "active-link", // 默认的激活类名
        linkExactActiveClass: "exact-active-link" //
    },

    // 页面切换动画配置
    transition: {
        name: "page",
        mode: "out-in",
        beforeEnter(el) {
            console.log("Before enter...");
        }
    },

    // 全局网页头设置
    head: {
        titleTemplate: "%s - webfic_pc",
        title: "webfic_pc",
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1"
            },
            { hid: "description", name: "description", content: "" }
        ],
        link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
    },

    loading: { color: "#fff" },

    css: [
        "@/static/css/default.less" // 默认样式配置
    ],

    // 项目工具库管理
    plugins: [
        "@/plugins/common.js", // 引入Vue实例工具函数库
        "@/plugins/ctx-inject.js", // 引入服务端解析时asyncData参数上下文对象的工具函数库
        "@/plugins/axios.js", // axios拦截器
        { src: "@/plugins/BrowserUse.js", ssr: false }, // 引用Vue的工具库插件
        { src: "@/plugins/ServerUse.js", ssr: true }, // ssr需要使用的Vue插件
        "~/plugins/i18n.js" // 国际化
    ],

    // Auto import components (https://go.nuxtjs.dev/config-components)
    components: true,

    // 默认框架选项
    buildModules: [
        // https://go.nuxtjs.dev/eslint
        // '@nuxtjs/eslint-module',
        // https://go.nuxtjs.dev/vuetify
        "@nuxtjs/vuetify"
        /* ["@nuxtjs/vuetify",{
            // vuetify模块选项按需加载

        }] */
    ],

    // nuxt模块
    modules: [
        "@nuxtjs/axios",
        "@nuxtjs/pwa",
        "@nuxt/content",
        "@nuxt/components"
        // "@nuxtjs/dotenv"  // 环境变量自动配置
    ],

    // 请求配置
    axios: {
        proxy: env === "development" ? true : false, // 开启代理
        prefix: "/api" , // env === "development" ? "/api" : "",
        headers: { "Content-Type": "application/json", crossDomain: true },
        credentials: true, // 跨域请求需要凭证
        retry: { retries: 0 }, // 失败重连
        debug: false
    },

    // Axios proxyTable
    proxy: {
        "/api/": {
            target: 'http://192.168.1.70:8080/', // 接口地址
            pathRewrite: {
                "^/api": "/",
                changeOrigin: true
            }
        }
    },

    // Content module configuration (https://go.nuxtjs.dev/config-content)
    content: {},

    // Vuetify 通用配置
    vuetify: {
        customVariables: ["~/assets/variables.scss"],
        theme: {
            dark: true,
            themes: {
                dark: {
                    primary: colors.blue.darken2,
                    accent: colors.grey.darken3,
                    secondary: colors.amber.darken3,
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3
                }
            }
        }
    },

    // Build Configuration (https://go.nuxtjs.dev/config-build)
    build: {
        // publicPath:"设置CDN基本路径",
        analyze: true, // 资源分析, nuxt build -a 命令来启用该分析器进行编译构建，分析结果可在 http://localhost:8888 上查看
        vendor: ["axios", "vue-i18n"], // 防止axios重复打包
        extractCSS: true, // 公共css资源单独打包
        plugins: [
            // new BundleAnalyzerPlugin()
        ],
        module: {
            rules: [
                // babel
                {
                    test: /\.js$/,
                    exclude: /(node_modules|bower_components)/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ["@babel/preset-env"]
                        }
                    }
                },
                // less
                {
                    test: /\.less$/,
                    use: [
                        {
                            loader: "style-loader"
                        },
                        {
                            loader: "css-loader"
                        },
                        {
                            loader: "less-loader",
                            options: {
                                lessOptions: {
                                    strictMath: true
                                }
                            }
                        }
                    ]
                },
                // 图片
                {
                    test: /\.(png|jpe?g|gif|svg)$/,
                    loader: "url-loader",
                    query: {
                        limit: 1000, // 1KB
                        name: "img/[name].[hash:7].[ext]"
                    }
                },
                // 字体文件
                {
                    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                    loader: "url-loader",
                    query: {
                        limit: 1000, // 1 KB
                        name: "fonts/[name].[hash:7].[ext]"
                    }
                }
            ]
        }
    }
};
