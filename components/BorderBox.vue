<template>
  <div class="border-box">
    <div class="border-box__content">
      <slot></slot>
    </div>
  </div>
</template>

<style scoped>
.border-box {
  @apply box-border relative overflow-hidden;
  border: 4px solid transparent;
  border-radius: 1.5rem;
  background: linear-gradient(black, black) padding-box,
    linear-gradient(
        45deg,
        rgb(255, 255, 255) 0%,
        rgb(100, 100, 100) 20%,
        rgb(200, 200, 200) 40%,
        rgb(255, 255, 255) 60%,
        rgb(100, 100, 100) 80%,
        rgb(200, 200, 200) 100%
      )
      border-box;
}

.border-box__content {
  @apply flex flex-col items-center justify-center gap-6 p-6 xs:p-12 lg:p-16;
  border-radius: inherit;
}

.border-box::after {
  content: "";
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom right,
    transparent,
    rgba(255, 255, 255, 0.1),
    rgba(255, 255, 255, 0.3)
  );
  pointer-events: none;
  border-radius: inherit;
}
</style>
