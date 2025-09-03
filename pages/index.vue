<template>
  <section class="min-h-screen bg-gray-50 flex flex-col items-center p-8">
    
    <!-- Header -->
    <div class="text-center max-w-2xl mb-12">
      <p class="text-gray-600 mb-2">We build modern web applications</p>
      <h1 class="text-4xl font-bold text-gray-900 mb-2">Meet Team Busog</h1>
      <p class="text-gray-600 mb-4">
        A skilled team of developers and designers building modern, responsive web apps.
      </p>
      <button class="bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition">
        Work with us
      </button>

      <!-- Tech Tags -->
      <div class="flex flex-wrap justify-center mt-6 gap-2">
        <span class="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">Vue/Nuxt</span>
        <span class="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm">Firebase / Supabase</span>
        <span class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">Tailwind</span>
        <span class="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">UI</span>
      </div>
    </div>

    <!-- Team Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl w-full">

      <!-- Member 1 -->
      <div class="bg-white rounded-xl shadow-lg overflow-hidden text-center">
        <img src="/public/tristan.jpg" alt="Tristan Aaron Cavite" class="w-full h-64 object-cover">
        <div class="p-4">
          <h3 class="text-lg font-semibold text-gray-900">Tristan</h3>
          <p class="text-gray-500 mb-3">Member</p>
          <div class="flex justify-center gap-3 text-gray-700">
            <Facebook class="w-6 h-6 hover:text-blue-600 cursor-pointer" />
            <Twitter class="w-6 h-6 hover:text-blue-400 cursor-pointer" />
            <Github class="w-6 h-6 hover:text-black cursor-pointer" />
            <Linkedin class="w-6 h-6 hover:text-blue-700 cursor-pointer" />
          </div>
        </div>
      </div>

      <!-- Member 2 -->
      <div class="bg-white rounded-xl shadow-lg overflow-hidden text-center">
        <img src="/public/kenneth.jpg" alt="Kenneth Kim Pantoja" class="w-full h-64 object-cover">
        <div class="p-4">
          <h3 class="text-lg font-semibold text-gray-900">Kenneth Kim Pantoja</h3>
          <p class="text-gray-500 mb-3">Member</p>
          <div class="flex justify-center gap-3 text-gray-700">
            <Facebook class="w-6 h-6 hover:text-blue-600 cursor-pointer" />
            <Twitter class="w-6 h-6 hover:text-blue-400 cursor-pointer" />
            <Github class="w-6 h-6 hover:text-black cursor-pointer" />
            <Linkedin class="w-6 h-6 hover:text-blue-700 cursor-pointer" />
          </div>
        </div>
      </div>

      <!-- Member 3 -->
      <div class="bg-white rounded-xl shadow-lg overflow-hidden text-center">
        <img src="/public/seth.jpg" alt="Seth Meinrad Almazan" class="w-full h-64 object-cover">
        <div class="p-4">
          <h3 class="text-lg font-semibold text-gray-900">Seth Meinrad Almazan</h3>
          <p class="text-gray-500 mb-3">Project Manager</p>
          <div class="flex justify-center gap-3 text-gray-700">
            <Facebook class="w-6 h-6 hover:text-blue-600 cursor-pointer" />
            <Twitter class="w-6 h-6 hover:text-blue-400 cursor-pointer" />
            <Github class="w-6 h-6 hover:text-black cursor-pointer" />
            <Linkedin class="w-6 h-6 hover:text-blue-700 cursor-pointer" />
          </div>
        </div>
      </div>

      <!-- Member 4 -->
      <div class="bg-white rounded-xl shadow-lg overflow-hidden text-center">
        <img src="/public/biron.jpg" alt="Dan Biron" class="w-full h-64 object-cover">
        <div class="p-4">
          <h3 class="text-lg font-semibold text-gray-900">Dan Biron</h3>
          <p class="text-gray-500 mb-3">Member</p>
          <div class="flex justify-center gap-3 text-gray-700">
            <Facebook class="w-6 h-6 hover:text-blue-600 cursor-pointer" />
            <Twitter class="w-6 h-6 hover:text-blue-400 cursor-pointer" />
            <Github class="w-6 h-6 hover:text-black cursor-pointer" />
            <Linkedin class="w-6 h-6 hover:text-blue-700 cursor-pointer" />
          </div>
        </div>
      </div>

    </div>

    <p class="text-gray-500 text-sm mt-12">© 2025 My Website</p>

  </section>
</template>

<script setup lang="ts">
import { Facebook, Twitter, Github, Linkedin } from "lucide-vue-next";

useHead({
  title: 'About - Team Busog',
  meta: [
    { name: 'description', content: 'Meet Team Busog, a skilled team of web developers and designers.' }
  ]
})
</script>
