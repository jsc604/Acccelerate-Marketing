<template>
  <div class="navbar-wrapper">
    <nav class="navbar">
      <NuxtLink to="#" class="navbar__brand" @click.prevent="scrollToTop">
        <img
          src="/images/accelerate_logo.webp"
          alt="accelerate marketing logo"
          width="48"
          height="49"
        />
        <h1>Accelerate Marketing</h1>
      </NuxtLink>

      <ul class="navbar__desktop">
        <li>
          <NuxtLink to="#services">Services</NuxtLink>
        </li>
        <li>
          <NuxtLink to="#">Our Work</NuxtLink>
        </li>
        <li>
          <NuxtLink to="#contact">Contact</NuxtLink>
        </li>
      </ul>

      <!-- Mobile Hamburger Menu -->
      <button
        class="block md:hidden focus:outline-none"
        @click="toggleMenu"
        aria-label="Toggle Menu"
      >
        <svg
          v-if="!menuOpen"
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg
          v-else
          xmlns="http://www.w3.org/2000/svg"
          class="w-6 h-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      <transition name="slide-down">
        <div v-if="menuOpen" class="navbar__mobile">
          <ul class="navbar__mobile-menu">
            <li>
              <NuxtLink to="#">Home</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#">Services</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#">About</NuxtLink>
            </li>
            <li>
              <NuxtLink to="#">Contact</NuxtLink>
            </li>
          </ul>
        </div>
      </transition>
    </nav>
  </div>
</template>

<script setup>
const menuOpen = ref(false);
const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
};
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

</script>

<style lang="scss" scoped>
.navbar-wrapper {
  @apply fixed z-10 w-full bg-black/75;
  box-shadow: 0 4px 8px 0 rgba(255, 111, 0, 0.6);
  backdrop-filter: blur(8px);
}
.navbar {
  @apply container relative flex items-center justify-between h-20 px-6 py-4 mx-auto text-lg;

  &__brand {
    @apply flex items-center gap-4;
  }

  &__desktop {
    @apply items-center hidden gap-8 md:flex;
    li {
      @apply hover:text-[#ff6f00] transition-colors;
    }
  }

  &__mobile {
    @apply absolute left-0 z-50 w-full rounded-b-sm shadow-md top-20 bg-black/85;
    box-shadow: 0 4px 8px 0 rgba(255, 111, 0, 0.6);
  }

  &__mobile-menu {
    @apply flex flex-col items-start gap-4 p-4;

    li {
      @apply mx-auto;
      a {
        @apply block w-full py-2 hover:text-[#ff6f00] transition-colors;
      }
    }
  }
}

/* Slide-down animation */
.slide-down-enter-active {
  animation: slide-down 0.3s ease-out;
}
.slide-down-leave-active {
  animation: slide-up 0.3s ease-in;
}

@keyframes slide-down {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes slide-up {
  from {
    opacity: 1;
    transform: translateY(0);
  }
  to {
    opacity: 0;
    transform: translateY(-20px);
  }
}
</style>
