<script setup lang="ts">
const props = defineProps(['modelValue', 'type'])
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()
</script>
<template>
  <div :class="props.type !== 'password' ? 'field border input' : 'field sufix border input'">
    <input
      :value="props.modelValue" :type="props.type"
      @input="emit('update:modelValue', ($event.target as HTMLInputElement).value)"
    />
    <i v-if="props.type === 'password'">visibility</i>
  </div>
</template>
<style scoped>
.input {
  margin: 0;
}
</style>
