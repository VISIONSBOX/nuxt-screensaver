<template>
  <div>
    Nuxt module playground!

    <NuxtScreensaver
      :idle-options="idleOptions"
      :z-index="1000"
    >
      <div class="whatever">
        Whatever you want ...
      </div>
    </NuxtScreensaver>
  </div>
</template>

<script setup>
const idleOptions = {
  idle: 5000,
  events: ['mousemove', 'mousedown', 'keydown', 'touchstart'],
  onActive: () => {
    console.log('active')
  },
  onIdle: () => {
    console.log('idle')
  },
  onHide: () => {
    console.log('hide')
  },
}
</script>

<style>
html {
  font-family: sans-serif;
}

.whatever {
  color: #fff;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  inset: 0;
}
</style>
