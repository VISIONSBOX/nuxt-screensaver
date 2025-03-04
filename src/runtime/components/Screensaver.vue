<template>
  <div v-if="isActive" class="screensaver" :style="{ zIndex }">
    <slot>Replace this with whatever you want using the default slot</slot>
  </div>
</template>

<script setup>
import IdleJs from 'idle-js';

const props = defineProps({
  zIndex: {
    type: Number,
    default: 999,
  },
  idleOptions: {
    type: Object,
    default: () => ({
      idle: 60000,
      events: ['mousemove', 'mousedown', 'keydown', 'touchstart'],
    }),
  },
});
const isActive = ref(false);

if (import.meta.client) {
  const idle = new IdleJs({
    onIdle: () => (isActive.value = true),
    onActive: () => (isActive.value = false),
    onHide: () => (isActive.value = false),
    ...props.idleOptions,
  });

  idle.start();
}

// watchEffect(() => {
//   if (isActive.value) {
//     console.log('Screensaver is active');
//   } else {
//     console.log('Screensaver is inactive');
//   }
// });
</script>

<style lang="postcss" scoped>
.screensaver {
  position: fixed;
  inset: 0;
}
</style>
