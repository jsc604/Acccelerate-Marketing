<template>
  <section class="contact" id="contact">
    <img
      src="/images/transparent_logo.png"
      alt="accelerate marketing logo"
      width="615"
      height="627"
    />
    <div class="contact__border" ref="border"></div>
    <h1 data-aos="fade-up">Let's Accelerate Your Growth</h1>
    <button data-aos="fade-up">
      <a
        href="mailto:hello@acceleratemarketing.io?subject=Book%20a%20Call&body=I'm%20interested%20in%20booking%20a%20call%20to%20accelerate%20my%20growth."
      >
        BOOK A CALL
      </a>
    </button>

    <div data-aos="fade-up">
      <h2>Phone</h2>
      <p>(778)-837-8779</p>
    </div>
    <div data-aos="fade-up">
      <h2>Email</h2>
      <p>hello@acceleratemarketing.io</p>
    </div>
  </section>
</template>

<script setup>
const border = ref(null);

const handleScroll = () => {
  if (!border.value) return;

  const borderRect = border.value.getBoundingClientRect();
  const isInView = borderRect.top <= window.innerHeight * 0.8;

  if (isInView) {
    border.value.classList.add("slide-right");
  } else {
    border.value.classList.remove("slide-right");
  }
};

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
  handleScroll();
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style lang="scss" scoped>
.contact {
  @apply container relative flex flex-col gap-6 mx-auto md:gap-8;

  h1 {
    @apply text-4xl sm:text-5xl md:text-6xl lg:text-7xl lg:max-w-[60%];
  }

  div,
  button {
    @apply self-start;
  }

  h2 {
    @apply text-3xl;
  }

  &__border {
    @apply border-t-[3px] border-[#ff6f00];
    width: 0;
    transition: width 1s ease-out;

    &.slide-right {
      @apply w-full lg:w-3/5;
    }
  }

  a {
    @apply py-4 px-16 bg-[#ff6f00] rounded-sm max-w-64 hover:bg-[#ff6f00]/70 transition-colors w-full text-center;
  }

  button {
    @apply my-4 cursor-pointer;
  }

  img {
    @apply absolute right-0 hidden w-2/5 translate-y-1/2 opacity-40 sm:block lg:translate-y-0;
  }
}
</style>
