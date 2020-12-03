<template>
    <v-toolbar>
        <v-img
            width="100"
            height="50"
            src="https://res.hw.dzods.cn/res/item/item-pEHI5Y9Onh.jpg"
        ></v-img>

        <v-divider class="mx-4" vertical></v-divider>

        <v-toolbar-items class="hidden-sm-and-down">
            <v-btn>
                News
            </v-btn>

            <v-divider vertical></v-divider>

            <v-btn>
                Blog
            </v-btn>

            <v-divider vertical></v-divider>

            <v-btn>
                Music
            </v-btn>

            <v-divider vertical></v-divider>
        </v-toolbar-items>

        <v-spacer></v-spacer>
    </v-toolbar>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
button {
    width: 200px;
    height: 100px;
    background-color: #fff;
    color: #000;
}
</style>
