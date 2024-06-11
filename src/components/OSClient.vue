<template>
  <h2 class="mb-2">Dados do cliente</h2>
  <v-row>
    <v-col>
      <v-text-field
          v-model="client.name"
          label="Nome"
          variant="outlined"
          density="compact"
          prepend-inner-icon="mdi-account"
          hide-details
      />
    </v-col>

    <v-col>
      <v-text-field
          v-model="client.phone"
          label="Telefone"
          variant="outlined"
          density="compact"
          prepend-inner-icon="mdi-phone"
          hide-details
      />
    </v-col>

    <v-col>
      <v-text-field
          v-model="client.email"
          label="Email"
          variant="outlined"
          prepend-inner-icon="mdi-email"
          density="compact"
          hide-details
      />
    </v-col>
  </v-row>
</template>

<script setup>
import {useServiceOrderStore} from '../store/serviceOrder.js';
import {storeToRefs} from 'pinia';
const serviceOrderStore = useServiceOrderStore()
const {client} = storeToRefs(serviceOrderStore)
</script>
