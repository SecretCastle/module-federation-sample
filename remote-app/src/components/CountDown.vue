<template>
  <div class="count_down">剩余时间: {{ curTime }}秒</div>
</template>

<script setup>
import {ref, watch, onUnmounted} from 'vue'

defineOptions({
  name: 'CountDown',
})

const props = defineProps({
  time: {type: Number, required: true}
})

const emit = defineEmits(['update:time', 'finished'])

const curTime = ref(props.time)

// 监听props变化重置计时器
watch(() => props.time, (newVal) => {
  curTime.value = newVal
})

const timer = setInterval(() => {
  if (curTime.value > 0) {
    curTime.value--
    emit('update:time', curTime.value) // 通知主机应用
  } else {
    clearInterval(timer)
    emit('finished') // 通知计时结束
  }
}, 1000)

onUnmounted(() => clearInterval(timer))
</script>

<style>
.count_down {
  color: var(--primary-color);
}
</style>