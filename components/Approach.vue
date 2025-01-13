<template>
  <section class="approach">
    <h1 data-aos="zoom-out">Our Approach To Success</h1>

    <div class="steps">
      <div class="step" data-aos="fade-up">
        <div class="step-number">1</div>
        <div class="step-content">
          <h2>Collaborate</h2>
          <p>
            Our journey begins with you. We dive deep into understanding your
            goals, audience, and challenges, leveraging our experience with
            digital brands of all sizes. Whether you're a dynamic start-up or a
            global corporation.
          </p>
        </div>
        <div class="step-connector"></div>
      </div>

      <div class="step" data-aos="fade-up">
        <div class="step-number">2</div>
        <div class="step-content">
          <h2>Strategize</h2>
          <p>
            Using a blend of data-driven insights and creative expertise, we
            craft customized marketing plans designed to resonate with your
            audience and achieve your objectives.
          </p>
        </div>
        <div class="step-connector"></div>
      </div>

      <div class="step" data-aos="fade-up">
        <div class="step-number">3</div>
        <div class="step-content">
          <h2>Execute</h2>
          <p>
            From campaigns to launches, we ensure flawless execution that
            delivers measurable impact and leaves a lasting impression.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.approach {
  @apply container flex flex-col items-center justify-center mx-auto space-y-12;
  h1 {
    @apply text-4xl text-center sm:text-5xl md:text-6xl lg:text-7xl;
  }
}

.steps {
  @apply grid grid-cols-1 gap-12 lg:grid-cols-3;
  @apply relative w-full;
}

.step {
  @apply relative flex flex-col items-center justify-start gap-5 p-6 text-center rounded-md md:p-10;
  box-shadow: rgba(255, 111, 0, 0.6) 0px 0px 1px,
    rgba(255, 111, 0, 0.6) 0px 0px 2px, rgba(255, 111, 0, 0.6) 0px -1px 4px,
    rgba(255, 111, 0, 0.6) 0px -2px 8px, rgba(255, 111, 0, 0.6) 0px 12px 16px;

  h2 {
    @apply text-2xl;
  }

  .step-number {
    @apply flex items-center justify-center w-10 h-10 text-xl font-bold text-white rounded-full lg:w-16 lg:h-16 lg:text-3xl;
    background: rgb(255, 111, 0);
    margin-bottom: 1rem;
  }

  .step-content {
    @apply flex flex-col gap-4;
  }

  .step-connector {
    @apply hidden lg:block;
    position: absolute;
    top: 4rem;
    right: -6rem;
    width: 6rem;
    height: 3px;
    background: rgb(255, 111, 0);

    &::after {
      content: "";
      position: absolute;
      right: 0;
      top: -5.5px;
      width: 14px;
      height: 14px;
      border-top: 3px solid rgb(255, 111, 0);
      border-right: 3px solid rgb(255, 111, 0);
      transform: rotate(45deg);
    }
  }

  &:last-child {
    .step-connector {
      display: none;
    }
  }
}

@media (max-width: 1023px) {
  .step {
    &::after {
      content: "";
      position: absolute;
      bottom: -6rem;
      left: 50%;
      width: 2px;
      height: 6rem;
      background: rgb(255, 111, 0);
      transform: translateX(-50%);
    }

    &:last-child::after {
      display: none;
    }
  }
}

@media (min-width: 1024px) {
  .step {
    opacity: 0;
    transform: translateX(-100px);
    transition: all 1s ease-out;

    &:nth-child(2) {
      transition-delay: 0.3s;
    }

    &:nth-child(3) {
      transition-delay: 0.6s;
    }
  }
}
</style>
