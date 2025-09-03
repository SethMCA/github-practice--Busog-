<template>
  <footer class="bg-gray-800 text-white p-4 mt-auto text-center">
    <p class="white">© 2025 Busog si seth almazan</p>
    <nav class="mt-2 flex justify-center space-x-6 text-gray-500">
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener"
        class="hover:text-white"
      >
        <Twitter class="h-6 w-6" />
      </a>
      <a
        href="https://github.com"
        target="_blank"
        rel="noopener"
        class="hover:text-white"
      >
        <Github class="h-6 w-6" />
      </a>
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener"
        class="hover:text-white"
      >
        <Linkedin class="h-6 w-6" />
      </a>
    </nav>
  </footer>
</template>

<script setup lang="ts">
import { Twitter, Github, Linkedin } from "lucide-vue-next";
</script>
