<script setup lang="ts">
const props = defineProps(['modelValue'])
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>
<template>
  <div class="field border input">
    <input
      :value="props.modelValue"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
  </div>
</template>
<style scoped>
.input {
  max-width: 300px;
}
</style>
