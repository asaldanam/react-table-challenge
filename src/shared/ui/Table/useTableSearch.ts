import { useMemo, useState } from 'react';
import { TableDef, TableRow } from './types';

/** Handles table search */
export default function useTableSearch(rows: TableRow[], def: TableDef) {
  const [search, setSearch] = useState('');

  const fields = useMemo(
    () => Object.entries(def).filter(([, config]) => config.searchable),
    [def],
  );

  const placeholder = useMemo(
    () => `Search by ${fields.map(([field]) => field).join(', ')}...`,
    [fields],
  );

  // Filters all rows that any of their field values matches with the search term.
  const filteredRows = search
    ? rows.filter((row) =>
        fields.some(([field]) => {
          const value = `${row[field]}`;
          const match = value.toLowerCase().includes(search.toLowerCase());
          return match;
        }),
      )
    : rows;

  /** handles search event */
  function handleSearch(event: any) {
    setSearch(event?.target?.value);
  }

  function clearSearch() {
    setSearch('');
  }

  return {
    search,
    placeholder,
    filteredRows,
    actions: {
      handleSearch,
      clearSearch,
    },
  };
}
