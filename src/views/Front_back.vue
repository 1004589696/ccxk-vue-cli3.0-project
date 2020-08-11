<template>
    <div>
        <div class="list">
            <div class="list-item">
                <div class="front_back_box" :class="{backing:isbackList[0]}">
                    <div class="card_side card_side-front" @click="toback(0)">正面</div>
                    <div class="card_side card_side-back" @click="tofront(0)">反面</div>
                </div>
            </div>
            <div class="list-item">
                <div class="front_back_box" :class="{backing:isbackList[1]}">
                    <div class="card_side card_side-front" @click="toback(1)">正面{{isbackList[1]}}</div>
                    <div class="card_side card_side-back" @click="tofront(1)">反面</div>
                </div>
            </div>
            <div class="list-item">
                <div class="front_back_box" :class="{backing:isbackList[2]}">
                    <div class="card_side card_side-front" @click="toback(2)">正面</div>
                    <div class="card_side card_side-back" @click="tofront(2)">反面</div>
                </div>
            </div>
            <div class="list-item">
                <div class="front_back_box" :class="{backing:isbackList[3]}">
                    <div class="card_side card_side-front" @click="toback(3)">正面</div>
                    <div class="card_side card_side-back" @click="tofront(3)">反面</div>
                </div>
            </div>
        </div>
        <FrontBack>
            <template v-slot:front>
                <h1>正面</h1>
            </template>
            <template v-slot:back>
                <h1>反面</h1>
            </template>
        </FrontBack>
    </div>
</template>
<script>
import FrontBack from "@/components/Front_Back_Component.vue";
export default {
    components: { FrontBack },
    data() {
        return {
            isbackList: [false, false, false, false],
        };
    },
    methods: {
        toback(index) {
            this.isbackList[index] = true;
            this.isbackList = JSON.parse(JSON.stringify(this.isbackList));
        },
        tofront(index) {
            this.isbackList[index] = false;
            this.isbackList = JSON.parse(JSON.stringify(this.isbackList));
        },
    },
};
</script>
<style lang="less" scoped>
.list {
    display: flex;
    justify-content: space-around;
    .list-item {
        flex: 0 0 258px;
        margin-top: 100px;
    }
}
.front_back_box {
    margin: 0 auto;
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
        border-radius: 10px;
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
.front_back_box.backing {
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