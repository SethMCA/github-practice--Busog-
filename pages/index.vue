<template>
  <section class="relative">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div class="grid items-center gap-12 lg:grid-cols-2">
        <!-- Left: copy -->
        <div>
          <h1
            class="mt-6 text-4xl font-extrabold tracking-tight text-neutral-900 sm:text-5xl"
          >
            Welcome to Busog <br class="hidden sm:block" />
            Website
          </h1>

          <p class="mt-6 max-w-xl text-neutral-600 text-lg leading-7">
            Programmers who always feel full — not from food, but from endless
            coffee, snacks, and code. They’re so busy debugging that hunger
            doesn’t even get a chance.
          </p>

          <div class="mt-8 flex items-center gap-3">
            <NuxtLink
              to="#"
              class="inline-flex items-center rounded-md bg-neutral-900 px-4 py-2.5 text-white shadow-sm hover:bg-neutral-800"
            >
              Contact us, we don't bite
            </NuxtLink>
          </div>
        </div>

        <!-- Right: artwork / logo -->
        <div class="relative">
          <div
            class="aspect-[4/3] w-full rounded-2xl border border-neutral-200 bg-neutral-50 flex items-center justify-center overflow-hidden"
          >
            <img
              src="/hero.png"
              alt="error, naa sa china"
              class="h-full w-full object-cover rounded-2xl"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>
