import axios from 'axios';

const API_KEY = '39751555-c2fbc931ac716611d03f33f4d';
const BASE_URL = 'https://pixabay.com/api/';

const getImages = async (query, page = 1) => {
  try {
    const response = await axios.get(
      `${BASE_URL}?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    return response.data.hits;
  } catch (error) {
    console.error('Error fetching images', error);
    return [];
  }
};

export { getImages };
