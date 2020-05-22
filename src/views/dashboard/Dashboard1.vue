<template>
  <div class="text-gray-800">
    <div class="flex">
      <div class="flex-shrink-0 w-48 min-h-screen bg-white border-r">
        <div class="p-4 flex items-center">
          <img class="w-8 h-8" src="/img/logo.svg" alt="Moto" />
          <h1 class="ml-2 text-2xl text-deepblue font-bold tracking-wide">
            <a href="#">Moto</a>
          </h1>
        </div>
        <div>
          <h4 class="text-sm px-4 py-2 text-gray-400">Main Manu</h4>
        </div>
        <nav>
          <a
            class="flex items-center bg-blue-200 font-semibold block px-3 py-2 border-transparent border-l-2 hover:border-deepblue hover:border-l-2 hover:bg-blue-100 hover:text-deepblue"
            href="#"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              ></path>
            </svg>
            <span class="pl-2">Dashboard</span>
          </a>
          <a
            class="flex items-center font-semibold block px-3 py-2 border-transparent border-l-2 hover:border-deepblue hover:border-l-2 hover:bg-blue-100 hover:text-deepblue"
            href="#"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>
            <span class="pl-2">Positions</span>
          </a>
          <a
            class="flex items-center font-semibold block px-3 py-2 border-transparent border-l-2 hover:border-deepblue hover:border-l-2 hover:bg-blue-100 hover:text-deepblue"
            href="#"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
            </svg>
            <span class="pl-2">Statictis</span>
          </a>
          <a
            class="flex items-center font-semibold block px-3 py-2 border-transparent border-l-2 hover:border-deepblue hover:border-l-2 hover:bg-blue-100 hover:text-deepblue"
            href="#"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              ></path>
            </svg>
            <span class="pl-2">Schedules</span>
          </a>
          <a
            class="flex items-center font-semibold block px-3 py-2 border-transparent border-l-2 hover:border-deepblue hover:border-l-2 hover:bg-blue-100 hover:text-deepblue"
            href="#"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
              ></path>
            </svg>
            <span class="pl-2">Messages</span>
          </a>
          <a
            class="flex items-center font-semibold block px-3 py-2 border-transparent border-l-2 hover:border-deepblue hover:border-l-2 hover:bg-blue-100 hover:text-deepblue"
            href="#"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
              ></path>
              <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
            </svg>
            <span class="pl-2">Setting</span>
          </a>
        </nav>
        <div>
          <h4 class="text-sm px-4 py-2 text-gray-400">Applications</h4>
        </div>
      </div>
      <div class="flex-1">
        <div class="p-4 flex item-center justify-between bg-white shadow">
          <span class="pl-2 text-xl font-bold">Dashboard</span>
          <div class="relative">
            <span
              class="absolute inset-y-0 left-0 flex items-center justify-center pl-2"
            >
              <svg
                class="w-5 h-5 text-gray-500"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <input
              class="pl-10 pr-4 py-2 w-64 text-sm border bg-gray-200 placeholder-gray-500 rounded-md"
              type="text"
              placeholder="Search..."
            />
          </div>
          <div class="flex items-center pr-3">
            <div class="relative border border-gray-200 box-border rounded-md">
              <select
                class="appearance-none py-1 px-3 border-none outline-none w-32"
                name="lang"
                id="lang"
              >
                <option value="en">English</option>
                <option value="bn">Bangla</option>
              </select>
              <span class="absolute inset-y-0 right-0 flex items-center"
                ><svg
                  class="w-5 h-5"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 9l-7 7-7-7"></path></svg
              ></span>
            </div>
            <div class="flex ml-4">
              <button class="ml-2">
                <svg
                  class="w-6 h-6"
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
              <button class="ml-2">
                <svg
                  class="w-6 h-6"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  ></path>
                </svg>
              </button>
              <button class="ml-2">
                <img
                  class="w-6 h-6 rounded-full"
                  src="https://images.unsplash.com/photo-1545704881-d5dfa19efa38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.5&w=144&q=80"
                  alt="John"
                />
              </button>
            </div>
          </div>
        </div>
        <div class="">main body</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>
