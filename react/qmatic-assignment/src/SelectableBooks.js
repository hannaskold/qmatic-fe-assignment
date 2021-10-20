export function SelectableBooks(props) {
  const { books, onToggleBook, selectedBooks } = props;
  return (
    <ul>
      {books.map((book, index) => {
        const isSelected = selectedBooks.some((_book) => _book.id === book.id);
        return (
          <li key={`selectable-${book.id}`}>
            <a onClick={onToggleBook(book, isSelected)} style={isSelected ? { background: 'darkseagreen' } : {}}>
              {book.title}
            </a>
          </li>
        )
      })}
    </ul>
  )
}