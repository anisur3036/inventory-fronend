<template>
  <div class="about">
  	<Navigation />
    <h1>About</h1>
    <template v-if="user">
			<p>Hi, {{ user.name }}</p>
    </template>
  </div>
</template>
<script>
	import Navigation from '@/components/Navigation.vue'
	import { mapGetters } from 'vuex';

	export default {
		components: {
			Navigation
		},
		computed: {
			...mapGetters({
				auth: 'auth/authenticated',
				user: 'auth/user'
			})
		}
	}
</script>
