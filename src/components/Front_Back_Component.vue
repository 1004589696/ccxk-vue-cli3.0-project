<template>
    <div class="card_side_box" :class="{backing:isback}">
        <div class="card_side card_side-front" @click="toback">
            <slot name="front"></slot>
        </div>
        <div class="card_side card_side-back" @click="tofront">
            <slot name="back"></slot>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            isback: false,
        };
    },
    methods: {
        toback(index) {
            this.isback = true;
        },
        tofront(index) {
            this.isback = false;
        },
    },
};
</script>
<style lang="less" scoped>
.card_side_box {
    position: relative;
    width: 238px;
    height: 366px;
    .card_side {
        position: absolute;
        top: 0;
        left: 0;
        width: 238px;
        height: 366px;
        -webkit-transition: all 0.8s ease;
        transition: all 0.8s ease;
        -webkit-backface-visibility: hidden;
        backface-visibility: hidden;
        overflow: hidden;
        -webkit-box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
        box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.15);
    }
    .card_side-front {
        background-color: red;
    }
    .card_side-back {
        background-color: blue;
        -webkit-transform: rotateY(180deg);
        transform: rotateY(180deg);
    }
}
.card_side_box.backing {
    .card_side-front {
        -webkit-transform: rotateY(-180deg);
        transform: rotateY(-180deg);
    }
    .card_side-back {
        -webkit-transform: rotateY(0);
        transform: rotateY(0);
    }
}
</style>