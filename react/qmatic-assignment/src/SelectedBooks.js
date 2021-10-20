export function SelectedBooks(props) {
  return (
    <ul>
      {props.books.map((book) => (
        <li className="flex" key={`selected-${book.id}`}>
          <div>{book.title}</div>
          <div>{book.id}</div>
        </li>
      ))}
    </ul>
  )
}