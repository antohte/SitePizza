<template>
  <section class="contact-bar">
    <div class="bar-inner">
      <div class="bar-phone">
        <span class="bar-label">Réservation &amp; Commande</span>
        <RouterLink to="/contact" class="bar-number">03 20 42 14 19</RouterLink>
      </div>

      <div class="bar-divider"></div>

      <div class="bar-info">
        <div class="bar-address">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
          4, rue du 11 novembre 1918 · Wambrechies (59118)
        </div>
        <div class="bar-hours">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67V7z"/></svg>
          Mar–Jeu &amp; Dim : 11h30–14h / 18h30–21h &nbsp;·&nbsp; Ven–Sam : jusqu'à 21h30 &nbsp;·&nbsp; Lundi fermé
        </div>
      </div>

      <div class="bar-divider"></div>

      <RouterLink to="/contact" class="bar-cta">Voir les horaires complets →</RouterLink>
    </div>
  </section>
</template>

<style scoped>
.contact-bar {
  background: linear-gradient(135deg, #1a1508 0%, #2a1f08 50%, #1a1508 100%);
  border-top: 1px solid rgba(201, 168, 76, 0.3);
  padding: 3rem 2rem;
}

.bar-inner {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 2.5rem;
  flex-wrap: wrap;
  justify-content: center;
}

.bar-phone {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4px;
  flex-shrink: 0;
}

.bar-label {
  font-family: var(--font-body);
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(201, 168, 76, 0.7);
}

.bar-number {
  font-family: var(--font-display);
  font-size: clamp(1.6rem, 3vw, 2.2rem);
  font-weight: 700;
  color: var(--gold);
  letter-spacing: 0.05em;
  transition: color 0.25s;
}
.bar-number:hover { color: var(--gold-light); }

.bar-divider {
  width: 1px;
  height: 50px;
  background: rgba(201, 168, 76, 0.2);
  flex-shrink: 0;
}

.bar-info {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.bar-address,
.bar-hours {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-body);
  font-size: 0.88rem;
  color: rgba(245, 240, 232, 0.7);
  letter-spacing: 0.02em;
}

.bar-address svg,
.bar-hours svg {
  color: var(--gold);
  flex-shrink: 0;
}

.bar-cta {
  font-family: var(--font-body);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--gold);
  padding: 0.7rem 1.4rem;
  border: 1px solid rgba(201, 168, 76, 0.4);
  border-radius: 2px;
  white-space: nowrap;
  transition: background 0.25s, border-color 0.25s;
}
.bar-cta:hover {
  background: rgba(201, 168, 76, 0.1);
  border-color: var(--gold);
}

@media (max-width: 768px) {
  .bar-divider { display: none; }
  .bar-inner { flex-direction: column; text-align: center; gap: 1.5rem; }
  .bar-address, .bar-hours { justify-content: center; }
  .bar-info { align-items: center; }
}

@media (max-width: 480px) {
  .contact-bar { padding: 2rem 1rem; }
  .bar-label { font-size: 0.65rem; }
  .bar-number { font-size: clamp(1.4rem, 5vw, 1.8rem); }
  .bar-address, .bar-hours { font-size: 0.82rem; flex-wrap: wrap; }
  .bar-cta { font-size: 0.72rem; padding: 0.6rem 1rem; }
}
</style>
