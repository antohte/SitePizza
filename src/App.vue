<template>
  <AppHeader />
  <RouterView />
</template>

<script setup>
import AppHeader from '@/components/AppHeader.vue'
</script>

<style>
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --black: #0a0a0a;
  --charcoal: #1a1a1a;
  --smoke: #2d2d2d;
  --ash: #888;
  --silver: #bbb;
  --cream: #f5f0e8;
  --white: #fafafa;
  --gold: #c9a84c;
  --gold-light: #e2c070;
  --red-ita: #c0392b;
  --green-ita: #27ae60;

  --font-display: 'Playfair Display', Georgia, serif;
  --font-sub: 'Cormorant Garamond', Georgia, serif;
  --font-body: 'Barlow Condensed', 'Arial Narrow', sans-serif;
}

html {
  scroll-behavior: smooth;
  overflow-x: hidden;
}

body {
  overflow-x: hidden;
  font-family: var(--font-body);
  background: var(--black);
  color: var(--cream);
  line-height: 1.6;
  -webkit-font-smoothing: antialiased;
}

a {
  color: inherit;
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
}

::selection {
  background: var(--gold);
  color: var(--black);
}

::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background: var(--black);
}
::-webkit-scrollbar-thumb {
  background: var(--gold);
  border-radius: 3px;
}
</style>
