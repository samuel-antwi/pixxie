<script setup lang="ts">
import { onMounted, ref } from 'vue'

const images = ref([
  '/images/kid-g.png',
  '/images/smiley-kid.png',
  '/images/kid-girl.png',
  '/images/new-kid.png',

])
const currentSlide = ref(0)

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % images.value.length
}

function prevSlide() {
  currentSlide.value = (currentSlide.value - 1 + images.value.length) % images.value.length
}

onMounted(() => {
  setInterval(nextSlide, 7000)
})
</script>

<template>
  <div class=" carousel">
    <div class="slides" :style="{ transform: `translateX(-${currentSlide * 100}%)` }">
      <div v-for="(image, index) in images" :key="index" class="relative slide">
        <img :src="image" alt="Carousel slide">
        <div class="absolute inset-0 bg-black opacity-50 overlay" />
      </div>
    </div>
    <div class="controls">
      <button class="control prev" @click="prevSlide">
        <Icon name="mdi:chevron-left" />
      </button>
      <button class="control next" @click="nextSlide">
        <Icon name="mdi:chevron-right" />
      </button>
    </div>
    <div class="z-40 hero-content absolute max-w-xs  mx-auto">
      <div class="relative w-10 mx-auto mt-10">
        <a href="#steps" class="relative z-10 flex items-center justify-center w-12 h-12 rounded-full animate-pulse">
          <Icon name="mdi:chevron-down" class="w-8 h-8 text-gray-50" aria-hidden="true" />
        </a>
        <div class="absolute inset-0 w-12 h-12 bg-black rounded-full opacity-40" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.carousel {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.slides {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slide {
  flex: 0 0 100%;
}

img {
  width: 100%;
  height: 100vh;
  object-fit: cover;

}
.overlay{
  height: 100vh;
  width: 100%;
}

.controls {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
}

.control {
  background: none;
  border: none;
  font-size: 2rem;
  color: #fff;
  cursor: pointer;
  transition: opacity 0.2s ease-in-out;
}

.control:hover {
  opacity: 0.8;
}

.hero-content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
