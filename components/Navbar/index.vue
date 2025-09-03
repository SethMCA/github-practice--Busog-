<template>
  <nav class="bg-gray-800 sticky top-0 p-2">
    <div
      class="container mx-auto flex justify-between items-center  px-4"
    >
      <!-- Logo with PNG Icon -->
      <NuxtLink
        to="/"
        class="text-white text-xl font-bold flex items-center gap-4 px-10"
      >
        <img
          src="/logo.jpg"
          alt="Team icon"
          class="w-13 h-13 rounded-full object-cover"
        />
        TEAM BUSOG
      </NuxtLink>

      <!-- Desktop Links (hidden on mobile) -->
      <div class="hidden md:flex space-x-10 px-15">
        <NuxtLink
          to="/"
          class="text-gray-300 hover:text-white hover:underline text-xl"
          >Home</NuxtLink
        >
        <NuxtLink
          to="/AboutSection"
          class="text-gray-300 hover:text-white hover:underline text-xl"
          >About Us</NuxtLink
        >
        <NuxtLink
          to="/contact"
          class="text-gray-300 hover:text-white hover:underline text-xl"
          >Contact Us</NuxtLink
        >
      </div>

      <!-- Mobile Menu Button (hamburger) -->
      <button
        @click="isMenuOpen = !isMenuOpen"
        class="md:hidden text-white focus:outline-none"
      >
        <svg
          class="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
      <div
      v-if="isMenuOpen"
      class="md:hidden absolute top-full right-0 w-full bg-gradient-to-b from-gray-800 to-gray-900 shadow-2xl z-50 mt-0 pb-6 border-t-2 border-blue-500"
    >
      <div class="flex flex-col space-y-2 pt-4">
        <NuxtLink
          to="/AboutSection.vue"
          @click="isMenuOpen = false"
          class="text-gray-300 hover:text-white hover:bg-gray-700 hover:border-l-4 hover:border-blue-500 text-xl block px-6 py-4 transition-all duration-300 ease-in-out transform hover:translate-x-2"
        >
          <span class="flex items-center gap-3">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"
              />
            </svg>
            Home
          </span>
        </NuxtLink>
        <NuxtLink
          to="/about"
          @click="isMenuOpen = false"
          class="text-gray-300 hover:text-white hover:bg-gray-700 hover:border-l-4 hover:border-blue-500 text-xl block px-6 py-4 transition-all duration-300 ease-in-out transform hover:translate-x-2"
        >
          <span class="flex items-center gap-3">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clip-rule="evenodd"
              />
            </svg>
            About
          </span>
        </NuxtLink>
        <NuxtLink
          to="/contact"
          @click="isMenuOpen = false"
          class="text-gray-300 hover:text-white hover:bg-gray-700 hover:border-l-4 hover:border-blue-500 text-xl block px-6 py-4 transition-all duration-300 ease-in-out transform hover:translate-x-2"
        >
          <span class="flex items-center gap-3">
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
              />
              <path
                d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
              />
            </svg>
            Contact
          </span>
        </NuxtLink>
      </div>
    </div>
    </div>

    <!-- Mobile Menu (full width, positioned from right) -->
    
  </nav>
</template>

<script setup>
import { ref } from "vue";

const isMenuOpen = ref(false);
</script>
