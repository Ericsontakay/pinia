<template>
  <h2 class="mb-2">Dados do pedido</h2>

  <v-table>
    <thead>
    <tr>
      <th class="w-50">Descrição</th>
      <th style="width: 150px">Preço</th>
      <th style="width: 110px">Qnt.</th>
      <th class="text-right">Total</th>
    </tr>
    </thead>

    <tbody>
    <tr
        v-for="(service, index) in services"
        :key="index"
    >
      <td>
        <v-text-field
            v-model="service.description"
            variant="outlined"
            density="compact"
            hide-details
        />
      </td>

      <td>
        <v-text-field
            v-model="service.price"
            variant="outlined"
            density="compact"
            prefix="R$"
            hide-details
        />
      </td>

      <td>
        <v-text-field
            v-model="service.qty"
            variant="outlined"
            density="compact"
            type="number"
            hide-details
        />
      </td>

      <td>
        <div class="d-flex align-center justify-end">
          <div class="text-right text-subtitle-1">
            R$ {{ service.price * service.qty }}
          </div>

          <v-btn
              icon="mdi-trash-can-outline"
              size="small"
              variant="plain"
              @click="serviceOrderStore.deleteService(index)"
          />
        </div>
      </td>
    </tr>
    </tbody>
  </v-table>

  <div class="mt-4 text-right">
    <v-btn
        color="primary"
        variant="tonal"
        @click="serviceOrderStore.addService"
    >Adicionar item
    </v-btn>
  </div>
</template>

<script setup>
import {useServiceOrderStore} from '../store/serviceOrder.js';
import {storeToRefs} from 'pinia';

const serviceOrderStore = useServiceOrderStore()
const {services} = storeToRefs(serviceOrderStore)
</script>
