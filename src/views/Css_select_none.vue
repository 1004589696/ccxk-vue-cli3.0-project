<template>
    <div>
        <span class="dcd">这句话你能选择到吗？</span>
    </div>
</template>
<script>
import * as utils from "@/utils/utils.js";
export default {};
</script>
<style lang="less" scoped>
.dcd {
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    select: none;
}
</style>