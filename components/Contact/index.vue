<template>
  <section id="contact" class="relative">
    <!-- Background -->
    <div class="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div
        class="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950"
      ></div>
      <div
        class="absolute -top-40 -right-24 h-[28rem] w-[28rem] rounded-full bg-gradient-to-tr from-indigo-500/40 via-fuchsia-500/30 to-emerald-400/30 blur-3xl"
      ></div>
    </div>

    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div class="grid gap-12 lg:grid-cols-2">
        <!-- Left copy -->
        <div class="max-w-lg">
          <p
            class="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-slate-200"
          >
            Contact
          </p>
          <h2
            class="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-white"
          >
            Let’s build something great with big appetite.
          </h2>
          <p class="mt-3 text-slate-300">
            Have a question or just want to say hi? We usually reply within 24
            hours.
          </p>

          <div class="mt-8 space-y-3 text-slate-300">
            <div class="flex items-center gap-3">
              <!-- mail -->
              <svg
                class="h-5 w-5 text-slate-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25H4.5a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0L12 13.5 2.25 6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5H4.5A2.25 2.25 0 0 0 2.25 6.75"
                />
              </svg>
              <a
                href="mailto:hello@busog.dev"
                class="hover:text-indigo-300 transition"
                >hello@busog.dev</a
              >
            </div>
            <div class="flex items-center gap-3">
              <!-- phone -->
              <svg
                class="h-5 w-5 text-slate-400"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M2.25 6.75c0 7.18 5.82 13 13 13h1.5a2.25 2.25 0 0 0 2.25-2.25v-1.3a1.5 1.5 0 0 0-1.2-1.47l-3.05-.61a1.5 1.5 0 0 0-1.54.58l-.73.98a11.25 11.25 0 0 1-5.34-5.34l.98-.73a1.5 1.5 0 0 0 .58-1.54L7.27 3.7A1.5 1.5 0 0 0 5.8 2.5H4.5A2.25 2.25 0 0 0 2.25 4.75v2z"
                />
              </svg>
              <span>+63 6969 696 6969</span>
            </div>
          </div>
        </div>

        <!-- Form card -->
        <form
          @submit.prevent="onSubmit"
          novalidate
          class="rounded-2xl border border-neutral-200 bg-white p-6 sm:p-8 shadow-2xl dark:border-white/10 dark:bg-white/10 dark:backdrop-blur-xl"
        >
          <div class="grid gap-4 sm:grid-cols-2">
            <!-- Name -->

            <div class="relative">
              <input
                v-model="form.name"
                id="name"
                type="text"
                placeholder=" "
                class="peer block w-full rounded-xl border border-neutral-300 bg-white px-3.5 py-3 text-neutral-900 shadow-sm transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:border-indigo-400 dark:focus:ring-indigo-400/30"
              />
              <label
                for="name"
                class="pointer-events-none absolute left-3.5 top-3 bg-white dark:bg-slate-900 px-1 text-neutral-500 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-xs peer-focus:text-indigo-600 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs"
              >
                Name
              </label>
            </div>

            <!-- Email -->

            <div class="relative">
              <input
                v-model="form.email"
                id="email"
                type="email"
                placeholder=" "
                class="peer block w-full rounded-xl border border-neutral-300 bg-white px-3.5 py-3 text-neutral-900 shadow-sm transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:border-indigo-400 dark:focus:ring-indigo-400/30"
              />
              <label
                for="email"
                class="pointer-events-none absolute left-3.5 top-3 bg-white dark:bg-slate-900 px-1 text-neutral-500 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-xs peer-focus:text-indigo-600 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs"
              >
                Email
              </label>
            </div>
          </div>

          <!-- Message -->
          <div class="relative mt-4">
            <textarea
              v-model="form.message"
              id="message"
              rows="6"
              placeholder=" "
              class="peer block w-full rounded-xl border border-neutral-300 bg-white px-3.5 py-3 text-neutral-900 shadow-sm transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:border-indigo-400 dark:focus:ring-indigo-400/30"
            ></textarea>
            <label
              for="message"
              class="pointer-events-none absolute left-3.5 top-3 bg-white dark:bg-slate-900 px-1 text-neutral-500 transition-all duration-200 peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-focus:-top-2 peer-focus:text-xs peer-focus:text-indigo-600 peer-[:not(:placeholder-shown)]:-top-2 peer-[:not(:placeholder-shown)]:text-xs"
            >
              Message
            </label>
          </div>

          <div class="mt-6">
            <button
              type="submit"
              :disabled="loading"
              class="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-500 to-fuchsia-500 px-4 py-3 text-white shadow-lg hover:from-indigo-400 hover:to-fuchsia-400 disabled:opacity-60 transition"
            >
              <svg
                v-if="loading"
                class="h-5 w-5 animate-spin"
                viewBox="0 0 24 24"
                fill="none"
              >
                <circle
                  class="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  stroke-width="4"
                />
                <path
                  class="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4A4 4 0 004 12z"
                />
              </svg>
              <span>Send Message</span>
            </button>
            <p class="mt-3 text-xs text-neutral-500 dark:text-slate-400">
              By sending, you agree to our privacy policy.
            </p>
          </div>

          <!-- success (white card styling) -->
          <div
            v-if="submitted"
            class="mt-4 flex items-center gap-2 rounded-xl border border-green-200 bg-green-50 px-3 py-2 text-green-700 dark:border-emerald-400/30 dark:bg-emerald-400/10 dark:text-emerald-300"
          >
            <svg
              class="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                d="M9 12.75l2.25 2.25L15 10.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Thanks! We got your message.</span>
          </div>
        </form>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { reactive, ref } from "vue";

const form = reactive({ name: "", email: "", message: "" });
const errors = reactive<{ name?: string; email?: string; message?: string }>(
  {}
);
const submitted = ref(false);
const loading = ref(false);

const emailOK = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

function onSubmit() {
  errors.name = form.name ? "" : "Please enter your name";
  errors.email = form.email
    ? emailOK(form.email)
      ? ""
      : "Enter a valid email"
    : "Please enter your email";
  errors.message = form.message ? "" : "Please enter a message";
  if (errors.name || errors.email || errors.message) return;

  loading.value = true;
  setTimeout(() => {
    loading.value = false;
    submitted.value = true;
    form.name = "";
    form.email = "";
    form.message = "";
  }, 700);
}
</script>
