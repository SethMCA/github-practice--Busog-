<template>
  <nav class="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-gray-800">
    <div
      class="mx-auto max-w-7xl h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between"
    >
      <!-- Logo -->
      <NuxtLink to="/" class="group flex items-center gap-3">
        <img
          src="/logo.jpg"
          alt="Team Busog logo"
          class="h-10 w-10 rounded-full object-cover ring-2 ring-white/10"
        />
        <span class="text-white text-lg sm:text-xl font-semibold tracking-wide">
          TEAM BUSOG
        </span>
      </NuxtLink>

      <!-- Desktop nav -->
      <div class="hidden md:flex items-center gap-8">
        <NuxtLink
          to="/"
          class="text-gray-300 hover:text-white transition-colors"
          >Home</NuxtLink
        >
        <NuxtLink
          to="/AboutSection"
          class="text-gray-300 hover:text-white transition-colors"
          >About Us</NuxtLink
        >
        <!-- If your contact is on the home page -->
        <NuxtLink
          to="/#contact"
          class="text-gray-300 hover:text-white transition-colors"
          >Contact Us</NuxtLink
        >
      </div>

      <!-- Mobile toggle -->
      <button
        @click="isMenuOpen = !isMenuOpen"
        :aria-expanded="isMenuOpen"
        aria-controls="mobile-menu"
        aria-label="Toggle menu"
        class="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10 focus:outline-none"
      >
        <svg
          v-if="!isMenuOpen"
          class="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
        <svg
          v-else
          class="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <!-- Mobile menu -->
    <div
      id="mobile-menu"
      v-show="isMenuOpen"
      class="md:hidden border-t border-white/10 bg-gray-900/95 backdrop-blur"
    >
      <div class="px-4 py-3 space-y-1">
        <NuxtLink
          to="/"
          @click="close"
          class="block rounded-md px-3 py-2 text-gray-200 hover:bg-white/10 hover:text-white transition"
          >Home</NuxtLink
        >
        <NuxtLink
          to="/AboutSection"
          @click="close"
          class="block rounded-md px-3 py-2 text-gray-200 hover:bg-white/10 hover:text-white transition"
          >About Us</NuxtLink
        >
        <NuxtLink
          to="/#contact"
          @click="close"
          class="block rounded-md px-3 py-2 text-gray-200 hover:bg-white/10 hover:text-white transition"
          >Contact Us</NuxtLink
        >
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";
const isMenuOpen = ref(false);
const close = () => (isMenuOpen.value = false);
</script>
