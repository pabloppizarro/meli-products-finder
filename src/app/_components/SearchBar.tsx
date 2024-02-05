"use client";

import { useRouter, useSearchParams } from "next/navigation";
import styles from "@/styles/components/search-bar.module.scss";
import { useEffect, useState } from "react";
export default function SearchBar() {
  const router = useRouter();
  const search = useSearchParams();
  // const [inputValue, setInputValue] = useState<string>("");

  const [value, setValue] = useState("");

  useEffect(() => {
    const searchKey = search.get("search");
    if (searchKey) {
      setValue(searchKey);
    }
  }, []);
  async function handleSearch(formData: FormData) {
    const searchQuery = formData.get("search") as string;
    // setInputValue(searchQuery);
    setValue(searchQuery);
    router.push(`/items?search=${searchQuery}`);
  }
  return (
    <div className={styles.wrapper}>
      <form className={styles.searchForm} action={handleSearch}>
        <label htmlFor="search"></label>
        <input
          placeholder="Nunca dejes de buscar..."
          maxLength={120}
          spellCheck={false}
          className={styles.inputSearch}
          type="text"
          name="search"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button className={styles.searchButton} type="submit">
          ✨
        </button>
      </form>
    </div>
  );
}
