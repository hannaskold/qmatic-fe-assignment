<template>
  <div id="app" class="app-container">
    <h1>The Library</h1>
    <BookFilters></BookFilters>
    <SelectableBooks></SelectableBooks>
    <h2>Selected Books Summary</h2>
  </div>
</template>

<script lang="ts">
import SelectableBooks from './SelectableBooks.vue';
import BookFilters from './BookFilters.vue';
import { bookData } from './bookData';

export default {
  components: {
    BookFilters,
    SelectableBooks
  },
  data() {
    return {
      books: bookData()
    }
  }
}
</script>

<style>
.app-container {
  margin-right: auto;
  margin-left: auto;
  max-width: 500px;
  width: 100%;
  position: relative;
}
</style>
