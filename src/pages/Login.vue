<template>
	<q-page class="flex flex-center bg-black">
		<q-form style="width: 25%;">
			<img src="~assets/dem_logo.png" class="q-mb-lg" style="width: 35%;">
			<q-input
			dark
			filled
			color="white"
			type="email"
			class="q-mb-md"
			label="Email" />
			<q-input
			filled
			dark
			color="white"
			type="password"
			class="q-mb-md"
			label="Contraseña" />
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

</script>