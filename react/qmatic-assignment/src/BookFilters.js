export function BookFilters(props) {
  const { filters, onToggleFilter, onShowAll } = props;
  return (
    <ul>
      <li>
        <input onClick={onShowAll} type="radio" id="ALL_GENRE" name="genre" defaultChecked={true} />
        <label htmlFor="ALL_GENRE">All</label>
      </li>
      {Object.keys(filters).map((genre) => (
        <li key={genre}>
          <input onClick={onToggleFilter(genre, !filters[genre])} type="radio" id={genre} name="genre" />
          <label htmlFor={genre}>{genre}</label>
        </li>
      ))}
    </ul>
  )
}