// Setting up Hamburger for Mobile Devices
const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () =>{
        nav.classList.add('active');
    })
}

if (bar) {
    close.addEventListener('click', () =>{
        nav.classList.remove('active');
    })
}

fetch('https://newsapi.org/v2/everything?q=Clothes&from=2023-06-11&sortBy=popularity&pageSize=10&page=1&apiKey=2e36620114594d3b9a5cdd14dab91e98')
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
})
.then(data => {
  data.articles.forEach(article => {
    let now = new Date();
    let dateNow= dateBuilder(now);
    
    const markup = `
    <div class="blog-box">
        <div class="blog-img">
            <img src="${article.urlToImage}" alt="">
        </div>
        <div class="blog-details">
            <h4>${article.title}</h4>
            <p>${article.description}</p>
            <a href="#">CONTINUE READING</a>
        </div>
        <h1>${dateNow}</h1>
    </div>
    `;
    document.querySelector('#blog').insertAdjacentHTML('beforeend', markup);
  });
})

function dateBuilder(d) {
    let months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
  
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();
  
    return `${date}/${month}`;
  }