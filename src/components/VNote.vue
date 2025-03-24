<script setup lang="ts">
import { ref, watch } from 'vue'
import VSelect from './VSelect.vue'
import VInput from './VInput.vue'
import VButton from './VButton.vue'
import type { NoteInt } from '../types/common'
const emit = defineEmits(['updateNote', 'deleteNote'])
const props = defineProps<{ note: NoteInt }>()
const options = ref(['Локальная', 'LDAP'])
const selected = ref('Локальная')
const flag = ref(
  props.note.flag
    ?.map((x) => x.text)
    .join('')
    .replace(':', ': ') ?? '',
)
const login = ref(props.note.login)
const password = ref(props.note.password)
watch(selected, () => {
  emit('updateNote', {
    ...props.note,
    type: selected.value,
    password: selected.value === 'LDAP' ? null : password.value,
  })
})
watch(flag, () => {
  if (flag.value !== undefined || flag.value) {
    const newFlagObject = { text: flag.value }
    emit('updateNote', {
      ...props.note,
      flag: [newFlagObject],
    })
  } else {
    console.error('flag.value is undefined')
  }
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
const error = ref(false)
const validateSelected = () => {
  if (!selected.value) {
    error.value = true
  } else {
    error.value = false
  }
}
const validateLogin = () => {
  if (!login.value) {
    error.value = true
  } else {
    error.value = false
  }
}
const validatePassword = () => {
  if (!password.value) {
    error.value = true
  } else {
    error.value = false
  }
}

// если пароля нет, логин должен растянуться на всю длину
// доделать сохранение в объект, а не в строку, в метке
</script>
<template>
  <div class="container">
    <VInput v-model.trim="flag" type="flag" />
    <VSelect
      :class="{ invalid: error }"
      v-model="selected"
      :options="options"
      @blur="validateSelected"
    />
    <VInput :class="{ invalid: error }" v-model.trim="login" @blur="validateLogin" />
    <VInput
      v-if="props.note.password !== null"
      :class="{ invalid: error }"
      v-model.trim="password"
      type="password"
      @blur="validatePassword"
    />
    <VButton
      @click="emit('deleteNote', note.id)"
      class="border square tertiary-border medium large tertiary-text medium-elevate top"
    >
      <i>delete</i>
    </VButton>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  align-items: flex-start;
  margin-left: 40px;
  gap: 20px;
  margin-bottom: 20px;
}
</style>
