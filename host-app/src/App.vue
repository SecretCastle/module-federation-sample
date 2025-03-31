<script setup>
import { defineAsyncComponent, ref } from 'vue';
import { formatDate } from '@shared';

console.log(formatDate(Date.now()));

const Button = defineAsyncComponent(() => import('remote_app/Button'));
const CountDown = defineAsyncComponent(() => import('remote_app/CountDown'));

const time = ref(20);

const handleTimeUpdate = (_time) => {
  time.value = _time;
};

const handleFinished = () => {
  console.log('计时结束');
};
</script>

<template>
  <div
    style="
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
    "
  >
    <Button />
    <CountDown
      :time="time"
      @update:time="handleTimeUpdate"
      @finished="handleFinished"
    />
  </div>
</template>

<style scoped>
.content {
  display: flex;
  min-height: 100vh;
  line-height: 1.1;
  text-align: center;
  flex-direction: column;
  justify-content: center;
}

.content h1 {
  font-size: 3.6rem;
  font-weight: 700;
}

.content p {
  font-size: 1.2rem;
  font-weight: 400;
  opacity: 0.5;
}
</style>
