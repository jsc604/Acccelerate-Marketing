<template>
  <section class="difference">
    <h1 data-aos="flip-up">What Makes Us Different?</h1>
    <div class="traits">
      <div class="trait" data-aos="fade-up" ref="trait1">
        <h2>Creative Meets Analytical</h2>
        <p>
          We blend innovative creative strategies with data-driven insights to
          deliver campaigns that not only captivate but convert. Every decision
          is backed by both imagination and analytics.
        </p>
      </div>
      <div class="trait" data-aos="fade-up" ref="trait2">
        <h2>Proven Expertise</h2>
        <p>
          With years of experience across diverse industries, we've consistently
          delivered exceptional results. Our track record of successful
          campaigns speaks to our deep understanding of digital marketing
          dynamics.
        </p>
      </div>
      <div class="trait" data-aos="fade-up" ref="trait3">
        <h2>Tailored Solutions</h2>
        <p>
          We craft bespoke strategies that align perfectly with your brand's
          unique identity and goals. Every solution is built from the ground up,
          ensuring your brand stands out in today's competitive landscape.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
const trait1 = ref(null);
const trait2 = ref(null);
const trait3 = ref(null);

onMounted(() => {
  const setDelays = () => {
    if (window.innerWidth >= 1024) {
      trait1.value.setAttribute("data-aos-delay", "0");
      trait2.value.setAttribute("data-aos-delay", "300");
      trait3.value.setAttribute("data-aos-delay", "600");
    } else {
      trait1.value.removeAttribute("data-aos-delay");
      trait2.value.removeAttribute("data-aos-delay");
      trait3.value.removeAttribute("data-aos-delay");
    }
  };

  setDelays();

  window.addEventListener("resize", setDelays);

  onUnmounted(() => {
    window.removeEventListener("resize", setDelays);
  });
});
</script>

<style lang="scss" scoped>
.difference {
  @apply container flex flex-col items-center justify-center mx-auto space-y-12;
  h1 {
    @apply text-4xl text-center sm:text-5xl md:text-6xl lg:text-7xl;
  }
}
.traits {
  @apply grid grid-cols-1 gap-12 lg:grid-cols-3;
  .trait {
    @apply flex flex-col items-center justify-start gap-5 p-6 text-center rounded-md md:p-10;
    box-shadow: rgba(255, 111, 0, 0.6) 0px 0px 1px,
      rgba(255, 111, 0, 0.6) 0px 0px 2px, rgba(255, 111, 0, 0.6) 0px -1px 4px,
      rgba(255, 111, 0, 0.6) 0px -2px 8px, rgba(255, 111, 0, 0.6) 0px 12px 16px;

    h2 {
      @apply text-2xl;
    }
  }
}
</style>
