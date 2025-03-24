<script setup lang="ts">
const props = defineProps(['modelValue', 'options'])

const emit = defineEmits(['update:modelValue'])
</script>
<template>
  <div class="select">
    <div class="field suffix border">
      <select
        :value="props.modelValue"
        @change="
          (e) => e.target && emit('update:modelValue', (e.target as HTMLSelectElement).value)
        "
      >
        <option v-for="option in props.options" :key="option">
          {{ option }}
        </option>
      </select>
      <i>arrow_drop_down</i>
    </div>
  </div>
</template>
<style scoped>
.select {
  width: 214px;
}
.field {
  margin: 0;
}
</style>
