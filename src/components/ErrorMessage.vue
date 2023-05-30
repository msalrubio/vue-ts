<template>
  <div role="alert" class="error">
    {{ msg }}
  </div>
</template>

<script setup lang="ts">
  defineProps<{ msg: string }>();
</script>

<style>
  .error {
    color: tomato;
  }
</style>
