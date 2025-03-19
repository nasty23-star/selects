<script setup lang="ts">
import { ref, watch } from 'vue'
import VSelect from './VSelect.vue'
import VInput from './VInput.vue'
import VButton from './VButton.vue'
import type { NoteInt } from '../types/common'
const emit = defineEmits(['updateNote', 'deleteNote'])
const props = defineProps<{ note: NoteInt }>()
const selected = ref('')
const flag = ref('')
const login = ref('')
const password = ref('')
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
watch(login, () => {
  emit('updateNote', {
    ...props.note,
    login: login.value,
  })
})
watch(password, () => {
  emit('updateNote', {
    ...props.note,
    password: password.value,
  })
})
</script>
<template>
  <div class="container">
    <VInput v-model="flag" />
    <VInput v-model="login" />
    <VSelect v-model="selected" />
    <VInput v-model="password" />
    <VButton
      @click="emit('deleteNote', note.id)"
      class="border square tertiary-border tertiary-text small medium-elevate"
    >
      <i>delete</i>
    </VButton>
  </div>
</template>

<style scoped></style>
