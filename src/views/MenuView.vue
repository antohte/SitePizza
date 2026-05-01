<template>
  <main class="page">
    <div class="page-hero">
      <div class="page-hero-bg"></div>
      <div class="page-hero-overlay"></div>
      <div class="page-hero-content">
        <span class="page-eyebrow">Notre Carte</span>
        <h1 class="page-title">Pizzas &amp; Plats</h1>
        <p class="page-sub">Pâte maison, ingrédients frais, recettes authentiques</p>
      </div>
    </div>

    <div class="menu-body">

      <!-- PIZZAS -->
      <div v-for="category in pizzas" :key="category.categorie" class="menu-section">
        <div class="menu-category-header">
          <span class="menu-category-line"></span>
          <h2 class="menu-category-title">{{ category.categorie }}</h2>
          <span class="menu-category-line"></span>
        </div>

        <p v-if="category.note" class="menu-note">{{ category.note }}</p>

        <div class="menu-table">
          <!-- En-tête colonnes -->
          <div class="table-header">
            <span class="col-name"></span>
            <span class="col-desc"></span>
            <span class="col-price">Ø21</span>
            <span class="col-price">Ø26</span>
            <span class="col-price">Ø30</span>
          </div>

          <div
            v-for="item in category.items"
            :key="item.nom"
            class="table-row"
            :class="{ featured: item.moisPizza }"
          >
            <div v-if="item.moisPizza" class="item-badge">★ Pizza du mois</div>
            <span class="col-name">{{ item.nom }}</span>
            <span class="col-desc">{{ item.desc }}</span>
            <span class="col-price">{{ fmtPrix(item.prix[0]) }}</span>
            <span class="col-price">{{ fmtPrix(item.prix[1]) }}</span>
            <span class="col-price">{{ fmtPrix(item.prix[2]) }}</span>
          </div>

          <!-- Ligne suppléments -->
          <div class="table-row supplements">
            <span class="col-name">Suppléments</span>
            <span class="col-desc"></span>
            <span class="col-price">{{ fmtPrix(supplements.prix[0]) }}</span>
            <span class="col-price">{{ fmtPrix(supplements.prix[1]) }}</span>
            <span class="col-price">{{ fmtPrix(supplements.prix[2]) }}</span>
          </div>
        </div>
      </div>

      <!-- PLATS -->
      <div v-for="category in plats" :key="category.categorie" class="menu-section">
        <div class="menu-category-header">
          <span class="menu-category-line"></span>
          <h2 class="menu-category-title">{{ category.categorie }}</h2>
          <span class="menu-category-line"></span>
        </div>

        <div class="plats-grid">
          <div v-for="item in category.items" :key="item.nom" class="plat-item">
            <div class="plat-header">
              <h3 class="plat-name">{{ item.nom }}</h3>
              <span class="plat-price">{{ fmtPrix(item.prix) }}</span>
            </div>
            <p class="plat-desc">{{ item.desc }}</p>
            <span v-if="item.note" class="plat-note">⚠ {{ item.note }}</span>
          </div>
        </div>
      </div>

    </div>

    <ContactBar />
  </main>
</template>

<script setup>
import { pizzas, plats, supplements } from '@/data/restaurant.js'
import ContactBar from '@/components/ContactBar.vue'

function fmtPrix(val) {
  return val.toFixed(2).replace('.', ',') + ' €'
}
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

.menu-body {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.menu-section { margin-bottom: 4rem; }

.menu-category-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1rem;
}

.menu-category-line {
  flex: 1;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(201,168,76,0.3), transparent);
}

.menu-category-title {
  font-family: var(--font-display);
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--white);
  white-space: nowrap;
  letter-spacing: 0.06em;
}

.menu-note {
  font-family: var(--font-body);
  font-size: 0.82rem;
  letter-spacing: 0.06em;
  color: var(--gold);
  text-align: center;
  margin-bottom: 1.5rem;
  opacity: 0.85;
}

/* Table pizzas */
.menu-table {
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 3px;
  overflow: hidden;
}

.table-header {
  display: grid;
  grid-template-columns: 180px 1fr 80px 80px 80px;
  padding: 0.6rem 1.2rem;
  background: rgba(201,168,76,0.1);
  border-bottom: 1px solid rgba(201,168,76,0.2);
  gap: 0.8rem;
}

