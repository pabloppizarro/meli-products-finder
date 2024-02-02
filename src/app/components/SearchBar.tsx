export default function SearchBar() {
  async function handleSearch() {
    "use server";
  }
  return (
    <form action={handleSearch}>
      <label htmlFor="search">
        <input type="text" name="search" />
        <button type="submit">✨</button>
      </label>
    </form>
  );
}
