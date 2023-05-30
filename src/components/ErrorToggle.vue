<script setup lang="ts">
  import ErrorMessage from './ErrorMessage.vue';
  import { ref } from 'vue';

  const open = ref(false);
  const msg =
    'Something really bad happened. For more information contact us at hello@example.com';

  const toggleMessage = () => {
    open.value = !open.value;
  };
</script>

<template>
  <div>
    <h1>There's been an error</h1>
    <button id="toggle-message" @click="toggleMessage">
      Toggle more information
    </button>
    <ErrorMessage v-if="open" :msg="msg" />
  </div>
</template>
