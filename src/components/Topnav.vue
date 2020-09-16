<!-- eslint-disable-->
<template>
	<header class="flex items-center h-16 relative bg-white">
		<a class="relative z-20 flex-shrink-0 py-0 px-5" href="#"
			><img
				class="text-center"
				src="https://hospitalnew.bdtask.com/demo7/assets/images/apps/36ae88214f66496f41748bc540380980.png"
				alt="Logo"
		/></a>
		<nav class="flex flex-1 items-center justify-between pr-3 pl-3">
			<button>
				<svg
					class="h-8"
					fill="none"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					stroke="currentColor"
					viewBox="0 0 24 24"
				>
					<path d="M4 6h16M4 12h16M4 18h16"></path>
				</svg>
			</button>
			<div class="relative">
				<div class="absolute inset-y-0 left-0 ml-2 flex items-center">
					<svg
						class="h-5 text-gray-500 focus:shadow focus:bg-white"
						fill="none"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						stroke="currentColor"
						viewBox="0 0 24 24"
					>
						<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
					</svg>
				</div>
				<input
					class="pl-8 pr-3 py-1 border rounded-md placeholder-gray-500 text-gray-500"
					type="text"
					placeholder="search..."
				/>
			</div>
			<div class="relative">
				<button @click="dropdown = !dropdown">
					<svg
						class="h-8 text-gray-500"
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
				</button>
				<ul
					v-if="dropdown"
					class="absolute bg-white border rounded-sm mt-3 right-0 w-40"
				>
					<li class="p-1 text-gray-900"><a href="#">Profile</a></li>
					<li class="p-1 text-gray-900"><a href="#">Edit Profile</a></li>
					<li class="p-1 text-gray-900"><a href="#">Update Password</a></li>
					<li class="p-1 text-gray-900"><a href="#">Update Password</a></li>
				</ul>
			</div>
		</nav>
	</header>
</template>
<script>
export default {
	data() {
		return {
			dropdown: false
		};
	}
};
</script>
