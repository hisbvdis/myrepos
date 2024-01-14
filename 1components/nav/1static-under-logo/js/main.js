var root = document.querySelector('.root');
var navBtn = document.querySelector('.navBtn');


// Для скрытия навигации в мобильной версии и определения срабатывания JS, у навигации:
//  - удалить класс "navOpened" для скрытия контента в мобильной версии
//  - удалить класс "no-js" для определения срабатывания JS
function navOpenedRemove() {
  root.classList.remove('root--noJS');
  root.classList.remove('root--navOpened');
}
document.onload = navOpenedRemove();


// При нажатии на кнопку навигации, добавлять к документу класс "открытое меню"
navBtn.addEventListener('click', (evt) => {
  evt.preventDefault();
  root.classList.toggle('root--navOpened');
})
