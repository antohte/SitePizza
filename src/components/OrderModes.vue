<template>
  <section class="order" ref="sectionRef">
    <div class="order-inner">
      <div class="section-header" :class="{ visible: isVisible }">
        <span class="section-eyebrow">Nos modes de commande</span>
        <h2 class="section-title">Comme vous le souhaitez</h2>
      </div>

      <div class="order-cards">
        <div
          v-for="(mode, i) in modes"
          :key="mode.titre"
          class="order-card"
          :class="{ visible: isVisible }"
          :style="{ transitionDelay: `${i * 0.12 + 0.2}s` }"
        >
          <div class="card-glass">
            <div class="card-icon" v-html="mode.icon"></div>
            <h3 class="card-titre">{{ mode.titre }}</h3>
            <p class="card-desc">{{ mode.desc }}</p>
            <a v-if="mode.link" :href="mode.link" target="_blank" rel="noopener" class="card-link">
              {{ mode.cta }} →
            </a>
            <a v-else :href="mode.href" class="card-link">{{ mode.cta }} →</a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const sectionRef = ref(null)
const isVisible = ref(false)

const modes = [
  {
    titre: "Sur Place",
    desc: "Profitez de notre salle chaleureuse et de l'ambiance authentique de notre pizzeria pour savourer votre repas.",
    cta: "Voir les horaires",
    href: "/contact",
    icon: `<svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
    </svg>`
  },
  {
    titre: "À Emporter",
    desc: "Commandez par téléphone et récupérez vos pizzas fraîchement préparées directement à la pizzeria.",
    cta: "Appeler maintenant",
    href: "/contact",
    icon: `<svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M5 3h4l2 5-2.5 1.5a11 11 0 005 5L15 12l5 2v4a2 2 0 01-2 2A16 16 0 013 5a2 2 0 012-2z"/>
    </svg>`
  },
  {
    titre: "En Livraison",
    desc: "Faites-vous livrer via Deliveroo, directement à votre porte, pour profiter de nos pizzas depuis chez vous.",
    cta: "Commander sur Deliveroo",
    link: "https://deliveroo.fr",
    icon: `<svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
    </svg>`
  }
]

let observer = null

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => { if (entry.isIntersecting) isVisible.value = true },
    { threshold: 0.15 }
  )
  if (sectionRef.value) observer.observe(sectionRef.value)
})
onUnmounted(() => observer?.disconnect())
</script>

<style scoped>
.order {
  background: var(--black);
  padding: 6rem 2rem;
}

.order-inner {
  max-width: 1100px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 3.5rem;
  opacity: 0;
  transform: translateY(20px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.section-header.visible {
  opacity: 1;
  transform: translateY(0);
}

.section-eyebrow {
  display: block;
  font-family: var(--font-body);
  font-size: 0.75rem;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 0.75rem;
}

.section-title {
  font-family: var(--font-display);
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 700;
  color: var(--white);
}

.order-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.order-card {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.order-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.card-glass {
  background: rgba(255, 255, 255, 0.03);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 4px;
  padding: 2.5rem 2rem;
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: background 0.3s, border-color 0.3s, transform 0.3s;
  backdrop-filter: blur(4px);
}

.card-glass:hover {
  background: rgba(201, 168, 76, 0.05);
  border-color: rgba(201, 168, 76, 0.3);
  transform: translateY(-6px);
}

.card-icon {
  color: var(--gold);
  margin-bottom: 1.5rem;
}

.card-titre {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 0.8rem;
  letter-spacing: 0.04em;
}

.card-desc {
  font-family: var(--font-sub);
  font-size: 1.1rem;
  color: var(--silver);
  line-height: 1.7;
  flex: 1;
  margin-bottom: 1.5rem;
  font-weight: 300;
}

.card-link {
  font-family: var(--font-body);
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--gold);
  transition: color 0.25s, letter-spacing 0.25s;
}

.card-link:hover {
  color: var(--gold-light);
  letter-spacing: 0.18em;
}

@media (max-width: 900px) {
  .order-cards { grid-template-columns: 1fr; max-width: 520px; margin: 0 auto; }
}

@media (max-width: 768px) {
  .order { padding: 4rem 1.5rem; }
  .order-cards { max-width: 100%; gap: 1rem; }
  .card-glass { padding: 2rem 1.5rem; }
}

@media (max-width: 480px) {
  .order { padding: 3rem 1rem; }
  .section-title { font-size: clamp(1.5rem, 5vw, 2rem); }
  .card-glass { padding: 1.5rem 1.2rem; }
  .card-titre { font-size: 1.1rem; }
  .card-desc  { font-size: 1rem; }
}
</style>
