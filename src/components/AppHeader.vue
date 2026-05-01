<template>
  <header :class="['header', { scrolled: isScrolled }]">
    <div class="header-inner">
      <RouterLink to="/" class="header-logo">
        <span class="logo-flag green"></span>
        <span class="logo-text">LOUKA PIZZA</span>
        <span class="logo-flag red"></span>
      </RouterLink>

      <nav :class="['header-nav', { open: menuOpen }]">
        <RouterLink to="/" @click="menuOpen = false">Accueil</RouterLink>
        <RouterLink to="/menu" @click="menuOpen = false">Pizzas &amp; Pâtes</RouterLink>
        <RouterLink to="/boissons" @click="menuOpen = false">Boissons &amp; Desserts</RouterLink>
        <RouterLink to="/photos" @click="menuOpen = false">Photos</RouterLink>
        <RouterLink to="/contact" @click="menuOpen = false">Contact</RouterLink>
      </nav>

      <div class="header-right">
        <a
          href="https://www.facebook.com/LoukaPizza"
          target="_blank"
          rel="noopener"
          class="header-fb"
          aria-label="Facebook Louka Pizza"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.791-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.27h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/>
          </svg>
        </a>
        <button
          class="hamburger"
          :class="{ active: menuOpen }"
          @click="menuOpen = !menuOpen"
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const menuOpen = ref(false)

function onScroll() {
  isScrolled.value = window.scrollY > 60
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  padding: 0 2rem;
  transition: background 0.4s ease, backdrop-filter 0.4s ease, box-shadow 0.4s ease;
}

.header.scrolled {
  background: rgba(10, 10, 10, 0.96);
  backdrop-filter: blur(12px);
  box-shadow: 0 1px 0 rgba(201, 168, 76, 0.2);
}

.header-inner {
  max-width: 1280px;
  margin: 0 auto;
  height: 72px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.header-logo {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  color: var(--white);
  white-space: nowrap;
  flex-shrink: 0;
}

.logo-flag {
  display: inline-block;
  width: 22px;
  height: 2px;
  border-radius: 2px;
}
.logo-flag.red { background: var(--red-ita); }
.logo-flag.green { background: var(--green-ita); }

.header-nav {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.header-nav a {
  font-family: var(--font-body);
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--silver);
  position: relative;
  padding-bottom: 4px;
  transition: color 0.25s;
}

.header-nav a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--gold);
  transition: width 0.3s ease;
}

.header-nav a:hover,
.header-nav a.router-link-active {
  color: var(--white);
}

.header-nav a:hover::after,
.header-nav a.router-link-active::after {
  width: 100%;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
}

.header-fb {
  color: var(--silver);
  transition: color 0.25s;
}
.header-fb:hover { color: var(--gold); }

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}
.hamburger span {
  display: block;
  width: 22px;
  height: 2px;
  background: var(--silver);
  border-radius: 2px;
  transition: transform 0.3s, opacity 0.3s, background 0.3s;
}
.hamburger.active span:nth-child(1) { transform: translateY(7px) rotate(45deg); background: var(--gold); }
.hamburger.active span:nth-child(2) { opacity: 0; }
.hamburger.active span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); background: var(--gold); }

@media (max-width: 768px) {
  /* Header toujours visible sur mobile — fond permanent */
  .header {
    background: rgba(10, 10, 10, 0.97);
    backdrop-filter: blur(12px);
    box-shadow: 0 1px 0 rgba(201, 168, 76, 0.15);
  }

  .hamburger { display: flex; }

  .header-nav {
    position: fixed;
    top: 72px;
    left: 0;
    right: 0;
    background: rgba(10, 10, 10, 0.98);
    backdrop-filter: blur(12px);
    flex-direction: column;
    gap: 0;
    padding: 1rem 0 2rem;
    transform: translateY(-150%);
    visibility: hidden;
    pointer-events: none;
    transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), visibility 0.4s;
    border-bottom: 1px solid rgba(201, 168, 76, 0.2);
  }
  .header-nav.open {
    transform: translateY(0);
    visibility: visible;
    pointer-events: auto;
  }

  .header-nav a {
    padding: 1rem 2rem;
    font-size: 1rem;
    width: 100%;
    text-align: center;
  }
  .header-nav a::after { display: none; }
}

@media (max-width: 480px) {
  .header { padding: 0 1rem; }
  .header-inner { height: 60px; }
  .header-nav { top: 60px !important; }
  .header-logo { font-size: 1rem; gap: 6px; }
  .logo-flag { width: 16px; }
}
</style>
