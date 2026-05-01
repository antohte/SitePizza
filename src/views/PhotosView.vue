<template>
  <main class="page">
    <div class="page-hero">
      <div class="page-hero-bg"></div>
      <div class="page-hero-overlay"></div>
      <div class="page-hero-content">
        <span class="page-eyebrow">Galerie</span>
        <h1 class="page-title">L'Art de la Pizza</h1>
        <p class="page-sub">Le four à bois, les gestes, les saveurs en images</p>
      </div>
    </div>

    <div class="gallery-body">
      <div class="gallery-intro">
        <p>
          Depuis plus de 18 ans, notre four à bois et nos pizzaïolos passionnés créent
          chaque jour des pizzas qui font la fierté de Wambrechies.
        </p>
      </div>

      <div class="gallery-grid">
        <div
          v-for="(photo, i) in photos"
          :key="i"
          class="gallery-item"
          :class="photo.size"
          @click="openLightbox(i)"
        >
          <div class="gallery-img-wrap">
            <img :src="photo.src" :alt="photo.alt" loading="lazy" />
            <div class="gallery-overlay">
              <span class="gallery-zoom">⊕</span>
            </div>
          </div>
          <p v-if="photo.caption" class="gallery-caption">{{ photo.caption }}</p>
        </div>
      </div>
    </div>

    <Transition name="fade">
      <div v-if="lightboxOpen" class="lightbox" @click.self="closeLightbox">
        <button class="lightbox-close" @click="closeLightbox">✕</button>
        <button class="lightbox-prev" @click="prevPhoto">&#8249;</button>
        <div class="lightbox-content">
          <img :src="photos[lightboxIndex].src" :alt="photos[lightboxIndex].alt" />
          <p class="lightbox-caption">{{ photos[lightboxIndex].caption }}</p>
        </div>
        <button class="lightbox-next" @click="nextPhoto">&#8250;</button>
      </div>
    </Transition>

    <ContactBar />
  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import ContactBar from '@/components/ContactBar.vue'

import imgSalle1      from '@/assets/photo_salle1.jpg'
import imgSalle2      from '@/assets/photo_salle2.jpg'
import imgSalle3      from '@/assets/photo_salle3.jpg'
import imgSalle4      from '@/assets/photo_salle4.jpg'
import imgSalle5      from '@/assets/photo_salle5.jpg'
import imgSalle6      from '@/assets/photo_salle6.jpg'
import imgComptoir    from '@/assets/photo_comptoir.jpg'
import imgTaillePizza from '@/assets/photo_taillepizza.jpg'

const lightboxOpen = ref(false)
const lightboxIndex = ref(0)

const photos = [
  { src: imgSalle1,      alt: "La salle du restaurant",         caption: "Notre salle chaleureuse",      size: "normal" },
  { src: imgSalle2,      alt: "L'ambiance de la pizzeria",      caption: "Une ambiance conviviale",      size: "normal" },
  { src: imgComptoir,    alt: "Le comptoir de Louka Pizza",     caption: "Le comptoir",                  size: "normal" },
  { src: imgTaillePizza, alt: "La taille des pizzas",           caption: "Des pizzas généreuses",        size: "large"  },
  { src: imgSalle3,      alt: "Espace de restauration",         caption: "Notre espace",                 size: "normal" },
  { src: imgSalle4,      alt: "La pizzeria vue d'ensemble",     caption: "",   size: "normal" },
  { src: imgSalle5,      alt: "Convivialité chez Louka Pizza",  caption: "",   size: "normal" },
  { src: imgSalle6,      alt: "Chez Louka Pizza",               caption: "",   size: "normal" },
]

function openLightbox(i) {
  lightboxIndex.value = i
  lightboxOpen.value = true
}

function closeLightbox() { lightboxOpen.value = false }

function prevPhoto() {
  lightboxIndex.value = (lightboxIndex.value - 1 + photos.length) % photos.length
}

function nextPhoto() {
  lightboxIndex.value = (lightboxIndex.value + 1) % photos.length
}

function onKey(e) {
  if (!lightboxOpen.value) return
  if (e.key === 'ArrowLeft')  prevPhoto()
  if (e.key === 'ArrowRight') nextPhoto()
  if (e.key === 'Escape')     closeLightbox()
}

onMounted(() => window.addEventListener('keydown', onKey))
onUnmounted(() => window.removeEventListener('keydown', onKey))
</script>

<style scoped>
.page { padding-top: 0; }

.page-hero {
  position: relative;
  height: 40vh;
  min-height: 320px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.page-hero-bg {
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, var(--charcoal) 0%, var(--black) 100%);
}

