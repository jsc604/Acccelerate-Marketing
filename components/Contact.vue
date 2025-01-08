<template>
  <section class="contact">
    <div class="circle circle-1"></div>
    <div class="circle circle-2"></div>

    <div class="contact__container">
      <div class="contact__cta">
        <h1>Let's Accelerate Your Growth</h1>
        <a
          href="mailto:hello@acceleratemarketing.io?subject=Book%20a%20Call&body=I'm%20interested%20in%20booking%20a%20call%20to%20accelerate%20my%20growth."
        >
          BOOK A CALL
        </a>
      </div>
      <border-box class="text-xl">
        <div class="self-start">
          <h2 class="text-3xl">Phone</h2>
          <p>(778)-837-8779</p>
        </div>
        <div class="self-start">
          <h2 class="text-3xl">Email</h2>
          <p>hello@acceleratemarketing.io</p>
        </div>
      </border-box>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.contact {
  @apply relative;

  &__container {
    @apply flex flex-col items-center justify-center max-w-screen-xl gap-12 mx-auto lg:flex-row lg:justify-between;
  }

  &__cta {
    @apply flex flex-col items-center justify-center max-w-xl gap-6 text-center lg:text-start lg:items-center lg:gap-12;
    h1 {
      @apply text-4xl max-w-96 sm:max-w-[75%] sm:text-6xl lg:text-7xl lg:self-start;
      line-height: 1.25 !important;
    }

    a {
      @apply px-8 py-4 text-xl text-black bg-white rounded-3xl;

      &:hover {
        @apply text-white transition-colors duration-300 ease-in-out bg-black border-2;
      }
    }
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

@keyframes circleCollision1 {
  0%,
  100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(-15%);
  }
}

@keyframes circleCollision2 {
  0%,
  100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(15%);
  }
}

.circle-1 {
  background: radial-gradient(circle, #f9a01b 0%, rgba(249, 160, 27, 0) 70%);
  bottom: calc(150vw * -0.4);
  left: calc(150vw * -0.15);
  animation: circleCollision1 6s ease-in-out infinite;

  @media (min-width: 431px) {
    bottom: calc(100vw * -0.4);
    left: calc(100vw * -0.15);
  }
}

.circle-2 {
  background: radial-gradient(circle, #6abcff 0%, rgba(106, 188, 255, 0) 70%);
  top: calc(150vw * -0.3);
  right: calc(150vw * -0.15);
  animation: circleCollision2 6s ease-in-out infinite;

  @media (min-width: 431px) {
    top: calc(100vw * -0.3);
    right: calc(100vw * -0.15);
  }
}
</style>
