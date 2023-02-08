<template>
  <el-dialog v-model="dialogVisible" title="Tips" width="30%" draggable>
    <span>It's a draggable Dialog</span>
  </el-dialog>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits  } from 'vue';

const props = defineProps({
    visible: {
        type: Boolean,
        default: false
    }
})


</script>

<style scoped lang="less">

</style>
