<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated v-if="$route.fullPath != '/login'">
      <q-toolbar class="bg-black text-white">
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
        <q-avatar class="on-right" style="border-radius: 0; height: auto;">
          <img src="~assets/dem_logo.png">
        </q-avatar>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
      v-if="$route.fullPath != '/login'"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          Menu
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink'

export default {
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  data () {
    return {
      leftDrawerOpen: false,
      essentialLinks: [
        {
          title: 'Inicio',
          icon: 'home',
          link: '/'
        },
        {
          title: 'Cotizaciones',
          icon: 'list_alt',
          link: '#/quotes'
        },
        {
          title: 'Facturas',
          icon: 'receipt',
          link: '#/invoices'
        },
        {
          title: 'Cerrar Sesion',
          icon: 'logout',
          link: '#/login'
        }
      ]
    }
  }
}
</script>
