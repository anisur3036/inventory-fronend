<template>
  <div class="signin">
    <h1>Signin</h1>
    {{ form }}
    <form @submit.prevent="signin">
	    <div>
	    	<label for="email">Email: </label>
	    	<input type="text" name="email" id="email" v-model="form.email">
	    </div>
	    <div>
	    	<label for="password">Password: </label>
	    	<input type="password" name="password" id="password" v-model="form.password">
	    </div>
	    <div>
	    	<button type="submit">Sign in</button>
	    </div>
	    </form>
  </div>
</template>

<script>
	import { mapActions } from 'vuex';

	export default {
		data() {
			return {
				form: {
					email: null,
					password: null
				}
		}
		},
		methods: {
			...mapActions({
				signIn: 'auth/signIn'
			}),
			signin() {
    		this.signIn(this.form).then(() =>{
    			this.$router.replace({
    				name: 'about'
    			})
    		}).catch(() => {
    			console.log('Failed')
    		})
			}
		}
	}
</script>
