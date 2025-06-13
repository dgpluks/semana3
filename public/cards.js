const BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzYjA3ZDQyNWNiYjVkYTYwZDY3MGNlNzUyNjg4NDhjYiIsIm5iZiI6MTc0OTI0Mzc1OS4zNDgsInN1YiI6IjY4NDM1NzZmN2M2YzZlNTQ1Njk2Yzk1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.PI2hZf0yN2NKP0e1cidJeh9Etf7PoJwAzNQ5TaSy2kg';
const options = {
    method: 'GET', headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`
    }
};