var date = new Date();
var year = date.getFullYear();
document.querySelector('#current-year').textContent = year;
document.querySelector('#last-mod').textContent = document.lastModified;

let countReview = localStorage.getItem('review');

if(!countReview) {
  countReview = 0;
}else{
  countReview = parseInt(countReview, 10);
}

countReview++;
localStorage.setItem('review',countReview);

const message = document.getElementById("counter");
message.textContent = `Review complete: ${countReview}`