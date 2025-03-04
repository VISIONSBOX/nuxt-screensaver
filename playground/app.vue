<template>
  <div>
    Nuxt module playground!

    <Screensaver :idle-options="idleOptions" :z-index="1000">
      <div class="whatever">Whatever you want ...</div>
    </Screensaver>
  </div>
</template>

<script setup>
const idleOptions = {
  idle: 5000,
  events: ['mousemove', 'mousedown', 'keydown', 'touchstart'],
};
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
