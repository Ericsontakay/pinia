<template>
  <div>
    {{me.name}} <br>
    <button @click="save">Salvar da preferencias</button>
  </div>
</template>

<script setup>
import { useMeStore} from "../../store/Extra01/me.js";
import {storeToRefs} from "pinia";

const meStore = useMeStore()
const { me } = storeToRefs(meStore)

function save(){
  me.value.name = 'Novo nome da preferencia'
}
</script>