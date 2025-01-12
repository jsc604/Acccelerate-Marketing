<template>
  <div class="why-choose-us">
    <section>
      <div class="space-y-6">
        <h1>Why Choose Us?</h1>
        <p>
          We don’t just create campaigns; we craft stories that inspire. We pair
          creativity with data-driven insights to deliver measurable growth and
          long-term success. Whether you're launching a new product, managing
          influencers, or seeking to amplify your reach, we have the expertise
          to make it happen.
        </p>
      </div>
      <img
        src="/images/team.webp"
        alt="tech accessories"
        width="741"
        height="741"
      />
    </section>
  </div>
</template>

<style lang="scss" scoped>
.why-choose-us {
  @apply bg-[#ff6f00]/80;
  section {
    @apply container flex flex-col items-center justify-center gap-12 py-12 mx-auto lg:flex-row sm:py-24;
  }
  h1 {
    @apply text-4xl text-start sm:text-5xl md:text-6xl lg:text-7xl;
  }
  img {
    @apply object-cover w-full rounded-md lg:w-1/2;
  }
}
</style>
