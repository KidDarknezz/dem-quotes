<template>
	<q-page class="flex flex-center bg-black">
		<q-form style="width: 25%;" @submit="login">
			<img src="~assets/dem_logo.png" class="q-mb-lg" style="width: 35%;">
			<q-input
			dark
			filled
			color="white"
			type="email"
			class="q-mb-md"
			label="Email"
			v-model="formData.email" />
			<q-input
			filled
			dark
			color="white"
			type="password"
			class="q-mb-md"
			label="Contraseña"
			v-model="formData.password" />
			<div class="row">
				<q-space />
				<q-btn
				color="white"
				text-color="black"
				type="submit"
				label="Iniciar sesion" />
			</div>
		</q-form>
	</q-page>
</template>

<script>
	import { mapActions } from 'vuex'

	export default {
		data() {
			return {
				formData: {
					email: '',
					password: ''
				}
			}
		},
		methods: {
			...mapActions('authStore', ['loginUser']),
			login() {
				this.loginUser(this.formData)
			}
		}
	}
</script>