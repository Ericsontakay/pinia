<template>
  <v-card>
    <v-table>
      <tbody>
      <tr>
        <td><b>Subtotal</b></td>
        <td class="text-right">R$ {{subtotal}}</td>
      </tr>
      <tr>
        <td><b>Desconto</b></td>
        <td>
          <div class="text-right d-flex">
            <v-text-field
                v-model="discountValue"
                variant="outlined"
                density="compact"
                hide-details
                class="mr-2"
            />

            <v-select
                v-model="discountType"
                variant="outlined"
                density="compact"
                :items="['%', 'R$']"
                hide-details
                style="max-width: 90px"
            />
          </div>
        </td>
      </tr>
      <tr>
        <td><b>Total</b></td>
        <td class="text-right">R$ 50</td>
      </tr>
      </tbody>
    </v-table>
  </v-card>
</template>

<script setup>
import {useServiceOrderStore} from '../store/serviceOrder.js';
import {storeToRefs} from 'pinia';

const serviceOrderStore = useServiceOrderStore()
const {subtotal, discountType, discountValue} = storeToRefs(serviceOrderStore)
</script>
