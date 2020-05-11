<template>
  <div class="about">
    <h1>About</h1>
    <template v-if="user">
			<p>Hi, {{ user.name }}</p>
    </template>
    <template else>
    	No user
    </template>
  </div>
</template>
<script>
	import { mapGetters } from 'vuex';

	export default {
		computed: {
			...mapGetters({
				auth: 'auth/authenticated',
				user: 'auth/user'
			})
		}
	}
</script>
