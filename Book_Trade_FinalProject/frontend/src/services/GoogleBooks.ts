
const apiKey = "AIzaSyC1c95lwgcgqLRUYIs5cEPIPSqNboEChmI";

export const searchBooks = async (query: string) => {
  const url = `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(query)}&key=${apiKey}`;

  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error('Failed to fetch books');
    }

    const data = await response.json();
    
    if (!data.items) {
      throw new Error('No items found');
    }

    return data.items;
  } catch (error) {
    console.error('Error fetching books:', error);
    throw error;
  }
};

