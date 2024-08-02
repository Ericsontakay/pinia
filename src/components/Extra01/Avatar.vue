<template>
  <div>
    <button @click="meStore.getMe()">Get me</button>
    <br>
    <pre>
      {{meStore}}
    </pre>
  </div>
</template>

<script setup>
import { useMeStore} from "../../store/Extra01/me.js";

const meStore = useMeStore()

</script>