const apiBase = process.env.NODE_ENV === 'production' ? 'https://pedromelgueira.com/honeybackend/' : 'http://localhost:8080/';

export let settings = {
  APIBase: apiBase,
  PageSize: 50,
}
