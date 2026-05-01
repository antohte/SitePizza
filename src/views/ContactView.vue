<template>
  <main class="page">
    <div class="page-hero">
      <div class="page-hero-bg"></div>
      <div class="page-hero-overlay"></div>
      <div class="page-hero-content">
        <span class="page-eyebrow">Nous trouver</span>
        <h1 class="page-title">Contact &amp; Horaires</h1>
        <p class="page-sub">Venez nous rendre visite à Wambrechies</p>
      </div>
    </div>

    <div class="contact-body">
      <div class="contact-grid">

        <div class="contact-card">
          <div class="contact-card-header">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.02l-2.21 2.2z"/></svg>
            <h2>Téléphone</h2>
          </div>
          <p class="contact-phone">03 20 42 14 19</p>
          <p class="contact-hint">Pour commander ou réserver</p>
        </div>

        <div class="contact-card">
          <div class="contact-card-header">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            <h2>Adresse</h2>
          </div>
          <address class="contact-address">
            4, rue du 11 novembre 1918<br />
            Wambrechies (59118)
          </address>
          <a
            href="https://maps.google.com/?q=4+rue+du+11+novembre+1918+Wambrechies+59118"
            target="_blank"
            rel="noopener"
            class="contact-map-link"
          >
            Ouvrir dans Google Maps →
          </a>
        </div>

        <div class="contact-card">
          <div class="contact-card-header">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/></svg>
            <h2>Horaires d'ouverture</h2>
          </div>
          <div class="horaires-table">
            <div
              v-for="(heures, jour) in info.horaires"
              :key="jour"
              class="horaire-row"
              :class="{ fermé: heures === 'Fermé' }"
            >
              <span class="horaire-jour">{{ jour }}</span>
              <span class="horaire-heures">{{ heures }}</span>
            </div>
          </div>
        </div>

        <div class="contact-card">
          <div class="contact-card-header">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-8l8 5 8-5v8zm-8-7L4 6h16l-8 5z"/></svg>
            <h2>Nous suivre</h2>
          </div>
          <a
            href="https://www.facebook.com/LoukaPizza"
            target="_blank"
            rel="noopener"
            class="contact-social"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.1 4.388 23.094 10.125 24v-8.437H7.078v-3.49h3.047V9.41c0-3.025 1.791-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.491 0-1.956.93-1.956 1.886v2.27h3.328l-.532 3.49h-2.796V24C19.612 23.094 24 18.1 24 12.073z"/></svg>
            Louka Pizza sur Facebook
          </a>
          <div class="contact-paiement">
            <p class="paiement-label">Moyens de paiement acceptés :</p>
            <div class="paiement-badges">
              <span v-for="p in info.paiement" :key="p" class="paiement-badge">{{ p }}</span>
            </div>
          </div>
          <div class="contact-livraison">
            <p class="livraison-label">Livraison disponible via</p>
            <a href="https://deliveroo.fr" target="_blank" rel="noopener" class="deliveroo-link">
              Deliveroo →
            </a>
          </div>
        </div>

      </div>

    </div>
  </main>
</template>

<script setup>
import { info } from '@/data/restaurant.js'
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

.contact-body {
  max-width: 1100px;
  margin: 0 auto;
  padding: 4rem 2rem;
}

.contact-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5px;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.06);
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 2rem;
}

.contact-card {
  background: var(--black);
  padding: 2.5rem 2rem;
}

.contact-card-header {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1.4rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid rgba(201,168,76,0.15);
  color: var(--gold);
}

.contact-card-header h2 {
  font-family: var(--font-display);
  font-size: 1rem;
  font-weight: 700;
  color: var(--white);
  letter-spacing: 0.05em;
}

.contact-phone {
  display: block;
  font-family: var(--font-display);
  font-size: 2rem;
  font-weight: 700;
  color: var(--gold);
  letter-spacing: 0.06em;
  margin-bottom: 0.4rem;
  transition: color 0.25s;
}
.contact-phone:hover { color: var(--gold-light); }

.contact-hint {
  font-family: var(--font-body);
  font-size: 0.82rem;
  color: var(--ash);
  letter-spacing: 0.05em;
}

