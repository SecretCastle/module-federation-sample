<script setup>
import { onMounted, ref } from 'vue';

const props = defineProps({
  time: {
    type: Number,
    default: 10,
    required: true,
  },
});
let timer = null;
const cur_time = ref(props.time || 0);

const start = () => {
  if (timer) {
    return;
  }
  timer = setInterval(() => {
    cur_time.value -= 1;
    if (cur_time.value <= 0) {
      clearInterval(timer);
      timer = null;
    }
  }, 1000);
};
</script>

<template>
  <div style="display: flex; flex-direction: row">
    <span>倒计时: {{ cur_time }}</span>
    <button @click="start">开始</button>
  </div>
</template>
