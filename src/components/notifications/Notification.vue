<template>
  <div class="bg-white shadow-lg rounded-lg pointer-events-auto">
    <div class="rounded-lg shadow-xs overflow-hidden">
      <div class="p-4">
        <div class="flex items-start">
          <div class="flex-shrink-0">
            <svg
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              stroke="currentColor"
              class="h-6 text-green-400"
              viewBox="0 0 24 24"
            >
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <div class="ml-3 w-64 flex-1 pt-0.5">
            <p class="text-xs leading-5 font-medium text-gray-900">
              Successfully added some action active
            </p>
            <p class="mt-1 text-sm leading-5 text-gray-500">
              Anyone with a link can now view this file.
            </p>
          </div>
          <div class="ml-4 flex-shrink-0 flex">
            <button
              type="submit"
              class="inline-flex text-gray-400 focus:outline-none focus:text-green-500"
              @click="$emit('remove', id)"
            >
              <svg
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                stroke="currentColor"
                class="h-5"
                viewBox="0 0 24 24"
              >
                <path d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ['id']
};
</script>
