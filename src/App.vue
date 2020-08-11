<template>
    <div id="app">
        <router-view />
    </div>
</template>
<script>
window.addEventListener(
    "popstate",
    function (e) {
        alert("我监听到了浏览器的返回按钮事件啦"); //根据自己的需求实现自己的功能
    },
    false
);
export default {};
</script>

<style lang="less">
* {
    margin: 0;
    padding: 0;
}
ol,
ul {
    list-style: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
img {
    border: none;
    vertical-align: bottom;
}
.fl {
    float: left;
}
.fr {
    float: right;
}
/*iphone点击高亮取消*/
* {
    -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
}
</style>