<template>
  <section class="cover">
    <div class="flex flex-col gap-12 items-start lg:w-1/2">
      <h1>Where Digital Brands Transform And Thrive</h1>
      <p>
        Accelerate Marketing specializes in driving innovation and growth in the
        ever growing digital landscape.
      </p>
      <div class="space-y-6">
        <button>Services</button>
        <button>Contact</button>
      </div>
    </div>
    <div class="zoom-container lg:self-baseline w-full lg:w-1/2">
      <img
        src="/images/accelerate.webp"
        alt="accelerate marketing cover photo"
        width="741"
        height="741"
        class="zooming"
      />
      <div class="vignette"></div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.cover {
  @apply flex flex-col items-center justify-center min-h-screen gap-12 mx-auto text-lg pt-28 lg:flex-row;
  h1 {
    @apply text-4xl sm:text-5xl md:text-6xl lg:text-7xl;
    background: -webkit-linear-gradient(
      318deg,
      #f9d0b0,
      #ff6f00,
      #f9d0b0,
      #ff6f00,
      #f9d0b0,
      #ff6f00
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-size: 400% 400%;
    animation: gradient 7s ease infinite;
  }

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }

    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  button {
    @apply py-4 px-16 box-border bg-[#ff6f00] rounded-sm max-w-64 hover:bg-[#ff6f00]/70 transition-colors w-full;

    &:last-child {
      @apply border-2 hover:border-transparent bg-transparent hover:bg-[#ff6f00]/70;
    }
  }
}

.zoom-container {
  position: relative;
  overflow: hidden;
  mask-image: radial-gradient(circle at center, black 0%, transparent 70%);
  -webkit-mask-image: radial-gradient(
    circle at center,
    black 0%,
    transparent 69%
  );

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
}

.zooming {
  animation: zoom 20s ease-in infinite;
  transform-origin: center center;
}

.vignette {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background: radial-gradient(
    circle at center,
    transparent 40%,
    rgba(0, 0, 0, 0.1) 70%,
    rgba(0, 0, 0, 0.3) 100%
  );
}

@keyframes zoom {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.8);
  }
}
</style>
