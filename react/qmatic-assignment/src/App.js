import './App.css';
import { getBooks } from './books-mock';
import { BookFilters } from './BookFilters';
import { SelectableBooks } from './SelectableBooks';
import { SelectedBooks } from './SelectedBooks';
import { useState, useEffect } from "react";

function App() {
  const [filters, setFilters] = useState({});
  const [books, setBooks] = useState([]);
  const [selectedBooks, setSelectedBooks] = useState([]);

  useEffect(() => {
    resetFilters();
  }, []);

  const resetFilters = () => {
    const allBooks = getBooks();
    setBooks(allBooks);
    setFilters(getFiltersFromBooks(allBooks));
  }

  const getFiltersFromBooks = (allBooks) => {
    return allBooks.reduce((result, book) => {
      return { ...result, [book.genre]: false };
    }, {});
  }

  const toggleBook = (book, selected) => (e) => {
    let _selectedBooks = [...selectedBooks];
    if (!selected) {
      _selectedBooks.push(book);
    } else {
      _selectedBooks = _selectedBooks.filter(_book => _book.id !== book.id);
    }
    setSelectedBooks(_selectedBooks);
  }

  const toggleFilter = (genre, active) => (e) => {
    const allBooks = getBooks();
    setFilters({ ...getFiltersFromBooks(allBooks), [genre]: active });
    setBooks(allBooks.filter(book => book.genre === genre));
    setSelectedBooks(selectedBooks.filter(book => book.genre === genre));
  }

  return (
    <>
      <h1>The Library</h1>

      <BookFilters onShowAll={resetFilters} onToggleFilter={toggleFilter} filters={filters}></BookFilters>

      <SelectableBooks onToggleBook={toggleBook} selectedBooks={selectedBooks} books={books}></SelectableBooks>

      <h2>Selected Books</h2>

      <SelectedBooks books={selectedBooks}></SelectedBooks>

      <h5 className="pageCount">Total number of pages in selected books: {selectedBooks.reduce((result, book) => {
        return result += book.numberOfPages;
      }, 0)}
      </h5>
    </>
  );
}

export default App;
