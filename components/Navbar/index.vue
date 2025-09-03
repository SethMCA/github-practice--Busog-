<template>
  <nav class="bg-gray-800 p-4">
    <div class="container mx-auto flex justify-between items-center px-10">
      <!-- Logo with PNG Icon -->
      <NuxtLink to="/" class="text-white text-xl font-bold flex items-center gap-4">
        <img src="/logo.jpg" alt="Team icon" class="w-11 h-11 rounded-full object-cover">
        TEAM BUSOG
      </NuxtLink>

      <!-- Links wrapped in a single div with padding -->
      <div class="space-x-20 px-10 ">
        <NuxtLink to="/" class="text-gray-300 hover:underline text-xl">Home</NuxtLink>
        <NuxtLink to="/about" class="text-gray-300 hover:underline text-xl">About</NuxtLink>
        <NuxtLink to="/contact" class="text-gray-300 hover:underline text-xl">Contact us</NuxtLink>
      </div>
    </div>
  </nav>
</template>