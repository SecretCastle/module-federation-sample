<script setup>
defineOptions({
  name: 'Button'
})

const onClick = () => {
  console.log("I'm from Remote App")
}
</script>

<template>
  <button @click="onClick">click me</button>
</template>

<style scoped>

</style>