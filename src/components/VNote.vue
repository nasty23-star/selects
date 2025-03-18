<script setup lang="ts">
import { ref, watch } from 'vue'
import VSelect from './VSelect.vue'
import type { NoteInt } from '../types/common'
const emit = defineEmits(['updateNote'])
const props = defineProps<{ note: NoteInt }>()
const selected = ref('')
watch(selected, () => {
  emit('updateNote', {
    id: props.note.id,
    type: selected.value,
  })
})
</script>
<template>
  <div class="container">
    <VSelect v-model="selected" />
  </div>
</template>

<style scoped></style>
