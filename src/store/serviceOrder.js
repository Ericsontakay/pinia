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

  getters: {
    subtotal(state) {
      return state
        .services
        .reduce((total, o) => {
          return total += o.price * o.qty
        }, 0)
    },
  },
})
