<template>
    <!--:scroll-target="scrollPos"-->
    <v-bottom-navigation
        app
        v-model="value"
        fixed
        bottom
        grow
        color="primery"
        shift
        :background-color="color"
        @change="change"
        class="m_nav"
    >
        <v-btn value="recent" to="/">
            <span>Recent</span>
            <v-icon>mdi-history</v-icon>
        </v-btn>
        <v-btn value="favorites" to="/bookinfo">
            <span>Favorites</span>
            <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn value="nearby" to="/test">
            <span>Nearby</span>
            <v-icon>mdi-map-marker</v-icon>
        </v-btn>
    </v-bottom-navigation>
</template>
<script>
export default {
    data() {
        return {
            value: "recent"

            // scrollPos: "滚动到的选择器" // 默认滚动到的元素选择器
        };
    },
    methods: {
        change(value) {
            console.log(value);
        }
    },
    computed: {
        color() {
            switch (this.value) {
                case 0:
                    return "blue-grey";
                case 1:
                    return "teal";
                case 2:
                    return "brown";
                case 3:
                    return "indigo";
                default:
                    return "blue-grey";
            }
        }
    }
};
</script>
<style lang="less" sceopd>
.m_nav {
    position: fixed;
    bottom: 0;
}
</style>
