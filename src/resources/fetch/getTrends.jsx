export const getTrends = async () => {
  try {
    const request = await fetch(
      `https://api.giphy.com/v1/gifs/trending?api_key=yGhwzJF6h4j3zJ8UcebnoEtaqCjAJrTJ&limit=15&rating=g`
    );

    const response = await request.json();
    const { data } = response;
    return data;
  } catch {
    console.warn("Trending error");
  }
};
