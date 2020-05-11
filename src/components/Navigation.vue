<template>
	<div>
		<router-link 
			:to="{
			name: 'home'
		}"
		>Home</router-link> |
    <template v-if="authenticated">
    	<router-link to="/about">About</router-link> |
    	<a href="#" @click.prevent="signout">Signout</a>
    </template>
    <template v-else>
    	<router-link to="/signin">Signin</router-link>
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
				this.signOutAction().then(() => {
					this.$router.replace({ name: 'home'})
				})
			}
		}
	}
</script>