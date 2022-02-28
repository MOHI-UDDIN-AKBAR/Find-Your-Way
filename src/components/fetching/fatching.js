const option = {
  method: "GET",
  headers: {
    "x-rapidapi-host": "travel-advisor.p.rapidapi.com",
    "x-rapidapi-key": process.env.REACT_APP_TRAVEL_API_KEY,
  },
};

export const getDataFromApi = async (type, bounds) => {
  const { sw, ne } = bounds;
  if ((sw, ne)) {
    const response = await fetch(
      `https://travel-advisor.p.rapidapi.com/${type}/list-in-boundary?bl_latitude=${sw.lat}&tr_latitude=${ne.lat}&bl_longitude=${sw.lng}&tr_longitude=${ne.lng}&restaurant_tagcategory_standalone=10591&restaurant_tagcategory=10591&limit=30&currency=USD&open_now=false&lunit=km&lang=en_US`,
      option
    );
    const { data } = await response.json();
    if (data) {
      return data;
    }
  }
};
// export default getDataFromApi;
