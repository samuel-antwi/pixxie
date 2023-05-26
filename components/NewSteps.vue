<script setup lang="ts">
const name = ref('World')

const steps = [
  {
    title: 'Book',
    description: 'Book an appointment directly through our app',
    image: '/images/steps/screenshot-home.webp',

  },
  {
    title: 'Book',
    description: 'Book an appointment directly through our app',
    image: '/images/steps/screenshot-booking.webp',

  },
  {
    title: 'Book',
    description: 'Book an appointment directly through our app',
    image: '/images/steps/screenshot-payment.webp',

  },
]
</script>

<template>
  <div id="steps" class="steps bg-[#0A5F6F] px-6 py-80">
    <div class="w-full ">
      <div>
        <h1 class="mb-8 text-5xl font-bold text-center uppercase">
          Three Easy Steps
        </h1>
        <div class="grid grid-cols-3 ">
          <div v-for="step in steps" :key="step.title" class="flex flex-col items-center col-span-1 group">
            <img
              width="302"
              height="537"
              :src="step.image"
              :alt="step.title"
            >
            <div class="flex items-center justify-center px-4 border border-gray-400 rounded-md" style="width:250px; height:537px">
              <p class="text-center">
                {{ step.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
