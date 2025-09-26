"use client";

import React, { useState, useEffect, FC } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import styles from "./SearchBar.module.css";

const SearchBar: FC = () => {
  const [searchVal, setSearchVal] = useState<string>("");

  const query = useSearchParams().get("pokemon");
  const router = useRouter();

  useEffect(() => {
    if (query?.trim()) {
      setSearchVal(query.trim());
    }
  }, [query]);
  

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchVal(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (searchVal?.trim()) {
      router.push(`/?pokemon=${encodeURIComponent(searchVal.trim())}`);
    }
  };

  return (
    <form className={styles.searchWrapper} onSubmit={onSubmit}>
      <input
        type="text"
        className={styles.searchInput}
        value={searchVal}
        onChange={handleChange}
      />
    </form>
  );
};

export default SearchBar;
