<template>
  <div>
    <button @click="meStore.getMe()">Get preferences</button>
  </div>
</template>

<script setup>
import { useMeStore} from "../../store/Extra01/me.js";

const meStore = useMeStore()
</script>