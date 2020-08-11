<style lang="css" scoped>
.toastBox {
    position: fixed;
    z-index: 10000;
    max-width: 80%;
    left: 50%;
    top: 50%;
    padding: 10px;
    border-radius: 5px;
    background: rgba(0, 0, 0, 0.7);
    color: #fff;
    box-sizing: border-box;
    text-align: center;
    transform: translate(-50%, -50%);
    opacity: 1;
}
.toastBox span {
    font-size: 14px;
    line-height: 16px;
    display: block;
    text-align: center;
}
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.4s;
}
.fade-enter,
.fade-leave-to {
    opacity: 0;
}
</style>
<template>
    <transition name="fade">
        <div class="toastBox" v-show="visible">
            <span>{{message}}</span>
        </div>
    </transition>
</template>

<script>
export default {
    data() {
        return {
            visible: false,
            message: "",
        };
    },
    created() {},
};
</script>
