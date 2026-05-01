<template>
  <section class="highlight" ref="sectionRef">
    <div class="highlight-inner">
      <div class="highlight-image" :class="{ visible: isVisible }">
        <div class="pizza-circle">
          <span class="pizza-emoji">🍕</span>
        </div>
        <div class="grain-overlay"></div>
      </div>

      <div class="highlight-content" :class="{ visible: isVisible }">
        <span class="badge">
          <span class="badge-star">★</span>
          Pizza du mois
          <span class="badge-star">★</span>
        </span>

        <h2 class="pizza-name">Chorizo<br /><em>Curry</em></h2>

        <p class="pizza-desc">
          Une symphonie d'épices et de caractère : crème onctueuse, mozzarella filante,
          chorizo généreux, curry parfumé et oignons caramélisés dorés.
          Un voyage entre l'Italie et l'Orient.
        </p>

        <div class="pizza-sizes">
          <div class="size-item" v-for="size in sizes" :key="size.label">
            <span class="size-label">{{ size.label }}</span>
            <span class="size-price">{{ size.price }}</span>
          </div>
        </div>

        <RouterLink to="/menu" class="btn-gold">Découvrir la carte</RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const sectionRef = ref(null)
const isVisible = ref(false)

const sizes = [
  { label: 'Ø 21 cm', price: '9,00 €' },
  { label: 'Ø 26 cm', price: '12,00 €' },
  { label: 'Ø 30 cm', price: '15,50 €' },
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
.highlight {
  background: var(--charcoal);
  padding: 6rem 2rem;
  overflow: hidden;
  position: relative;
}

.highlight::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
  pointer-events: none;
}

.highlight-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5rem;
  align-items: center;
}

.highlight-image {
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  transform: translateX(-40px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.highlight-image.visible {
  opacity: 1;
  transform: translateX(0);
}

.pizza-circle {
  width: clamp(240px, 35vw, 380px);
  height: clamp(240px, 35vw, 380px);
  border-radius: 50%;
  background: radial-gradient(circle at 35% 35%, var(--smoke), var(--black));
  border: 1px solid rgba(201, 168, 76, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: clamp(5rem, 12vw, 9rem);
  box-shadow:
    0 0 60px rgba(201, 168, 76, 0.08),
    inset 0 0 40px rgba(0,0,0,0.4);
  animation: rotate 30s linear infinite;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

.grain-overlay {
  position: absolute;
  inset: 0;
  pointer-events: none;
}

.highlight-content {
  opacity: 0;
  transform: translateX(40px);
  transition: opacity 0.8s ease 0.2s, transform 0.8s ease 0.2s;
}

.highlight-content.visible {
  opacity: 1;
  transform: translateX(0);
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: var(--gold);
  color: var(--black);
  font-family: var(--font-body);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  padding: 0.4rem 1rem;
  border-radius: 2px;
  margin-bottom: 1.5rem;
  animation: pulse 2.5s ease-in-out infinite;
}

.badge-star { font-size: 0.6rem; }

@keyframes pulse {
  0%, 100% { box-shadow: 0 0 0 0 rgba(201, 168, 76, 0.4); }
  50%       { box-shadow: 0 0 0 8px rgba(201, 168, 76, 0); }
}

.pizza-name {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  color: var(--white);
  line-height: 1.1;
  margin-bottom: 1.5rem;
}

.pizza-name em {
  color: var(--gold);
  font-style: italic;
}

.pizza-desc {
  font-family: var(--font-sub);
  font-size: 1.05rem;
  color: var(--silver);
  line-height: 1.8;
  margin-bottom: 2rem;
  font-weight: 300;
}

.pizza-sizes {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
  flex-wrap: wrap;
}

.size-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  padding: 0.8rem 1.2rem;
  border: 1px solid rgba(201, 168, 76, 0.3);
  border-radius: 2px;
}

.size-label {
  font-family: var(--font-body);
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  color: var(--ash);
  text-transform: uppercase;
}

.size-price {
  font-family: var(--font-display);
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--gold);
}

.btn-gold {
  display: inline-block;
  padding: 0.9rem 2rem;
  background: transparent;
  border: 1px solid var(--gold);
  color: var(--gold);
  font-family: var(--font-body);
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  border-radius: 2px;
  transition: background 0.25s, color 0.25s, transform 0.2s;
}

.btn-gold:hover {
  background: var(--gold);
  color: var(--black);
  transform: translateY(-2px);
}

@media (max-width: 768px) {
  .highlight-inner {
    grid-template-columns: 1fr;
    gap: 3rem;
    text-align: center;
  }
  .pizza-sizes { justify-content: center; }
  .highlight-content { transform: translateY(40px); }
  .highlight-content.visible { transform: translateY(0); }
}
</style>
