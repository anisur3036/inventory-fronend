<!-- eslint-disable-->
<template>
	<div class="h-screen relative overflow-hidden">
		<Topnav />
		<Leftmenu />
	</div>
</template>

<script>
import Dashboard from '../layouts/Dashboard.vue';
import Topnav from '@/components/Topnav.vue';
import Leftmenu from '@/components/Leftmenu.vue';

export default {
	components: {
		Topnav,
		Leftmenu
	},
	created() {
		this.$emit(`update:layout`, Dashboard);
	}
};
</script>
