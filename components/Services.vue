<template>
  <section class="services">
    <h1 data-aos="fade-up">How We Can Help</h1>
    <div class="services__container">
      <div class="service" data-aos="zoom-in">
        <Icon name="heroicons:user-group-20-solid" size="50%" />
        <div class="space-y-5">
          <h2>Influencer Management</h2>
          <p>
            Find influencers who genuinely align with your brand and values.
            Craft authentic campaigns that connect with your audience and expand
            your reach.
          </p>
        </div>
      </div>
      <div class="service" data-aos="zoom-in">
        <Icon name="heroicons:cog-8-tooth-20-solid" size="50%" />
        <div class="space-y-5">
          <h2>Campaign Creation</h2>
          <p>
            Develop high-impact, story driven campaigns tailored to your brand’s
            voice. Achieve more than just clicks, drive engagement, loyalty, and
            results.
          </p>
        </div>
      </div>
      <div class="service" data-aos="zoom-in">
        <Icon name="heroicons:rocket-launch-solid" size="50%" />
        <div class="space-y-5">
          <h2>Launch Strategy Execution</h2>
          <p>
            Execute seamless campaigns that captivate your audience. From
            pre-launch planning to post-launch analysis, we ensure every step is
            optimized for maximum impact.
          </p>
        </div>
      </div>
      <div class="service" data-aos="zoom-in">
        <Icon name="heroicons:book-open-20-solid" size="50%" />
        <div class="space-y-5">
          <h2>Brand Storytelling</h2>
          <p>
            Craft a distinctive brand narrative that sets you apart. Define your
            unique market position, develop a compelling message, and create
            emotional connections with your audience.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.services {
  @apply container flex flex-col items-center justify-center mx-auto space-y-12;
  h1 {
    @apply text-4xl text-center sm:text-5xl md:text-6xl lg:text-7xl;
  }

  &__container {
    @apply grid grid-cols-1 gap-12 lg:grid-cols-2;
  }
}
.service {
  @apply flex flex-col items-center justify-center gap-5 p-6 text-center rounded-md md:flex-row lg:flex-col xl:flex-row;
  box-shadow: rgba(255, 111, 0, 0.6) 0px 0px 1px,
    rgba(255, 111, 0, 0.6) 0px 0px 2px, rgba(255, 111, 0, 0.6) 0px -1px 4px,
    rgba(255, 111, 0, 0.6) 0px -2px 8px, rgba(255, 111, 0, 0.6) 0px 12px 16px;

  h2 {
    @apply text-2xl;
  }
}
</style>
