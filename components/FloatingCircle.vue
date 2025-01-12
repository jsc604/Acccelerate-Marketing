<template>
  <div class="circle"></div>
</template>

<style lang="scss" scoped>
.circle {
  @apply fixed rounded-full -z-10;
  width: 150vw;
  height: 150vw;
  background: radial-gradient(circle, #6abcff 0%, rgba(106, 188, 255, 0) 70%);
  bottom: -75vw;
  left: calc(120vw * -0.1);
  animation: circleCollision2 6s ease-in-out infinite;

  @media (min-width: 431px) {
    bottom: -55vw;
    left: calc(100vw * -0.1);
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

@keyframes circleCollision2 {
  0%,
  100% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(15%);
  }
}
</style>
