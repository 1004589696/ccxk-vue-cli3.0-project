<template>
    <div>
        <div class="list-item" style="background-image:url('../assets/logo.png')">
            <span @click="setNickName('我是首页')">首页</span>
        </div>
        <div class="list-item">
            <router-link to="/front-back">点击翻牌效果</router-link>
        </div>
        <div class="list-item">
            <router-link to="/import-sort">import 是同步引入 验证--console.log()</router-link>
        </div>
        <div class="list-item">
            <router-link to="/css-select-none">css 属性防止复制</router-link>
        </div>
        <div class="list-item">
            <router-link to="/css-ellipsis">css 控制多余几行文字，显示 ...</router-link>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {};
    },
    methods: {
        setNickName(name) {
            this.$store.dispatch("set_userInfo", name);
        },
    },
};
</script>
<style lang="less" scoped>
.list-item {
    padding: 0.05rem 0.1rem;
    font-size: 0.15rem;
}
.test {
    width: 10rem;
    height: 1rem;
    background-color: coral;
}
.test2 {
    width: 500px;
    height: 100px;
    background-color: coral;
}
</style>