<template>
  <section class="values" ref="sectionRef">
    <div class="values-inner">
      <div
        v-for="(value, i) in values"
        :key="value.titre"
        class="value-card"
        :class="{ visible: isVisible }"
        :style="{ transitionDelay: `${i * 0.15}s` }"
      >
        <div class="value-icon" v-html="value.icon"></div>
        <div class="value-divider"></div>
        <h3 class="value-titre">{{ value.titre }}</h3>
        <p class="value-desc">{{ value.desc }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const sectionRef = ref(null)
const isVisible = ref(false)

const values = [
  {
    titre: "Saveurs Authentiques",
    desc: "Recettes italiennes traditionnelles transmises avec passion, pour vous offrir le meilleur à chaque bouchée.",
    icon: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
      <path d="M12 6v6l4 2"/>
    </svg>`
  },
  {
    titre: "Savoir-Faire Familial",
    desc: "Une histoire qui dure depuis plus de 18 ans — chaque pizza est le fruit d'un artisanat authentique et d'un amour du métier.",
    icon: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
    </svg>`
  },
  {
    titre: "Ingrédients Frais",
    desc: "Des produits soigneusement sélectionnés chaque jour, une pâte faite maison, pour une qualité irréprochable.",
    icon: `<svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>`
  }
]

let observer = null

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => { if (entry.isIntersecting) isVisible.value = true },
    { threshold: 0.2 }
  )
  if (sectionRef.value) observer.observe(sectionRef.value)
})

onUnmounted(() => observer?.disconnect())
</script>

<style scoped>
.values {
  background: var(--black);
  padding: 6rem 2rem;
}

.values-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0;
}

.value-card {
  padding: 3rem 2.5rem;
  text-align: center;
  border-right: 1px solid rgba(201, 168, 76, 0.15);
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.value-card:last-child { border-right: none; }

.value-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.value-icon {
  color: var(--gold);
  margin-bottom: 1.5rem;
  display: flex;
  justify-content: center;
}

.value-divider {
  width: 40px;
  height: 1px;
  background: linear-gradient(to right, transparent, var(--gold), transparent);
  margin: 0 auto 1.5rem;
}

.value-titre {
  font-family: var(--font-display);
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--white);
  letter-spacing: 0.05em;
  margin-bottom: 0.8rem;
}

.value-desc {
  font-family: var(--font-sub);
  font-size: 1.15rem;
  color: var(--silver);
  line-height: 1.7;
  font-weight: 300;
}

@media (max-width: 768px) {
  .values { padding: 4rem 1.5rem; }
  .values-inner { grid-template-columns: 1fr; }
  .value-card {
    border-right: none;
    border-bottom: 1px solid rgba(201, 168, 76, 0.15);
    padding: 2rem 1.5rem;
  }
  .value-card:last-child { border-bottom: none; }
}

@media (max-width: 480px) {
  .values { padding: 3rem 1rem; }
  .value-card { padding: 1.8rem 1rem; }
  .value-desc { font-size: 1.05rem; }
}
</style>
