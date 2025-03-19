<script setup lang="ts">
import 'beercss'
import 'material-dynamic-colors'
import VNote from './components/VNote.vue'

import { ref } from 'vue'
import type { NoteInt } from './types/common'
const notes = ref<NoteInt[]>([])
const note = <NoteInt>{}

const addNewNote = () => {
  if (note && typeof note !== undefined && notes.value) {
    notes.value.push({
      id: Date.now(),
      flag: '',
      type: '',
      login: '',
      password: '',
    })
  }
}
const updateNote = (newNote: NoteInt) => {
  return notes.value.map((note) => {
    if (note.id === newNote.id) {
      note.type = newNote.type
      note.flag = newNote.flag
      note.login = newNote.login
      note.password = newNote.password
    }
    return note
  })
}
</script>

<template>
  <header>
    <div class="wrapper">
      <h1>Учётные записи</h1>
      <button
        @click="addNewNote"
        class="border square tertiary-border tertiary-text small medium-elevate"
      >
        <i>add</i>
      </button>
    </div>
  </header>
  <main>
    <VNote v-for="note in notes" :note="note" :key="note.id" @update-note="updateNote"></VNote>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
  margin-top: 0;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
