<template>
  <main class="page">
    <div class="page-hero">
      <div class="page-hero-bg"></div>
      <div class="page-hero-overlay"></div>
      <div class="page-hero-content">
        <span class="page-eyebrow">Notre Carte</span>
        <h1 class="page-title">Boissons &amp; Desserts</h1>
        <p class="page-sub">À emporter — pour accompagner et clôturer votre repas</p>
      </div>
    </div>

    <div class="menu-body">

      <!-- BOISSONS -->
      <div v-for="category in boissons" :key="category.categorie" class="menu-section">
        <div class="menu-category-header">
          <span class="menu-category-line"></span>
          <h2 class="menu-category-title">
            {{ category.categorie }}
            <span v-if="category.tag" class="category-tag">{{ category.tag }}</span>
          </h2>
          <span class="menu-category-line"></span>
        </div>

        <!-- Tableau avec colonne Format -->
        <div v-if="category.hasFormat" class="bois-table has-format">
          <div class="bois-header">
            <span>Produit</span>
            <span>Format</span>
            <span>Prix</span>
          </div>
          <div v-for="item in category.items" :key="item.nom + item.format" class="bois-row">
            <span class="bois-name">{{ item.nom }}</span>
            <span class="bois-format">{{ item.format }}</span>
            <span class="bois-price">{{ fmtPrix(item.prix) }}</span>
          </div>
        </div>

        <!-- Tableau simple sans Format -->
        <div v-else class="bois-table">
          <div v-for="item in category.items" :key="item.nom" class="bois-row simple">
            <span class="bois-name">{{ item.nom }}</span>
            <span class="bois-dots"></span>
            <span class="bois-price">{{ fmtPrix(item.prix) }}</span>
          </div>
        </div>

        <p v-if="category.note" class="alcohol-note">* {{ category.note }}</p>
      </div>

      <!-- DESSERTS -->
      <div class="menu-section">
        <div class="menu-category-header">
          <span class="menu-category-line"></span>
          <h2 class="menu-category-title">
            Nos Desserts
            <span class="category-tag">À emporter</span>
          </h2>
          <span class="menu-category-line"></span>
        </div>

        <div class="desserts-list">
          <div v-for="item in desserts" :key="item.nom" class="dessert-row">
            <span class="dessert-name">{{ item.nom }}</span>
            <span class="dessert-dots"></span>
            <span class="dessert-price">{{ fmtPrix(item.prix) }}</span>
          </div>
        </div>
      </div>

    </div>

    <ContactBar />
  </main>
</template>

<script setup>
import { boissons, desserts } from '@/data/restaurant.js'
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
  max-width: 900px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.menu-section { margin-bottom: 3.5rem; }

.menu-category-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.2rem;
}

.menu-category-line {
  flex: 1;
  height: 1px;
  background: linear-gradient(to right, transparent, rgba(201,168,76,0.3), transparent);
}

.menu-category-title {
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 700;
  color: var(--white);
  white-space: nowrap;
  letter-spacing: 0.06em;
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.category-tag {
  font-family: var(--font-body);
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--black);
  background: var(--gold);
  padding: 2px 8px;
  border-radius: 2px;
  vertical-align: middle;
}

/* Tableau avec format */
.bois-table {
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 3px;
  overflow: hidden;
}

.bois-header {
  display: grid;
  grid-template-columns: 1fr 120px 80px;
  padding: 0.6rem 1.2rem;
  background: rgba(201,168,76,0.08);
  border-bottom: 1px solid rgba(201,168,76,0.2);
  font-family: var(--font-body);
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--gold);
  gap: 1rem;
}

.bois-row {
  display: grid;
  grid-template-columns: 1fr 120px 80px;
  padding: 0.85rem 1.2rem;
  border-bottom: 1px solid rgba(255,255,255,0.04);
  gap: 1rem;
  align-items: center;
  transition: background 0.2s;
}

.bois-row:last-child { border-bottom: none; }
.bois-row:hover { background: rgba(255,255,255,0.025); }

.bois-name {
  font-family: var(--font-sub);
  font-size: 1.1rem;
  color: var(--cream);
  font-weight: 400;
}

.bois-format {
  font-family: var(--font-body);
  font-size: 0.82rem;
  color: var(--ash);
  letter-spacing: 0.04em;
}

.bois-price {
  font-family: var(--font-body);
  font-size: 0.92rem;
  font-weight: 700;
  color: var(--gold);
  text-align: right;
}

/* Ligne simple sans format */
.bois-row.simple {
  grid-template-columns: 1fr auto auto;
  gap: 0;
}

.bois-dots {
  flex: 1;
  border-bottom: 1px dotted rgba(255,255,255,0.1);
  height: 1px;
  margin: 0 0.8rem;
  min-width: 20px;
}

.alcohol-note {
  margin-top: 0.8rem;
  font-family: var(--font-body);
  font-size: 0.75rem;
  color: var(--ash);
  letter-spacing: 0.03em;
  font-style: italic;
}

/* Desserts */
.desserts-list {
  border: 1px solid rgba(255,255,255,0.07);
  border-radius: 3px;
  overflow: hidden;
}

.dessert-row {
  display: flex;
  align-items: center;
  padding: 0.85rem 1.2rem;
  border-bottom: 1px solid rgba(255,255,255,0.04);
  transition: background 0.2s;
}

.dessert-row:last-child { border-bottom: none; }
.dessert-row:hover { background: rgba(255,255,255,0.025); }

.dessert-name {
  font-family: var(--font-sub);
  font-size: 1.1rem;
  color: var(--cream);
  font-weight: 400;
}

.dessert-dots {
  flex: 1;
  border-bottom: 1px dotted rgba(255,255,255,0.1);
  height: 1px;
  margin: 0 0.8rem;
}

.dessert-price {
  font-family: var(--font-body);
  font-size: 0.92rem;
  font-weight: 700;
  color: var(--gold);
  white-space: nowrap;
}

@media (max-width: 768px) {
  .page-hero { height: 28vh; min-height: 200px; }
  .page-hero-content { padding-top: 80px; }
  .menu-body { padding: 3rem 1.5rem; }
  .bois-header,
  .bois-row { grid-template-columns: 1fr 100px 62px; }
  .bois-name   { font-size: 1rem; }
  .bois-format { font-size: 0.78rem; }
  .bois-price  { font-size: 0.86rem; }
  .dessert-name  { font-size: 1rem; }
  .dessert-price { font-size: 0.86rem; }
  .menu-category-title { font-size: 1.2rem; }
}

@media (max-width: 540px) {
  .bois-header { grid-template-columns: 1fr 56px; }
  .bois-header span:nth-child(2) { display: none; }
  .bois-row    { grid-template-columns: 1fr 56px; }
  .bois-format { display: none; }
}

@media (max-width: 480px) {
  .menu-body { padding: 2rem 1rem; }
  .menu-section { margin-bottom: 2.5rem; }
  .bois-row   { padding: 0.75rem 1rem; }
  .bois-name  { font-size: 0.95rem; }
  .bois-price { font-size: 0.82rem; }
  .dessert-row   { padding: 0.75rem 1rem; }
  .dessert-name  { font-size: 0.95rem; }
  .dessert-price { font-size: 0.82rem; }
  .dessert-dots, .bois-dots { margin: 0 0.5rem; }
  .alcohol-note { font-size: 0.72rem; }
}
</style>
