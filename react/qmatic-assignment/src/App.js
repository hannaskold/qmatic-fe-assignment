import './App.css';
import { getBooks } from './books-mock';
import { BookFilters } from './BookFilters';
import { SelectableBooks } from './SelectableBooks';

function App() {
  return (
    <>
      <h1>The Library</h1>

      <BookFilters></BookFilters>

      <SelectableBooks></SelectableBooks>

      <h2>Selected Books Summary</h2>
    </>
  );
}

export default App;
