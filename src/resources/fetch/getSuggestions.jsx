export const getSuggestions = async (searchInput) => {
  try {
    const request = await fetch(
      `https://api.giphy.com/v1/gifs/search/tags?api_key=yGhwzJF6h4j3zJ8UcebnoEtaqCjAJrTJ&q=${searchInput}&limit=5&offset=0&lang=es`
    );

    const response = await request.json();
    const { data } = response;
    return data;
  } catch {
    console.warn("Suggestions error");
  }
};
