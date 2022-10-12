export default class NewsApiService {
  constructor() {
    this.searchQuery = '';
    this.page = 1;
  }

  fetchArticles() {
    const options = {
      headers: {
        Authorization: '2db0a998de724756a5b7b96ed36669ed',
      },
    };

    const url = `https://newsapi.org/v2/everything?q=${this.searchQuery}&language=en&pageSize=10&page=${this.page}`;

    fetch(url, options)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }

        return response.json();
      })
      .then(data => (this.page += 1));
  }

  get query() {
    return this.searchQuery;
  }

  set query(newQuery) {
    this.searchQuery = newQuery;
  }
}
