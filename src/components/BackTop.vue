<template>
    <el-backtop :bottom="100" :right="120" :visibility-height="600">
    <div class='setClass'>UP</div>
  </el-backtop>
</template>

<script>
export default {
    name: 'BackTop'
}
</script>

<style scoped lang="less">
.setClass {
    height: 100%;
    width: 100%;
    background-color: var(--el-bg-color-overlay);
    box-shadow: var(--el-box-shadow-lighter);
    text-align: center;
    line-height: 40px;
    color:#8c96f4;
    border-radius: 12px;
    font-weight: 700;
}
</style>
