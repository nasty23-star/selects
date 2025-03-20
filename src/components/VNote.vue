<script setup lang="ts">
import { ref, watch } from 'vue'
import VSelect from './VSelect.vue'
import VInput from './VInput.vue'
import VButton from './VButton.vue'
import type { NoteInt } from '../types/common'
const emit = defineEmits(['updateNote', 'deleteNote'])
const props = defineProps<{ note: NoteInt }>()
const selected = ref(props.note.type)
const flag = ref(props.note.flag)
const login = ref(props.note.login)
const password = ref(props.note.password)
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
    <VInput v-model="password" type="password" />
    <VButton
      @click="emit('deleteNote', note.id)"
      class="border square tertiary-bordermedium large tertiary-text medium-elevate top"
    >
      <i>delete</i>
    </VButton>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: flex-start;
  gap: 20px;
  margin-top: 40px;
}

</style>
