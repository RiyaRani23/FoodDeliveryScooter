export default async function handler(req, res) {
  const url = "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.34410&lng=85.30950";
  const response = await fetch(url, {
    headers: {
      'User-Agent': 'Mozilla/5.0...', // Sometimes Swiggy requires a User-Agent
    }
  });
  const data = await response.json();
  res.status(200).json(data);
}