import { fetchImages } from './js/pixabay-api.js';

import {
  renderGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('#search-form');
const input = document.querySelector('#search-id');

form.addEventListener('submit', event => {
  event.preventDefault();

  const query = input.value.trim();
  if (!query) return;

  clearGallery();
  showLoader();

  fetchImages(query)
    .then(response => {
      const images = response.hits;

      if (!images || images.length === 0) {
        iziToast.error({
          title: 'No Results',
          message:
            'Sorry, there are no images matching your search query. Please try again!',
          className: 'my-toast-style',
          position: 'topRight',
        });
        hideLoader();
        return;
      }

      setTimeout(() => {
        renderGallery(images);
        hideLoader();
      }, 1000);
    })
    .catch(error => {
      console.error('Fetch error:', error);
      iziToast.error({
        title: 'Error',
        message: 'An error occurred while fetching data.',
      });
      hideLoader();
    });
});