.table-row {
  display: grid;
  grid-template-columns: 180px 1fr 80px 80px 80px;
  padding: 0.7rem 1.2rem;
  border-bottom: 1px solid rgba(255,255,255,0.04);
  gap: 0.8rem;
  align-items: center;
  position: relative;
  transition: background 0.2s;
}

.table-row:last-child { border-bottom: none; }
.table-row:hover { background: rgba(255,255,255,0.025); }

.table-row.featured {
  background: rgba(201,168,76,0.07);
  border-left: 2px solid var(--gold);
}

.table-row.supplements {
  background: rgba(255,255,255,0.02);
  border-top: 1px solid rgba(255,255,255,0.08);
}

.item-badge {
  position: absolute;
  top: -1px;
  left: 1.2rem;
  font-family: var(--font-body);
  font-size: 0.58rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--black);
  background: var(--gold);
  padding: 1px 7px;
  border-radius: 0 0 2px 2px;
}

.table-row.featured .col-name { padding-top: 0.8rem; }

.col-name {
  font-family: var(--font-display);
  font-size: 0.92rem;
  font-weight: 700;
  color: var(--white);
}

.table-header .col-name,
.table-header .col-desc { color: transparent; }

.col-desc {
  font-family: var(--font-sub);
  font-size: 1rem;
  color: var(--ash);
  line-height: 1.4;
  font-weight: 300;
}

.col-price {
  font-family: var(--font-body);
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--gold);
  text-align: right;
  white-space: nowrap;
}

.table-header .col-price {
  font-family: var(--font-body);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  color: var(--gold);
  text-align: right;
}

.supplements .col-name {
  font-family: var(--font-body);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--ash);
}

/* Plats */
.plats-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
  background: rgba(255,255,255,0.05);
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 3px;
  overflow: hidden;
}

.plat-item {
  background: var(--black);
  padding: 1.3rem 1.5rem;
  transition: background 0.2s;
}

.plat-item:hover { background: rgba(255,255,255,0.025); }

.plat-header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 1rem;
  margin-bottom: 0.35rem;
}

.plat-name {
  font-family: var(--font-display);
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--white);
}

.plat-price {
  font-family: var(--font-body);
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--gold);
  white-space: nowrap;
  flex-shrink: 0;
}

.plat-desc {
  font-family: var(--font-sub);
  font-size: 1rem;
  color: var(--ash);
  line-height: 1.4;
  font-weight: 300;
}

.plat-note {
  display: inline-block;
  margin-top: 0.4rem;
  font-family: var(--font-body);
  font-size: 0.72rem;
  letter-spacing: 0.06em;
  color: var(--silver);
  opacity: 0.6;
}

@media (max-width: 900px) {
  .table-header,
  .table-row { grid-template-columns: 140px 1fr 65px 65px 65px; }
}

@media (max-width: 768px) {
  .page-hero { height: 28vh; min-height: 200px; }
  .page-hero-content { padding-top: 80px; }
  .menu-body { padding: 3rem 1.5rem; }
  .table-header,
  .table-row { grid-template-columns: 120px 1fr 58px 58px 58px; }
  .col-name  { font-size: 0.85rem; }
  .col-desc  { font-size: 0.92rem; }
  .col-price { font-size: 0.8rem; }
  .plats-grid { grid-template-columns: 1fr; }
}

@media (max-width: 580px) {
  .table-header { display: none; }
  .table-row {
    grid-template-columns: 1fr auto;
    grid-template-areas:
      "name p3"
      "desc p3";
    padding: 0.9rem 1rem;
    gap: 0.5rem;
  }
  .col-name  { grid-area: name; font-size: 0.88rem; }
  .col-desc  { grid-area: desc; font-size: 0.9rem; }
  .col-price:nth-child(3) { display: none; }
  .col-price:nth-child(4) { display: none; }
  .col-price:nth-child(5) { grid-area: p3; align-self: center; font-size: 0.88rem; }
  .plat-name  { font-size: 0.9rem; }
  .plat-price { font-size: 0.9rem; }
  .plat-desc  { font-size: 0.92rem; }
}

@media (max-width: 480px) {
  .menu-body { padding: 2rem 1rem; }
  .menu-section { margin-bottom: 2.5rem; }
  .menu-category-title { font-size: 1.2rem; }
  .menu-note { font-size: 0.78rem; }
  .table-row { padding: 0.8rem 0.8rem; }
  .item-badge { font-size: 0.55rem; padding: 1px 6px; }
  .plat-item { padding: 1rem 1rem; }
}
</style>
