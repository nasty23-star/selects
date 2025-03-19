<script setup lang="ts">
import { ref, watch } from 'vue'
import VSelect from './VSelect.vue'
import VInput from './VInput.vue'
import type { NoteInt } from '../types/common'
const emit = defineEmits(['updateNote'])
const props = defineProps<{ note: NoteInt }>()
const selected = ref('')
const flag = ref('')

watch(selected, () => {
  emit('updateNote', {
    ...props.note,
    type: selected.value,
  })
})
watch(flag, () => {
  emit('updateNote', {
    ...props.note,
    flag: flag.value,
  })
})
</script>
<template>
  <div class="container">
    <VInput v-model="flag" />
    <VSelect v-model="selected" />
  </div>
</template>

<style scoped></style>
