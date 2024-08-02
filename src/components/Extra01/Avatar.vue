<template>
  <div>
    {{me.name}} <br>
  </div>
</template>

<script setup>
import { useMeStore} from "../../store/Extra01/me.js";
import {storeToRefs} from "pinia";

const meStore = useMeStore()
const { me } = storeToRefs(meStore)
</script>