<script setup lang="ts">
// import { RouterLink, RouterView } from 'vue-router'
import 'beercss'
import 'material-dynamic-colors'
import VueNote from './components/VueNote.vue'

import { ref } from 'vue'

const notes = ref<string[]>([])
const newNote = ref('')

const addNewNote = () => {

  console.log('click')

  notes.value.push(newNote.value)
  return notes
}
</script>

<template>
  <header>
    <!-- <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" /> -->

    <div class="wrapper">
      <h1>Учётные записи</h1>
      <button
        @click="addNewNote"
        class="border square tertiary-border tertiary-text small medium-elevate"
      >
        <i>add</i>
      </button>

      <!-- <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav> -->
    </div>
  </header>
  <main>
    <VueNote v-for="(newNote, index) in notes" :key="index" newNote="note">{{}}</VueNote>

    <!-- <TheCard v-for="card in dataCards" :number="card.number" :key="card.number"
          >{{ card.text
          }}<template #href><a :href="card.href" target="_blank">Ссылка</a></template></TheCard
        > -->

    <VueNote></VueNote>
  </main>
  <!-- <RouterView /> -->
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
