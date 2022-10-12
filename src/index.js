import './css/main.css';
import NewsApiService from './js/news-service';

const refs = {
  searchForm: document.querySelector('.js-search-form'),
  articleContainer: document.querySelector('.js-articles-container'),
  loadMore: document.querySelector('[data-action="load-more"]'),
};

const newsApiService = new NewsApiService();

refs.searchForm.addEventListener('submit', onSearch);
refs.loadMore.addEventListener('click', onLoadMore);

function onSearch(e) {
  e.preventDefault();

  newsApiService.query = e.currentTarget.elements.query.value;

  newsApiService.fetchArticles();
}

function onLoadMore() {
  newsApiService.fetchArticles();
}
