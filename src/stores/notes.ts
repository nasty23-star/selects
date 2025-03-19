import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { NoteInt } from '../types/common'

export const useNotesStore = defineStore('notes', () => {
  const notes = ref<NoteInt[]>([])
  const addNewNote = () => {
    notes.value.push({
      id: Date.now(),
      type: '',
      login: '',
      password: '',
      flag: '',
    })
  }
  const updateNote = (newNote: NoteInt) => {
    notes.value = notes.value.map((note) => {
      if (note.id === newNote.id) {
        return { ...note, ...newNote }
      }
      return note
    })
  }
  const deleteNote = (id: number) => {
    notes.value = notes.value.filter((note) => note.id !== id)
  }
  return {
    notes,
    addNewNote,
    updateNote,
    deleteNote,
  }
})
