// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import type { VNote } from '../types/common'

export const useNotesStore = defineStore('notes', () => {
  const notes = ref<VNote[]>([])
  return { notes }
})
