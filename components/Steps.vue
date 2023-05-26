<script setup lang="ts">
const name = ref('World')

const steps = [
  {
    title: 'Book an appointment',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/images/steps/screenshot-home.webp',
    logo: 'mdi:calendar-clock',

  },
  {
    title: 'Make a payment',
    description: ' lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/images/steps/screenshot-booking.webp',
    logo: 'mdi:credit-card-outline',

  },
  {
    title: 'Track your barber',
    description: 'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image: '/images/steps/screenshot-payment.webp',
    logo: 'mdi:map-marker',

  },
]
</script>

<template>
  <div id="steps" class="steps bg-[#0A5F6F] md:py-32 py-16 text-gray-100">
    <div class="max-w-6xl px-4 mx-auto ">
      <div>
        <h1 class="mb-8 text-3xl font-bold text-center capitalize md:text-5xl">
          Three Easy Steps...
        </h1>
        <div class="grid-cols-3 gap-10 md:grid">
          <div v-for="step in steps" :key="step.title" class="col-span-1 mb-3 border border-gray-300 rounded-lg card  h-[300px]">
            <div class="p-5 px-4 ">
              <div class="flex justify-center ">
                <Icon :name="step.logo" class="w-8 h-8 mr-3 text-gray-300" />
                <h2 class="h-16 text-2xl font-medium text-center mb-7 ">
                  {{ step.title }}
                </h2>
              </div>
              <p class="text-center text-gray-300">
                {{ step.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  @media(min-width: 768px) {
    .card{
      transition: all 0.3s ease-in-out;
    }
    .card:hover{
      margin-top: -10px;
    }
  }
</style>
