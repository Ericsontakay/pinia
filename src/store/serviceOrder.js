import {defineStore} from 'pinia';

export const useServiceOrderStore = defineStore('serviceOrder', {
  state: () => ({
    orderDetails: {
      number: 0,
      due_date: null,
      status: '',
    },
    client: {
      name: '',
      phone: '',
      email: '',
    },
    services: [
      {
        description: '',
        price: 0,
        qty: 0,
      },
    ],
    description: '',
    discountType: 'R$',
    discountValue: 0,
  }),

  actions: {
    addService() {
      this.services.push({
        description: '',
        price: 0,
        qty: 0,
      })
    },

    deleteService(index) {
      this.services.splice(index, 1);
    },
  },

  // Computed da store
  // Reduce uma função como primeiro parametro e o segundo parametro como valor inicial (0), dentro da funcao ele recebe o total acumulado e o objeto do loop (o), e retorna total mais e/ou igual ao preço do objeto do loop vezes a quantidade de objeto do loop;
  getters: {
    subtotal(state) {
      return state
        .services
        .reduce((total, o) => {
          return total += o.price * o.qty
        }, 0)
    },
    // Na função de calculo do total, se não existir nenhum valor de desconto, ele vai retornar o valor do subtotal, ou seja o valor original;
    // Para calcular o desconto de um produto é preciso dividir a porcentagem de desconto por 100 e multiplicar o resultado pelo preço original.
    total(state) {
    if (state.discountType === 'R$') {
      return state.subtotal - state.discountValue
    }

    if (state.discountType === '%'){
      return state.subtotal - (state.subtotal * state.discountValue / 100)
    }

    return state.subtotal
    }
  },
})