.contact-address {
  font-style: normal;
  font-family: var(--font-sub);
  font-size: 1.2rem;
  color: var(--cream);
  line-height: 1.7;
  margin-bottom: 0.8rem;
}

.contact-map-link {
  font-family: var(--font-body);
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: var(--gold);
  transition: color 0.25s;
}
.contact-map-link:hover { color: var(--gold-light); }

.horaires-table {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.horaire-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 0;
  border-bottom: 1px solid rgba(255,255,255,0.04);
  gap: 1rem;
}

.horaire-row:last-child { border-bottom: none; }

.horaire-jour {
  font-family: var(--font-body);
  font-size: 0.88rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  color: var(--silver);
  flex-shrink: 0;
}

.horaire-heures {
  font-family: var(--font-body);
  font-size: 0.88rem;
  color: var(--cream);
  text-align: right;
}

.horaire-row.fermé .horaire-heures {
  color: var(--ash);
  font-style: italic;
}

.contact-social {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-family: var(--font-body);
  font-size: 0.9rem;
  color: var(--silver);
  margin-bottom: 1.5rem;
  transition: color 0.25s;
}
.contact-social:hover { color: var(--gold); }

.contact-paiement { margin-bottom: 1.2rem; }

.paiement-label {
  font-family: var(--font-body);
  font-size: 0.78rem;
  letter-spacing: 0.05em;
  color: var(--ash);
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}

.paiement-badges {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.paiement-badge {
  background: rgba(255,255,255,0.06);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 2px;
  padding: 3px 10px;
  font-family: var(--font-body);
  font-size: 0.78rem;
  color: var(--silver);
}

.livraison-label {
  font-family: var(--font-body);
  font-size: 0.78rem;
  color: var(--ash);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 4px;
}

.deliveroo-link {
  font-family: var(--font-body);
  font-size: 0.9rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  color: var(--gold);
  transition: color 0.25s;
}
.deliveroo-link:hover { color: var(--gold-light); }

.map-embed { margin-top: 2rem; }

.map-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  height: 200px;
  background: var(--charcoal);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 4px;
  cursor: pointer;
  transition: background 0.25s, border-color 0.25s;
  text-decoration: none;
}

.map-placeholder:hover {
  background: rgba(201,168,76,0.06);
  border-color: rgba(201,168,76,0.3);
}

.map-icon { font-size: 2.5rem; }

.map-address {
  font-family: var(--font-sub);
  font-size: 1rem;
  color: var(--silver);
  font-style: italic;
}

.map-cta {
  font-family: var(--font-body);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--gold);
}

@media (max-width: 768px) {
  .page-hero { height: 28vh; min-height: 200px; }
  .page-hero-content { padding-top: 80px; }
  .contact-body { padding: 3rem 1.5rem; }
  .contact-grid { grid-template-columns: 1fr; }
  .contact-card { padding: 2rem 1.5rem; }
  .contact-phone { font-size: clamp(1.6rem, 4vw, 2rem); }
  .contact-address { font-size: 1.1rem; }
  .horaire-jour, .horaire-heures { font-size: 0.85rem; }
}

@media (max-width: 480px) {
  .contact-body { padding: 2rem 1rem; }
  .contact-card { padding: 1.5rem 1rem; }
  .contact-card-header { gap: 0.6rem; margin-bottom: 1rem; padding-bottom: 0.75rem; }
  .contact-card-header h2 { font-size: 0.92rem; }
  .contact-phone { font-size: clamp(1.3rem, 5vw, 1.6rem); }
  .contact-hint { font-size: 0.75rem; }
  .contact-address { font-size: 1rem; }
  .horaire-row { gap: 0.5rem; padding: 0.4rem 0; }
  .horaire-jour, .horaire-heures { font-size: 0.8rem; }
  .paiement-label, .livraison-label { font-size: 0.75rem; }
  .paiement-badge { font-size: 0.72rem; padding: 2px 7px; }
  .contact-social { font-size: 0.85rem; }
  .deliveroo-link { font-size: 0.85rem; }
}
</style>
