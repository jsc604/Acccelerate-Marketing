<template>
  <section class="why-choose-us">
    <border-box>
      <h1>Why Choose Us?</h1>
      <p>
        We don’t just create campaigns; we craft stories that inspire. We pair
        creativity with data-driven insights to deliver measurable growth and
        long-term success. Whether you're launching a new product, managing
        influencers, or seeking to amplify your reach, we have the expertise to
        make it happen.
      </p>
    </border-box>
    <img
      src="/images/tech_accessories.webp"
      alt="tech accessories"
      class="rounded-3xl"
    />
  </section>
</template>

<style lang="scss" scoped>
.why-choose-us {
  @apply relative gap-12 lg:flex-row;

  &::before {
    content: "";
    @apply absolute w-[125vw] h-[125vh] -translate-x-1/2 rounded-full left-1/2 -z-10;
    background: radial-gradient(circle, #f9a01b 0%, rgba(249, 160, 27, 0) 70%);
  }

  &__description {
    @apply flex flex-col items-center justify-center gap-6 p-6 border-2 xs:p-12 lg:p-16 rounded-3xl;
  }

  h1 {
    @apply text-3xl font-bold sm:text-5xl lg:text-6xl;
  }

  p {
    @apply max-w-md text-lg;
  }

  img {
    @apply w-full max-w-xl lg:w-1/2 xs:w-4/5;
  }
}
</style>
