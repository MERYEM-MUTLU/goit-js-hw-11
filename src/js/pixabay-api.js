import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '50393852-50daa37e0e79b7bd52cbbdabd';

export async function fetchImages(query) {
  const response = await axios.get(BASE_URL, {
    params: {
      key: API_KEY,
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });

  return response.data;
}
