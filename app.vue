<template>
  <div>
    <Navbar />
    <Cover />
    <Services />
    <WhyChooseUs />
    <WhatsMakesUsDifferent />
    <Approach />
    <FloatingCircle />
    <!-- <Contact /> -->
  </div>
</template>

<style lang="scss">
html {
  @apply text-lg text-white bg-black;
  font-family: "Rubik", sans-serif;
}
h1,
h2,
h3,
h4 {
  @apply font-['Orbitron'];
}
section {
  @apply container w-screen p-6 mb-6 md:mb-12 lg:mb-32 xl:mb-36;
}
</style>
