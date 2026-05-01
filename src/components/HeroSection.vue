<template>
  <section class="hero">
    <div class="hero-bg"></div>
    <div class="hero-overlay"></div>

    <div class="hero-content">
      <div class="hero-logo">
        <span class="flag green"></span>
        <h1 class="logo-text">LOUKA PIZZA</h1>
        <span class="flag red"></span>
      </div>

      <p class="hero-title">
        Depuis plus de 18 ans,<br />l'authenticité italienne à Wambrechies
      </p>

      <p class="hero-sub">
        Spécialités italiennes &nbsp;·&nbsp; Fabrication artisanale &nbsp;·&nbsp; Pâte faite maison
      </p>

      <div class="hero-cta">
        <RouterLink to="/contact" class="btn-primary">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.02l-2.21 2.2z"/></svg>
          Commander
        </RouterLink>
        <RouterLink to="/menu" class="btn-outline">Voir la carte</RouterLink>
      </div>
    </div>

    <div class="scroll-indicator" aria-hidden="true">
      <span></span>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>
.hero {
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.hero-bg {
  position: absolute;
  inset: 0;
  background-image: url('@/assets/pizaa.png');
  background-size: cover;
  background-position: center 30%;
  background-repeat: no-repeat;
  filter: grayscale(60%) contrast(1.1);
  transform: scale(1.05);
  animation: heroZoom 12s ease-out forwards;
}

@keyframes heroZoom {
  from { transform: scale(1.05); }
  to   { transform: scale(1); }
}

.hero-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.3) 0%,
    rgba(0, 0, 0, 0.7) 60%,
    rgba(0, 0, 0, 0.95) 100%
  );
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: center;
  padding: 0 1.5rem;
  max-width: 800px;
}

.hero-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin-bottom: 2rem;
  animation: fadeUp 0.8s ease 0.2s both;
}

.logo-text {
  font-family: var(--font-display);
  font-size: clamp(2.2rem, 6vw, 4rem);
  font-weight: 900;
  letter-spacing: 0.2em;
  color: var(--white);
  text-shadow: 0 2px 30px rgba(0,0,0,0.5);
}

.flag {
  display: inline-block;
  width: clamp(28px, 4vw, 44px);
  height: 3px;
  border-radius: 2px;
}
.flag.red  { background: var(--red-ita); }
.flag.green { background: var(--green-ita); }

.hero-title {
  font-family: var(--font-sub);
  font-size: clamp(1.25rem, 2.8vw, 1.8rem);
  font-weight: 300;
  font-style: italic;
  color: var(--cream);
  line-height: 1.5;
  margin-bottom: 1rem;
  animation: fadeUp 0.8s ease 0.5s both;
}

.hero-sub {
  font-family: var(--font-body);
  font-size: clamp(0.85rem, 1.6vw, 1.05rem);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--gold);
  margin-bottom: 2.5rem;
  animation: fadeUp 0.8s ease 0.8s both;
}

.hero-cta {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  animation: fadeUp 0.8s ease 1.1s both;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 0.9rem 2rem;
  background: var(--gold);
  color: var(--black);
  font-family: var(--font-body);
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  border-radius: 2px;
  transition: background 0.25s, transform 0.2s;
}
.btn-primary:hover {
  background: var(--gold-light);
  transform: translateY(-2px);
}

.btn-outline {
  display: inline-flex;
  align-items: center;
  padding: 0.9rem 2rem;
  border: 1px solid rgba(255,255,255,0.6);
  color: var(--white);
  font-family: var(--font-body);
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  border-radius: 2px;
  transition: border-color 0.25s, background 0.25s, transform 0.2s;
}
.btn-outline:hover {
  border-color: var(--gold);
  color: var(--gold);
  transform: translateY(-2px);
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  animation: fadeUp 0.8s ease 1.6s both;
}

.scroll-indicator span {
  display: block;
  width: 24px;
  height: 38px;
  border: 2px solid rgba(255,255,255,0.4);
  border-radius: 12px;
  position: relative;
}

.scroll-indicator span::after {
  content: '';
  position: absolute;
  top: 6px;
  left: 50%;
  transform: translateX(-50%);
  width: 3px;
  height: 8px;
  background: var(--gold);
  border-radius: 2px;
  animation: bounce 1.8s ease-in-out infinite;
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50%       { transform: translateX(-50%) translateY(8px); }
}

@media (max-width: 768px) {
  .hero-title { font-size: clamp(1.1rem, 3.5vw, 1.5rem); }
  .hero-sub   { font-size: clamp(0.78rem, 2vw, 0.95rem); letter-spacing: 0.14em; }
  .btn-primary, .btn-outline { padding: 0.8rem 1.5rem; }
}

@media (max-width: 480px) {
  .hero-content { padding: 0 1rem; }
  .logo-text    { letter-spacing: 0.12em; }
  .hero-title   { font-size: clamp(1rem, 4.5vw, 1.25rem); margin-bottom: 0.75rem; }
  .hero-sub     { font-size: clamp(0.72rem, 2.5vw, 0.88rem); margin-bottom: 1.5rem; }
  .hero-cta     { gap: 0.6rem; }
  .btn-primary, .btn-outline { padding: 0.75rem 1.2rem; font-size: 0.78rem; }
  .scroll-indicator { bottom: 1rem; }
}
</style>
