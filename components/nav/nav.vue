<template>
    <div>
        <mobile-nav v-if="showM()" />
        <pc-nav v-else />
    </div>
</template>
<script>
import { showAt, hideAt } from "vue-breakpoints";
import MobileNav from "./mobile-nav.vue";
import PcNav from "./pc-nav.vue";
export default {
    data() {
        return {};
    },
    components: { hideAt, showAt, PcNav, MobileNav },
    methods: {
        showM() {
            return ["xs", "sm"].indexOf(this.$vuetify.breakpoint.name) != -1
                ? true
                : false;
        }
    }
};
</script>
