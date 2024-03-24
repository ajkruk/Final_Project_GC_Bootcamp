// src/api/googleBooksApi.ts
const apiKey = "AIzaSyC1c95lwgcgqLRUYIs5cEPIPSqNboEChmI";

export const searchBooks = async (query: string) => {
  const response = await fetch(`${"https://www.googleapis.com/books/v1/volumes"}?q=${encodeURIComponent(query)}&key=${apiKey}`);
  if (!response.ok) {
    throw new Error('Failed to fetch books');
  }
  const data = await response.json();
  return data.items;
};
