<template>
	<q-page>
		<div class="q-pa-md">
			<div class="row">
				<div class="col">
					<h5 class="q-ma-none">Cotizaciones</h5>
				</div>
			</div>
			<q-separator />
			<div class="row q-mt-md">
				<q-btn color="black" label="Crear" @click="dialog = true"/>
			</div>
			<div class="row q-mt-md">
				<q-table
					class="full-width"
					:data="data"
					:columns="columns"
					row-key="name"
				>
					<template v-slot:body="props">
						<q-tr :props="props">
<!-- 							<q-td auto-width>
								<q-btn size="sm" color="accent" round dense icon="add" />
							</q-td>
							<q-td auto-width>
								<q-btn size="sm" color="accent" round dense icon="add" />
							</q-td> -->
							<q-td
								v-for="col in props.cols"
								:key="col.name"
								:props="props"
							>
								{{ col.value }}
							</q-td>
						</q-tr>
					</template>
				</q-table>
			</div>
		</div>
		<q-dialog
			v-model="dialog"
			persistent
			:maximized="maximizedToggle"
			transition-show="slide-up"
			transition-hide="slide-down"
		>
			<q-card class="bg-dark text-white">
				<q-bar>
					<q-space />
					<q-btn dense flat icon="close" v-close-popup>
						<q-tooltip content-class="bg-white text-dark">Cerrar</q-tooltip>
					</q-btn>
				</q-bar>

				<q-card-section>
					<div class="text-h6">Crear nueva cotizacion</div>
				</q-card-section>

				<q-card-section class="q-pt-none">
					<q-form>
						<div class="row">
							<div class="col q-pa-md">
								<q-input
									filled
									label="Nombre"
									hint="Nombre y apellido"
									color="white"
									dark
									class="q-mb-md"
									v-model="name"
								/>
								<q-input
									filled
									label="Descripcion"
									hint="Referencia de uso interno"
									color="white"
									dark
									class="q-mb-md"
									v-model="description"
								/>
								<q-date
									class="q-mb-md"
									v-model="date"
									color="black"
									landscape
									dark
								/>
								<q-btn style="display: block;" color="black" label="Crear" @click="createQuote"/>
							</div>
							<div class="col q-pa-md">
								<template v-for="(item, i) in items">
									<q-input
										filled
										label="Item"
										color="white"
										dark
										class="q-mb-md"
										v-model="item.item"
									>
										<template v-slot:after>
											<q-btn round dense icon="close" @click="spliceItem(i)"/>
										</template>
									</q-input>
									<template v-if="item.subItems.length > 0">
										<template v-for="(subItem, j) in item.subItems">
											<q-input
												filled
												label="Sub-item"
												color="white"
												dark
												class="q-mb-md q-ml-lg"
												v-model="subItem.subItem"
											>
												<template v-slot:after>
													<q-btn round dense icon="close" @click="spliceSubItem(i, j)"/>
												</template>
											</q-input>
										</template>
									</template>
									<q-btn class="q-mb-md q-ml-lg" color="white text-black" icon="add" round size="xs" @click="pushSubItem(i)"/>
									<q-input
										filled
										label="Cantidad"
										color="white"
										dark
										class="q-mb-md"
										v-model="item.amount"
									/>
									<q-input
										filled
										label="Precio"
										color="white"
										dark
										class="q-mb-md"
										v-model="item.price"
									/>
									<hr class="q-mb-md" v-if="items.length > 1">
								</template>
								<q-btn class="q-mb-md" color="white text-black" icon="add" round @click="pushItem"/>
							</div>
						</div>		
					</q-form>
				</q-card-section>
			</q-card>
		</q-dialog>
	</q-page>
</template>

<script>
export default {
	data () {
		return {
			dialog: false,
			maximizedToggle: true,
			date: this.generateDate(),
			name: '',
			description: '',
			items: [
				{
					item: '',
					amount: '',
					price: '',
					subItems: []
				}
			],
			columns: [
				{ name: 'name', label: 'Nombre', field: 'name', align: 'left' },
				{ name: 'number', label: 'No.', field: 'number', align: 'left' },
				{ name: 'date', label: 'Fecha', field: 'date', align: 'left' },
				{ name: 'description', label: 'Descripcion', field: 'desc', align: 'left' }
			],
			data: [
				{
					name: 'Pepe Veraz',
					number: '0001',
					date: '01/01/1991',
					desc: 'Lorem ipsum dolor amet'
				}
			]
		}
	},
	methods: {
		pushItem() {
			this.items.push(
				{
					item: '',
					amount: '',
					price: '',
					subItems: []
				}
			)
		},
		pushSubItem(i) {
			this.items[i].subItems.push(
				{
					subItem: ''
				}
			)
		},
		spliceItem(i) {
			this.items.splice(i, 1)
			if (this.items.length === 0) {
				this.items.push(
					{
						item: '',
						amount: '',
						price: '',
						subItems: []
					}
				)
			}
		},
		spliceSubItem(i, j) {
			this.items[i].subItems.splice(j, 1)
		},
		createQuote() {
			let fullQuote = {
				name: this.name,
				description: this.description,
				date: this.date,
				items: this.items
			}
			console.log(fullQuote)
		},
		generateDate() {
			let today = new Date()
			let yyyy = today.getFullYear()
			let mm = today.getMonth() + 1
			let dd = today.getDate()
			if (mm < 10) mm = `0${mm}`
			if (dd < 10) dd = `0${dd}`
			return `${yyyy}/${mm}/${dd}`
		}
	}
}
</script>
