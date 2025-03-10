<template>
  <div
    v-if="isActive"
    class="screensaver"
    :style="{ zIndex }"
  >
    <slot>Replace this with whatever you want using the default slot</slot>
  </div>
</template>

<script setup>
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
})
const isActive = ref(false)

onMounted(async () => {
  const { default: IdleJs } = await import('idle-js')

  const defaultIdleOptions = {
    idle: 60000,
    events: ['mousemove', 'mousedown', 'keydown', 'touchstart'],
    onActive: () => { },
    onIdle: () => { },
  }

  const mergedIdleOptions = { ...defaultIdleOptions, ...props.idleOptions }

  const idle = new IdleJs({
    idle: mergedIdleOptions.idle,
    events: mergedIdleOptions.events,
    onIdle: () => {
      isActive.value = true
      mergedIdleOptions.onIdle()
    },
    onActive: () => {
      isActive.value = false
      mergedIdleOptions.onActive()
    },
  })

  idle.start()
})
</script>

<style lang="postcss" scoped>
.screensaver {
  position: fixed;
  inset: 0;
}
</style>
