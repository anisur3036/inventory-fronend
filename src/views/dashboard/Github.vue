<template>
  <div>
    <header class="relative">
      <div
        class="py-4 px-3 sm:px-5 bg-gray-900 flex items-center justify-between"
      >
        <button class="md:hidden" type="button" @click="menuOpen">
          <svg
            class="w-6 h-6 text-white"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="3"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        <a href="#"
          ><svg
            aria-hidden="true"
            data-prefix="fab"
            data-icon="github"
            class="w-8 h-8 text-white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 496 512"
          >
            <path
              fill="currentColor"
              d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
            /></svg
        ></a>
        <button>
          <svg
            class="w-5 h-5 text-white"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"
            ></path>
          </svg>
        </button>
      </div>
      <div
        class="relative md:flex md:items-center bg-gray-900 w-full text-white"
        :class="isOpen ? 'block' : 'hidden'"
      >
        <div class="mx-3 py-2 block border-b border-gray-800">
          <input
            class="p-1 text-sm leading-snug rounded bg-gray-700 w-full focus:bg-white"
            type="text"
            placeholder="Search or jump to... "
          />
        </div>
        <nav class="md:flex">
          <a
            class="block md:hidden text-sm font-semibold hover:text-gray-500 mx-3 sm:mx-5 py-2 border-b border-gray-800"
            href="#"
            >Dashboard</a
          >
          <a
            class="block text-sm font-semibold hover:text-gray-500 mx-3 sm:mx-5 py-2 border-b border-gray-800"
            href="#"
            >Pull request</a
          >
          <a
            class="block text-sm font-semibold hover:text-gray-500 mx-3 sm:mx-5 py-2 border-b border-gray-800"
            href="#"
            >Issues</a
          >
          <a
            class="block md:hidden text-sm font-semibold hover:text-gray-500 mx-3 sm:mx-5 py-2 border-b border-gray-800"
            href="#"
            >Marketplace</a
          >
          <a
            class="block text-sm font-semibold hover:text-gray-500 mx-3 sm:mx-5 py-2 border-b border-gray-800"
            href="#"
            >Explore</a
          >
          <a
            class="block md:hidden text-sm font-semibold hover:text-gray-500 mx-3 sm:mx-5 py-2 border-b border-gray-800"
            href="#"
            >anisur3036</a
          >
          <a
            class="block md:hidden text-sm font-semibold hover:text-gray-500 mx-3 sm:mx-5 py-2 border-b border-gray-800"
            href="#"
            >Signout</a
          >
        </nav>
      </div>
      <div class="">
        <div class="bg-white py-4 px-3 sm:px-5">
          <button type="button" class="flex items-center">
            <img
              class="w-6 h-6 rounded-md"
              src="https://avatars1.githubusercontent.com/u/5952472?s=60&v=4"
              alt="Anisur Rahman"
            />
            <span class="ml-2">anisur3036</span>
            <span
              ><svg
                class="w-5 h-5 text-black"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                  fill-rule="evenodd"
                ></path></svg
            ></span>
          </button>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    menuOpen() {
      this.isOpen = !this.isOpen;
      console.log(window.innerWidth);
    }
  }
};
</script>
