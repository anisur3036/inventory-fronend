<template>
	<div>
    <template v-if="authenticated">
			<router-link 
				:to="{
				name: 'home'
			}"
			>Home</router-link> |
    	<router-link to="/about">About</router-link> |
    	<a href="#" @click.prevent="signout">Signout</a>
    </template>
	</div>
</template>
<script>
	import { mapGetters, mapActions } from 'vuex';

	export default {
		computed: {
			...mapGetters({
				authenticated: 'auth/authenticated',
				user: 'auth/user'
			})
		},
		methods: {
			...mapActions({
				signOutAction: 'auth/signout'
			}),
			signout() {
				this.$Progress.start()
				this.signOutAction().then(() => {
					this.$router.replace({ name: 'signin'})
					this.$Progress.finish()
				})
			}
		}
	}
</script>