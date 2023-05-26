<script setup lang="ts">
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'

const navigation = [
  { name: 'Contact', href: '#' },
  { name: 'About us', href: '#' },
]

const mobileMenuOpen = ref(false)
</script>

<template>
  <header class="absolute inset-x-0 top-0 z-50 text-gray-50">
    <nav class="flex items-center justify-between p-6 lg:px-12" aria-label="Global">
      <div class="flex lg:flex-1">
        <NuxtLink to="/" class="-m-1.5 p-1.5 uppercase">
          <span class="sr-only">Pixiie</span>
          <h1 class="text-4xl font-semibold tracking-wide ">
            Pixxie
          </h1>
        </NuxtLink>
      </div>
      <div class="hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400" @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Icon name="mdi:menu" class="w-6 h-6" aria-hidden="true" />
        </button>
      </div>
    </nav>
    <Dialog as="div" class="lg:hidden" :open="mobileMenuOpen" @close="mobileMenuOpen = false">
      <div class="fixed inset-0 z-50" />
      <DialogPanel class="fixed inset-y-0 right-0 z-50 w-full px-6 py-6 overflow-y-auto bg-gray-900 sm:max-w-sm sm:ring-1 sm:ring-white/10">
        <div class="flex items-center justify-between">
          <NuxtLink to="/" class="-m-1.5 p-1.5">
            <span class="sr-only">Pixiie</span>
            <h1 class="text-4xl font-semibold tracking-wide ">
              Pixiie
            </h1>
          </NuxtLink>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-400" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <Icon name="mdi:close" class="w-6 h-6" aria-hidden="true" />
          </button>
        </div>
        <div class="flow-root mt-6">
          <div class="-my-6 divide-y divide-gray-500/25">
            <div class="py-6 space-y-2">
              <a v-for="item in navigation" :key="item.name" :href="item.href" class="block px-3 py-2 -mx-3 text-base font-semibold leading-7 text-white rounded-lg hover:bg-gray-800">{{ item.name }}</a>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>
