<!-- pages/index.vue -->
<template>
  <div :class="{ dark: scopedDark }">
    <section
      class="relative bg-white dark:bg-slate-800 transition-colors duration-300"
    >
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div class="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <h1
              class="mt-6 text-4xl sm:text-5xl font-extrabold tracking-tight text-neutral-900 dark:text-slate-50"
            >
              Welcome to Busog <br class="hidden sm:block" />
              Website
            </h1>

            <p
              class="mt-6 max-w-xl text-lg leading-7 text-neutral-600 dark:text-slate-300/90"
            >
              Programmers who always feel full — not from food, but from endless
              coffee, snacks, and code. They’re so busy debugging that hunger
              doesn’t even get a chance.
            </p>

            <div class="mt-8 flex items-center gap-3">
              <NuxtLink
                to="#contact"
                class="inline-flex items-center rounded-md px-4 py-2.5 text-sm font-semibold bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-slate-100 dark:text-slate-900 dark:hover:bg-white transition-colors"
              >
                Contact us, we don't bite
              </NuxtLink>
            </div>
          </div>

          <div class="relative">
            <div
              class="aspect-[4/3] w-full rounded-2xl overflow-hidden border border-neutral-200 bg-neutral-50 dark:border-white/10 dark:bg-slate-900 transition-colors"
            >
              <img
                src="/hero.png"
                alt="Team Busog"
                class="h-full w-full object-cover"
                loading="lazy"
              />

              <div
                class="absolute inset-0 bg-transparent dark:bg-slate-950/20"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>

  <Contact />
</template>

<script setup lang="ts">
import { useScopedDark } from "~/composables/useDarkSections";
const scopedDark = useScopedDark();
</script>
