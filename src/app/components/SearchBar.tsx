'use client'

import { useRouter } from "next/navigation";

export default function SearchBar() {
  const router = useRouter();
  async function handleSearch(formData: FormData) {
    const searchQuery = formData.get('search') as string;
    router.push(`items?search=${searchQuery}`);
  }
  return (
    <form action={handleSearch}>
      <label htmlFor="search"></label>
        <input type="text" name="search"  />
        <button type="submit">✨</button>
    </form>
  );
}
