<script setup lang="ts">
import 'beercss'
import 'material-dynamic-colors'
import VueNote from './components/VueNote.vue'

import { ref } from 'vue'
import type { VNote } from './types/common'
const notes = ref<VNote[]>([])
const note = <VNote>{}

const addNewNote = () => {
  console.log('click')

  if (note && typeof note !== undefined && notes.value) {
    notes.value.push(note)
    return notes
  }
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
    <VueNote v-for="note in notes" :key="note.login" note="note"></VueNote>
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
