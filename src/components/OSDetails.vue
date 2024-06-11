<template>
  <div class="d-flex justify-end mb-2">
    <v-label class="mr-2" style="width: 120px">N⁰ da OS</v-label>
    <v-text-field
        v-model="orderDetails.number"
        variant="outlined"
        density="compact"
        type="number"
        prepend-inner-icon="mdi-pound"
        hide-details
        style="max-width: 180px;"
    />
  </div>

  <div class="d-flex justify-end mb-2">
    <v-label class="mr-2" style="width: 120px">Vencimento</v-label>
    <v-menu
        v-model="duedateMenu"
        :close-on-content-click="false"
    >
      <template v-slot:activator="{ props }">
        <v-text-field
            v-model="orderDetails.due_date"
            variant="outlined"
            density="compact"
            prepend-inner-icon="mdi-calendar"
            hide-details
            readonly
            style="max-width: 180px;"
            v-bind="props"
        />
      </template>

      <v-date-picker
          v-model="orderDetails.due_date"
          color="primary"
          hideHeader
          hideWeekdays
      ></v-date-picker>
    </v-menu>
  </div>

  <div class="d-flex justify-end">
    <v-label class="mr-2" style="width: 120px">Status da OS</v-label>
    <v-select
        v-model="orderDetails.status"
        :items="['Aberto', 'Em processo', 'Fechado']"
        placeholder="Escolha"
        variant="outlined"
        density="compact"
        prepend-inner-icon="mdi-power"
        hide-details
        style="max-width: 180px;"
    />
  </div>
</template>

<script setup>
import {useServiceOrderStore} from '../store/serviceOrder.js';
import {storeToRefs} from 'pinia';
import {ref} from 'vue';
const serviceOrderStore = useServiceOrderStore();
const {orderDetails} = storeToRefs(serviceOrderStore)

const duedateMenu = ref(false)
</script>
