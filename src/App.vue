<script setup lang="ts">
import 'beercss'
import 'material-dynamic-colors'
import VNote from './components/VNote.vue'
import { useNotesStore } from './stores/notes'
import { ref } from 'vue'
import type { NoteInt } from './types/common'
const notes = ref<NoteInt[]>([])

const noteStore = useNotesStore()
</script>

<template>
  <header>
    <div class="wrapper">
      <h1>Учётные записи</h1>
      {{ notes }}
      <button @click="noteStore.addNewNote">
        <i>add</i>
      </button>
    </div>
  </header>
  <main>
    <VNote
      v-for="note in noteStore.notes"
      :note="note"
      :key="note.id"
      @update-note="noteStore.updateNote"
      @delete-note="noteStore.deleteNote"
    ></VNote>
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
