export const getSearch = async (searchInput) => {
  try {
    const request = await fetch(
      `https://api.giphy.com/v1/gifs/search?api_key=yGhwzJF6h4j3zJ8UcebnoEtaqCjAJrTJ&q=${searchInput}&limit=15&offset=0&rating=g&lang=es`
    );

    const response = await request.json();
    const { data } = await response;
    return data;
  } catch {
    console.warn("Search error");
  }
};
