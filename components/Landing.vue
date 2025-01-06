<template>
  <section class="landing-page">
    <div class="circle circle-1"></div>
    <div class="circle circle-2"></div>
    <div class="circle-3"></div>

    <div class="landing-page__title">
      <img src="/images/accelerate_logo.webp" />
      <h1>Accelerate Marketing</h1>
    </div>

    <h2 class="landing-page__description">
      Accelerate Marketing:<br />Where Digital Brands Transform and Thrive
    </h2>
  </section>
</template>

<style lang="scss" scoped>
.landing-page {
  @apply relative flex flex-col items-center justify-center p-6 overflow-hidden sm:items-start md:pl-[15%];

  &__title {
    @apply absolute flex items-center justify-center gap-2 text-2xl xs:text-3xl sm:text-5xl top-[15%];

    img {
      @apply w-12;
    }
  }

  &__description {
    @apply text-4xl max-w-96 sm:max-w-3xl sm:text-6xl lg:text-7xl;
  }
}

.circle {
  @apply absolute rounded-full -z-10;
  width: 150vw;
  height: 150vw;

  @media (min-width: 431px) {
    width: 100vw;
    height: 100vw;
  }
  @media (min-width: 768px) {
    width: 90vw;
    height: 90vw;
  }
  @media (min-width: 1024px) {
    width: 80vw;
    height: 80vw;
  }
}

.circle-1 {
  background: radial-gradient(circle, #f9a01b 0%, rgba(249, 160, 27, 0) 70%);
  top: calc(150vw * -0.25);
  left: calc(150vw * -0.25);
  animation: moveUpDown1 8s ease-in-out infinite;

  @media (min-width: 431px) {
    top: calc(100vw * -0.25);
    left: calc(100vw * -0.25);
  }
  @media (min-width: 431px) {
    top: calc(100vw * -0.25);
    left: calc(100vw * -0.25);
  }
}

.circle-2 {
  background: radial-gradient(circle, #6abcff 0%, rgba(106, 188, 255, 0) 70%);
  bottom: calc(150vw * -0.1);
  right: calc(150vw * -0.25);
  animation: moveUpDown2 8s ease-in-out infinite;

  @media (min-width: 431px) {
    bottom: calc(100vw * -0.1);
    right: calc(100vw * -0.25);
  }
  @media (min-width: 431px) {
    bottom: calc(100vw * -0.4);
    right: calc(100vw * -0.2);
  }
}

@keyframes moveUpDown1 {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15%);
  }
}
@keyframes moveUpDown2 {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(15%);
  }
}

.circle-3 {
  @extend .circle;
  @apply border-r-4 right-[4vw] w-[120vh] h-[120vh] md:w-[1250px] md:h-[1250px] md:right-[8vw] lg:right-[15vw] xl:right-[30vw] 2xl:right-[40vw] border-0;
  border-color: rgba(255, 255, 255, 0.4);
}
</style>
