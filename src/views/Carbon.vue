<template>
  <div class="h-screen flex">
    <div class="w-64 px-8 py-4 bg-gray-100 border-r">
      <img
        class="6-4 w-4"
        src="https://avatars1.githubusercontent.com/u/5952472?s=60&v=4"
        alt="Logo"
      />
      <nav class="mt-8">
        <h2
          class="text-gray-600 text-xs font-semibold uppercase tracking-wider"
        >
          Issue
        </h2>
        <div class="mt-2 -mx-3">
          <a
            href="#"
            class="flex justify-between items-center px-3 py-1 bg-gray-200 rounded-lg"
          >
            <span class="text-sm font-medium text-gray-900">All</span>
            <span class="text-xs font-semibold text-gray-700">36</span>
          </a>
          <a
            href="#"
            class="flex justify-between items-center px-3 py-1 rounded-lg"
          >
            <span class="text-sm font-medium text-gray-700">Assign to me</span>
            <span class="text-xs font-semibold text-gray-700">3</span>
          </a>
          <a
            href="#"
            class="flex justify-between items-center px-3 py-1 rounded-lg"
          >
            <span class="text-sm font-medium text-gray-700">Created by me</span>
            <span class="text-xs font-semibold text-gray-700">2</span>
          </a>
          <a
            href="#"
            class="flex justify-between items-center px-3 py-1 rounded-lg"
          >
            <span class="text-sm font-medium text-gray-700">Archived</span>
            <span class="text-xs font-semibold text-gray-700">1</span>
          </a>
        </div>

        <h2
          class="mt-8 text-gray-600 text-xs font-semibold uppercase tracking-wider"
        >
          Tags
        </h2>
        <div class="mt-2 -mx-3">
          <a
            href="#"
            class="flex justify-between items-center px-3 py-1 rounded-lg"
          >
            <span class="text-sm font-medium text-gray-700">Bug</span>
          </a>
          <a
            href="#"
            class="flex justify-between items-center px-3 py-1 rounded-lg"
          >
            <span class="text-sm font-medium text-gray-700"
              >Features Request</span
            >
          </a>
          <a
            href="#"
            class="flex justify-between items-center px-3 py-1 rounded-lg"
          >
            <span class="text-sm font-medium text-gray-900">Markating</span>
          </a>
          <a
            href="#"
            class="flex justify-between items-center px-3 py-1 rounded-lg"
          >
            <span class="text-sm font-medium text-gray-900">v2.0</span>
          </a>
          <a
            href="#"
            class="flex justify-between items-center px-3 py-1 rounded-lg"
          >
            <span class="text-sm font-medium text-gray-900">Entertainment</span>
          </a>
          <a
            href="#"
            class="flex justify-between items-center px-3 py-1 rounded-lg"
          >
            <span class="text-sm font-medium text-gray-900">Design</span>
          </a>
        </div>
        <button
          class="mt-2 -ml-1 flex items-center text-sm text-gray-600 font-medium"
        >
          <svg
            class="w-3 h-3"
            fill="none"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 4v16m8-8H4"></path>
          </svg>
          <span>
            New Project
          </span>
        </button>
      </nav>
    </div>
    <div class="flex-1 min-w-0 bg-white">
      <div class="border-b-2 border-gray-200">
        <header class="px-6">
          <div
            class="py-3 flex justify-between items-center border-b border-gray-200"
          >
            <div>
              <div class="relative">
                <span class="ml-2 absolute inset-y-0 left-0 flex items-center">
                  <svg
                    class="h-5 text-gray-500"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    ></path>
                  </svg>
                </span>
                <input
                  class="rounded-md text-sm border border-gray-400 pl-10 py-2 pr-4 text-gray-900 placeholder-gray-600"
                  type="text"
                  placeholder="Search..."
                />
              </div>
            </div>
          </div>
          <div class="flex items-center">
            <button>
              <svg
                class="text-gray-500 h-5"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                ></path>
              </svg>
            </button>
          </div>
        </header>
      </div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