.page-hero-overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at center, rgba(201,168,76,0.06) 0%, transparent 70%);
}

.page-hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 0 1.5rem;
  padding-top: 72px;
}

.page-eyebrow {
  display: block;
  font-family: var(--font-body);
  font-size: 0.72rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 0.8rem;
}

.page-title {
  font-family: var(--font-display);
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 900;
  color: var(--white);
  letter-spacing: 0.04em;
  margin-bottom: 0.75rem;
}

.page-sub {
  font-family: var(--font-sub);
  font-size: 1.2rem;
  color: var(--silver);
  font-style: italic;
  font-weight: 300;
}

.gallery-body {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.gallery-intro {
  text-align: center;
  max-width: 600px;
  margin: 0 auto 3rem;
  font-family: var(--font-sub);
  font-size: 1.2rem;
  color: var(--silver);
  line-height: 1.8;
  font-style: italic;
  font-weight: 300;
}

.gallery-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 260px;
  gap: 8px;
}

.gallery-item { cursor: pointer; }

.gallery-item.large {
  grid-column: span 2;
  grid-row: span 2;
}

.gallery-img-wrap {
  position: relative;
  height: 100%;
  overflow: hidden;
  border-radius: 2px;
  background: var(--charcoal);
}

.gallery-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(30%) contrast(1.05);
  transition: transform 0.5s ease, filter 0.4s ease;
}

.gallery-item:hover .gallery-img-wrap img {
  transform: scale(1.06);
  filter: grayscale(0%) contrast(1.1);
}

.gallery-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.3s;
}

.gallery-zoom {
  font-size: 2rem;
  color: var(--gold);
  opacity: 0;
  transition: opacity 0.3s;
}

.gallery-item:hover .gallery-overlay { background: rgba(0,0,0,0.35); }
.gallery-item:hover .gallery-zoom { opacity: 1; }

.gallery-caption {
  font-family: var(--font-body);
  font-size: 0.75rem;
  color: var(--ash);
  letter-spacing: 0.08em;
  margin-top: 6px;
  text-transform: uppercase;
}

/* Lightbox */
.lightbox {
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.96);
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
}

.lightbox-close {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: none;
  border: 1px solid rgba(255,255,255,0.2);
  color: var(--silver);
  font-size: 1.1rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  transition: border-color 0.2s, color 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
}
.lightbox-close:hover { border-color: var(--gold); color: var(--gold); }

.lightbox-prev,
.lightbox-next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  color: rgba(255,255,255,0.5);
  font-size: 3.5rem;
  cursor: pointer;
  padding: 1rem;
  transition: color 0.2s;
  line-height: 1;
}
.lightbox-prev { left: 0.5rem; }
.lightbox-next { right: 0.5rem; }
.lightbox-prev:hover, .lightbox-next:hover { color: var(--gold); }

.lightbox-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  max-width: 85vw;
  max-height: 90vh;
}

.lightbox-content img {
  max-width: 85vw;
  max-height: 82vh;
  object-fit: contain;
  border-radius: 2px;
}

.lightbox-caption {
  font-family: var(--font-body);
  font-size: 0.8rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--ash);
}

/* Transition fade */
.fade-enter-active, .fade-leave-active { transition: opacity 0.25s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }

@media (max-width: 768px) {
  .page-hero { height: 28vh; min-height: 200px; }
  .page-hero-content { padding-top: 80px; }
  .gallery-body { padding: 3rem 1.5rem; }
  .gallery-grid { grid-template-columns: repeat(2, 1fr); grid-auto-rows: 190px; gap: 6px; }
  .gallery-item.large { grid-column: span 2; }
  .gallery-intro { font-size: 1.1rem; margin-bottom: 2rem; }
}

@media (max-width: 480px) {
  .gallery-body { padding: 2rem 1rem; }
  .gallery-grid { grid-template-columns: 1fr; grid-auto-rows: 220px; gap: 5px; }
  .gallery-item.large { grid-column: span 1; grid-row: span 1; }
  .gallery-intro { font-size: 1rem; }
  .gallery-caption { font-size: 0.7rem; }
  .lightbox-close { top: 1rem; right: 1rem; width: 36px; height: 36px; font-size: 1rem; }
  .lightbox-prev, .lightbox-next { font-size: 2.5rem; padding: 0.5rem; }
  .lightbox-prev { left: 0; }
  .lightbox-next { right: 0; }
  .lightbox-content { max-width: 96vw; }
  .lightbox-content img { max-width: 96vw; max-height: 78vh; }
}
</style>
