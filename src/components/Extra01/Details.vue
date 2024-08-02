<template>
  <div>
      {{me.name}} <br>
    <button @click="save">Save name</button>
  </div>

  <br>
  <button @click="save">Save</button>
</template>

<script setup>
import { useMeStore} from "../../store/Extra01/me.js";
import {storeToRefs} from "pinia";



function save(){
  me.value.name = 'Novo nome'
}

const meStore = useMeStore()
const { me } = storeToRefs(meStore)
</script>