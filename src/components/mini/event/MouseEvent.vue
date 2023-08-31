<!-- <script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const x = ref<number>(0);
const y = ref<number>(0);

const handleMouseMove = (a: Window, event: MouseEvent) => {
  x.value = event.clientX;
  y.value = event.clientY;
};

onMounted(() => {
  window.addEventListener("mousemove", handleMouseMove);
});

onUnmounted(() => {
  window.removeEventListener("mousemove", handleMouseMove);
});
</script>

<template>
  <div>
    <span>x:{{ x }} y:{{ y }}</span>
  </div>
</template> -->