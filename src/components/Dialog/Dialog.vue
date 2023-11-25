<template>
  <transition name="dialog-fade">
    <!-- 外层容器 -->
    <div v-show="visible" class="dyd-dialog_wrapper" @click="wrapperClone" dialog_wrapper="true">
      <!-- 这一层主要是控制对话框的宽度和高度 -->
      <div class="dyd-dialog" :style="{ width, marginTop: top, borderRadius: `${radius+'px'}` }">
        <!-- 头部 -->
        <div class="dyd-dialog_header">
          <slot name="title">
            <span class="dyd-dialog_title">{{ title }}</span>
          </slot>
          <!-- 关闭按钮 -->
          <button class="dyd-dialog_headerbtn" @click="clickHandle">
            <Dyd-Icon icon="xmark" />
          </button>
        </div>
        <!-- 中间内容部分，就是一个默认插槽 -->
        <div class="dyd-dialog_body">
          <slot />
        </div>
        <!-- 底部部分，也是一个插槽，是一个具名插槽 -->
        <div class="dyd-dialog_footer" v-if="$slots.footer">
          <slot name="footer" />
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import propObj from './props'
defineOptions({
  name: 'Dyd-Dialog'
})
const props = defineProps(propObj)

const emit = defineEmits(['close'])
function wrapperClone(e) {
  if(!props.closeOnClickModal || e.target.getAttribute('dialog_wrapper') !== 'true') return;
  clickHandle();
}
function clickHandle() {
  emit('close');
}
</script>

<style lang="scss" scoped></style>
