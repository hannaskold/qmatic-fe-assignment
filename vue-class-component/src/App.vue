<template>
  <div id="app" class="app-container">
    <h1>The Library</h1>
    <BookFilters></BookFilters>
    <SelectableBooks></SelectableBooks>
    <h2>Selected Books Summary</h2>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Watch, Prop } from 'vue-property-decorator';
import SelectableBooks from './SelectableBooks.vue';
import BookFilters from './BookFilters.vue';
import { IBook } from './IBook.interface';
import { bookData } from './bookData';

@Component({
  components: {
    SelectableBooks,
    BookFilters
  }
})
export default class App extends Vue {
  private books: IBook[] = bookData();
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
