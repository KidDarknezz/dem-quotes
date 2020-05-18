<template>
  <q-page class="flex flex-center">
  	<button @click="logoutUser">logout</button>
  </q-page>
</template>

<script>
	import { mapActions } from 'vuex'

	export default {
		methods: {
			...mapActions('authStore', ['logoutUser'])
		}
	}
</script>
