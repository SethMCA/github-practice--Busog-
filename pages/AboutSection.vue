<template>
  <!-- only this page reacts to the toggle -->
  <div :class="{ dark: scopedDark }">
    <section
      class="min-h-screen flex flex-col items-center p-8 bg-gray-50 dark:bg-slate-800 transition-colors duration-300"
    >
      <!-- Header -->
      <div class="text-center max-w-2xl mb-12">
        <p class="mb-2 text-gray-600 dark:text-slate-300">
          We build modern web applications
        </p>
        <h1 class="mb-2 text-4xl font-bold text-gray-900 dark:text-slate-50">
          Meet Team Busog
        </h1>
        <p class="mb-4 text-gray-600 dark:text-slate-300">
          A skilled team of developers and designers building modern, responsive
          web apps.
        </p>
        <button
          class="px-6 py-2 rounded-lg transition cursor-pointer bg-blue-900 text-white hover:bg-blue-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white"
        >
          Work with us
        </button>

        <!-- Tech Tags -->
        <div class="flex flex-wrap justify-center mt-6 gap-2">
          <span
            class="px-3 py-1 rounded-full text-sm bg-green-100 text-green-800 dark:bg-green-500/15 dark:text-green-200 dark:ring-1 dark:ring-white/10"
            >Vue/Nuxt</span
          >
          <span
            class="px-3 py-1 rounded-full text-sm bg-orange-100 text-orange-800 dark:bg-orange-500/15 dark:text-orange-200 dark:ring-1 dark:ring-white/10"
            >Firebase / Supabase</span
          >
          <span
            class="px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-800 dark:bg-blue-500/15 dark:text-blue-200 dark:ring-1 dark:ring-white/10"
            >Tailwind</span
          >
          <span
            class="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-800 dark:bg-white/10 dark:text-slate-200 dark:ring-1 dark:ring-white/10"
            >UI</span
          >
        </div>
      </div>

      <!-- Team Cards -->
      <div
        class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl w-full"
      >
        <!-- Member 1 -->
        <div
          class="rounded-xl overflow-hidden text-center shadow-lg transition-colors bg-white border border-neutral-200 dark:bg-slate-900/60 dark:border-white/10 backdrop-blur"
        >
          <img
            src="/tristan.jpg"
            alt="Tristan Aaron Cavite"
            class="w-full h-64 object-cover"
          />
          <div class="p-4">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-slate-100">
              Tristan
            </h3>
            <p class="mb-3 text-gray-500 dark:text-slate-400">Member</p>
            <div
              class="flex justify-center gap-3 text-gray-700 dark:text-slate-300"
            >
              <Facebook
                class="w-6 h-6 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer"
              />
              <Twitter
                class="w-6 h-6 hover:text-blue-400 dark:hover:text-blue-300 cursor-pointer"
              />
              <Github
                class="w-6 h-6 hover:text-black dark:hover:text-slate-100 cursor-pointer"
              />
              <Linkedin
                class="w-6 h-6 hover:text-blue-700 dark:hover:text-blue-500 cursor-pointer"
              />
            </div>
          </div>
        </div>

        <!-- Member 2 -->
        <div
          class="rounded-xl overflow-hidden text-center shadow-lg transition-colors bg-white border border-neutral-200 dark:bg-slate-900/60 dark:border-white/10 backdrop-blur"
        >
          <img
            src="/kenneth.jpg"
            alt="Kenneth Kim Pantoja"
            class="w-full h-64 object-cover"
          />
          <div class="p-4">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-slate-100">
              Kenneth Kim Pantoja
            </h3>
            <p class="mb-3 text-gray-500 dark:text-slate-400">Member</p>
            <div
              class="flex justify-center gap-3 text-gray-700 dark:text-slate-300"
            >
              <Facebook
                class="w-6 h-6 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer"
              />
              <Twitter
                class="w-6 h-6 hover:text-blue-400 dark:hover:text-blue-300 cursor-pointer"
              />
              <Github
                class="w-6 h-6 hover:text-black dark:hover:text-slate-100 cursor-pointer"
              />
              <Linkedin
                class="w-6 h-6 hover:text-blue-700 dark:hover:text-blue-500 cursor-pointer"
              />
            </div>
          </div>
        </div>

        <!-- Member 3 -->
        <div
          class="rounded-xl overflow-hidden text-center shadow-lg transition-colors bg-white border border-neutral-200 dark:bg-slate-900/60 dark:border-white/10 backdrop-blur"
        >
          <img
            src="/seth.jpg"
            alt="Seth Meinrad Almazan"
            class="w-full h-64 object-cover"
          />
          <div class="p-4">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-slate-100">
              Seth Meinrad Almazan
            </h3>
            <p class="mb-3 text-gray-500 dark:text-slate-400">
              Project Manager
            </p>
            <div
              class="flex justify-center gap-3 text-gray-700 dark:text-slate-300"
            >
              <Facebook
                class="w-6 h-6 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer"
              />
              <Twitter
                class="w-6 h-6 hover:text-blue-400 dark:hover:text-blue-300 cursor-pointer"
              />
              <Github
                class="w-6 h-6 hover:text-black dark:hover:text-slate-100 cursor-pointer"
              />
              <Linkedin
                class="w-6 h-6 hover:text-blue-700 dark:hover:text-blue-500 cursor-pointer"
              />
            </div>
          </div>
        </div>

        <!-- Member 4 -->
        <div
          class="rounded-xl overflow-hidden text-center shadow-lg transition-colors bg-white border border-neutral-200 dark:bg-slate-900/60 dark:border-white/10 backdrop-blur"
        >
          <img
            src="/biron.jpg"
            alt="Dan Biron"
            class="w-full h-64 object-cover"
          />
          <div class="p-4">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-slate-100">
              Dan Biron
            </h3>
            <p class="mb-3 text-gray-500 dark:text-slate-400">Member</p>
            <div
              class="flex justify-center gap-3 text-gray-700 dark:text-slate-300"
            >
              <Facebook
                class="w-6 h-6 hover:text-blue-600 dark:hover:text-blue-400 cursor-pointer"
              />
              <Twitter
                class="w-6 h-6 hover:text-blue-400 dark:hover:text-blue-300 cursor-pointer"
              />
              <Github
                class="w-6 h-6 hover:text-black dark:hover:text-slate-100 cursor-pointer"
              />
              <Linkedin
                class="w-6 h-6 hover:text-blue-700 dark:hover:text-blue-500 cursor-pointer"
              />
            </div>
          </div>
        </div>
      </div>

      <p class="mt-12 text-sm text-gray-500 dark:text-slate-400">
        © 2025 My Website
      </p>
    </section>
  </div>
</template>

<script setup lang="ts">
import { Facebook, Twitter, Github, Linkedin } from "lucide-vue-next";
import { useScopedDark } from "~/composables/useDarkSections";
const scopedDark = useScopedDark();
useHead({
  title: "About - Team Busog",
  meta: [
    {
      name: "description",
      content:
        "Meet Team Busog, a skilled team of web developers and designers.",
    },
  ],
});
</script>
