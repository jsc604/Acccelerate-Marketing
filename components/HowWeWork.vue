<template>
  <section class="relative py-16">
    <div class="how-we-work">
      <border-box class="max-w-xl">
        <h1>How We Work</h1>
        <ol>
          <li>
            <span>Collaborate:</span> We start by understanding your goals,
            audience, and challenges. We have experience working with digital
            brands of all sizes from start ups to large corporations.
          </li>
          <li>
            <span>Strategize:</span> Craft tailored marketing plans backed by
            data and creativity.
          </li>
          <li>
            <span>Execute:</span> Deliver campaigns and launches that make an
            impact.
          </li>
        </ol>
      </border-box>
      <img src="/images/laptop.webp" alt="typing on laptop" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
.how-we-work {
  @apply flex flex-col items-center justify-center max-w-screen-xl gap-12 lg:flex-row;

  &::before {
    content: "";
    @apply absolute w-[100vw] h-[100vw] -translate-x-[20%] rounded-full -z-10 -translate-y-[20%];
    min-width: 700px;
    min-height: 700px;
    background: radial-gradient(circle, #6abcff 0%, rgba(106, 188, 255, 0) 70%);
  }

  &__service {
    @apply space-y-2;
    img,
    picture {
      @apply block w-12;
    }
    h2 {
      @apply text-xl font-semibold underline xs:text-2xl sm:text-4xl lg:text-5xl;
    }
    p {
      @apply text-lg;
    }
  }

  h1 {
    @apply text-3xl font-bold sm:text-5xl lg:text-6xl lg:self-start;
  }
  ol {
    @apply space-y-6 text-lg list-decimal;
  }
  ol > li > span {
    @apply text-xl;
  }

  img {
    @apply w-full max-w-xl lg:w-2/5 rounded-3xl;
  }
}
</style>
