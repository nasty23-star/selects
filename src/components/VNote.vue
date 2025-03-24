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
const flag = ref(props.note.flag?.map((x) => x.text).join('; '))
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
  if (flag.value !== undefined && flag.value.trim() !== '') {
    const newFlagObject = flag.value
    const flags = newFlagObject
      .split(';')
      .map((part) => ({ text: part.trim() }))
      .filter((flag) => flag.text !== '')
    emit('updateNote', {
      ...props.note,
      flag: flags,
    })
  } else {
    console.error('flag.value is empty or undefined')
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

</script>
<template>
  <div class="container">
    <VInput v-model.trim="flag" type="flag" class="flag" />
    <VSelect
      :class="{ invalid: error }"
      class="type"
      v-model="selected"
      :options="options"
      @blur="validateSelected"
    />
    <VInput :class="{ invalid: error }" class="login" v-model.trim="login" @blur="validateLogin" />
    <VInput
      v-if="props.note.password !== null"
      class="password"
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
  max-width: 1140px;
}
.flag,
.type,
.password {
  max-width: 248px;
}
.login {
  width: 100%;
}
</style>
