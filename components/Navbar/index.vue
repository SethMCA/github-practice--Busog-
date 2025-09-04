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
        <NuxtLink
          to="/#contact"
          class="text-gray-300 hover:text-white transition-colors"
          >Contact Us</NuxtLink
        >

        <button
          @click="toggleDark"
          :aria-pressed="scopedDark"
          role="switch"
          class="rounded-md p-2 text-gray-300 hover:text-white transition-colors cursor-pointer dark:text-gray-200 dark:hover:bg-white/10"
          title="Toggle dark mode"
        >
          <!-- Moon when OFF -->
          <svg
            v-if="!scopedDark"
            class="h-6 w-6"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
          </svg>

          <svg
            v-else
            class="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="12" cy="12" r="4" stroke-width="2" />
            <path
              stroke-width="2"
              d="M12 2v2m0 16v2M22 12h-2M4 12H2m15.364 6.364l-1.414-1.414M6.05 6.05 4.636 4.636m12.728 0L15.95 6.05M6.05 17.95l-1.414 1.414"
            />
          </svg>
          <span class="sr-only">Toggle dark mode</span>
        </button>
      </div>

      <div class="md:hidden flex items-center gap-2">
        <button
          @click="toggleDark"
          :aria-pressed="scopedDark"
          role="switch"
          class="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10"
          title="Toggle dark mode"
        >
          <svg
            v-if="!scopedDark"
            class="h-6 w-6"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z" />
          </svg>

          <svg
            v-else
            class="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="12" cy="12" r="4" stroke-width="2" />
            <path
              stroke-width="2"
              d="M12 2v2m0 16v2M22 12h-2M4 12H2m15.364 6.364l-1.414-1.414M6.05 6.05 4.636 4.636m12.728 0L15.95 6.05M6.05 17.95l-1.414 1.414"
            />
          </svg>
          <span class="sr-only">Toggle dark mode</span>
        </button>

        <!-- Mobile hamburger -->
        <button
          @click="isMenuOpen = !isMenuOpen"
          :aria-expanded="isMenuOpen"
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
          class="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10 focus:outline-none"
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
import { useScopedDark } from "~/composables/useDarkSections";

const isMenuOpen = ref(false);
const close = () => (isMenuOpen.value = false);

const scopedDark = useScopedDark();
const toggleDark = () => (scopedDark.value = !scopedDark.value);
</script>
