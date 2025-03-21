<script setup lang="ts">
import 'beercss'
import 'material-dynamic-colors'
import VNote from './components/VNote.vue'
import { onMounted } from 'vue'
import { useNotesStore } from './stores/notes'

const noteStore = useNotesStore()
onMounted(() => {
  const storedNotes = localStorage.getItem('notes')
  if (storedNotes !== null) {
    try {
      const parsedNotes = JSON.parse(storedNotes)
      // Ensure parsedNotes is an array of objects with the correct type
      if (Array.isArray(parsedNotes)) {
        parsedNotes.forEach((note) => {
          if ('id' in note && 'type' in note && 'login' in note && 'password' in note) {
            noteStore.notes.push(note)
          }
        })
      }
    } catch (error) {
      console.error('Error parsing notes:', error)
    }
  }
})
</script>

<template>
  <header>
    <div class="wrapper">
      <h1>Учётные записи</h1>
      <button @click="noteStore.addNewNote">
        <i>add</i>
      </button>
    </div>
  </header>
  <main>
    <div v-if='noteStore.notes.length > 0' class="titles"><div class="title">Метки</div><div class="title">Тип записи</div><div class="title">Логин</div><div class="title">Пароль</div></div>
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
  margin-bottom: 40px;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}
.titles {
  margin-left: 40px;
  display: flex;
  gap: 20px;
}
.title {
  width: 214px;
}
</style>
