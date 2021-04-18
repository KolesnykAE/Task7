// // - Створити довільний елемент с id = text. використовуючи JavaScript, зробіть так, щоб при кліку на кнопку зникавл елемент с id="text".
//
//     let textHidden = document.getElementById('text');
//     textHidden.onclick = () => { textHidden.hidden = 'none'};
//
// // - Створіть кнопку, при кліку на яку, вона буде приховувати сама себе.
//
//     let buttonHidden = document.getElementById('button-hidden');
//     buttonHidden.onclick = () => {buttonHidden.hidden = 'none'};
//
// // - Створити інпут який приймає вік людини та кнопку яка підтверджує дію.
// //     При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи менше він ніж 18, та повідомити про це користувача
//
//     let button = document.forms.myForm.btn.onclick = () => {
//         let input = document.getElementById('age');
//         let value = input.value;
//         if (value < 18) {
//             alert('No entry. you are young!')
//         }
//     }
//
// // - Створіть меню, яке розгортається/згортається при клику
//
//     let list = document.getElementById('category');
//     let element = list.querySelector('.title');
//
//     element.onclick = function () {
//         list.classList.toggle('open');
//     };
//
//
// // - Створіть список коментарів , приклад об'єкту коментаря - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
// //     Вивести список коментарів в документ, кожний в своєму блоці.
// //     Додайте кожному коментарю по кнопці для згортання його body.
//
//     const comments = [
//         {name: 'АЛЕНА', text: 'Решила попробовать новый продукт, по совету косметолога. Не прогадала, очень быстро впитывается. Кожа увлаженная, а после, ощущение бархата)) ' +
//                 'Прекрасная основа под макияж. Запах свежести. Однозначно советую.'},
//         {name: 'ЕКАТЕРИНА', text: 'Беру это масло уже не первый раз. Рекомендую)'},
//         {name: 'АННА', text: 'Использую для скрабов, масок для волос и как бальзам для губ, со всеми задачами справляется отлично. Аромат божественный, упаковка (баночка) отличная, всем довольна :)'},
//         {name: 'ВІКТОРІЯ', text: 'Масло хороше. Зволожує кінчики волосся добре змивається. Раджу спробувати.'},
//         {name: 'ВАЛЕНТИНА', text: 'Отличное масло. Использую для кончиков волос и для рук в холодное время года.'}
//     ];
//
//     let comment = document.getElementById('comment');
//
//     for (let item of comments) {
//         const div = document.createElement('div');
//         const h3 = document.createElement('h3');
//         h3.innerHTML =  item.name;
//         const p = document.createElement('p');
//         p.innerText = item.text;
//         const button = document.createElement('button');
//         button.innerText = 'свернуть';
//         button.onclick = function (){
//            if (p.hidden = !p.hidden){
//                button.innerText = 'развернуть';
//                 return
//            } else {p.hidden = false}
//            button.innerText = 'свернуть';
//         }
//
//         div.appendChild(h3);
//         div.appendChild(p);
//         div.appendChild(button);
//         comment.appendChild(div);
//     };
//
// // - Створити 2 форми  по 2 інпути в кожній. створити кнопку при кліку на яку зчитується та виводиться на консоль інформація з цих 2х форм.
// //     Кнопка повинна лежати за межами форм (Щоб уникнути  перезавантаження сторінки)
// //     Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//
//
//     const button_confirm = document.getElementById('button_info');
//
//     button_confirm.onclick = function () {
//         for (let item of document.forms) {
//             for (let info of item) {
//                 console.log(info.value)
//             }
//         }
//     };
//
// // - Створити функцію, яка генерує таблицю.
// //     Перший аргумент визначає кількість строк.
// //     Другий параметр визначає кількість ячейок в кожній строці.
// //     Третій параметр визначає елемент в який потрібно таблицю додати.
//
//     const main = document.getElementById('main');
//
//     function createTable(rows, cellsInRow, elementForTable) {
//         const table = document.createElement('table')
//         table.style.border = '1px solid black';
//         for (let i = 0; i < rows; i++) {
//             const row = document.createElement('tr');
//             row.style.border = '1px solid black';
//             for (let j = 0; j < cellsInRow; j++) {
//                 const cell = document.createElement('td');
//                 cell.style.border = '1px solid black';
//                 cell.innerHTML = `${i} : ${j}`
//
//                 row.appendChild(cell)
//             }
//             table.appendChild(row)
//         }
//         elementForTable.appendChild(table)
//     }
//     createTable(7, 9, main);
//
// // - Напишіть «Карусель» – стрічку зображень, яку можна гортати вліво-вправо нажаттям на стрілочки.
//
//     const skating = [
//         'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIlxW5lKbjMIHL-e2m9bPavB6Dlujcj95s2Q&usqp=CAU',
//         'https://i.eurosport.com/2018/02/17/2272986-47358510-2560-1440.jpg',
//         'https://gorod55.ru/attachments/d1f144e4fe7ecd4cbaf5d18abb79881ba7e95920/store/fill/780/440/468c0dfd47137093af41e7056aa0a5ae2a12cbc592ffb3393169bf2f6b27/%D0%B7%D0%B0%D0%B3%D0%B8%D1%82%D0%BE%D0%B2%D0%B0.jpeg',
//         'https://i.pinimg.com/originals/f3/4f/64/f34f64ea70e8446215a531b925d710e7.jpg',
//         'https://www.fpeople.net/uploads/person_images/2831249110466667/5e26ac9a36ef69.09958730.jpg',
//     ]
//     const images = document.getElementById('images');
//     function clickRight() {
//        let item = skating.indexOf(images.src);
//        if (item < skating.length) {
//            item++;
//            images.src = skating[item];
//            return;
//        }
//         images.src = images[0];
//     }
//     function clickLeft() {
//         let item = skating.indexOf(images.src);
//         if (item > 0) {
//             item--;
//             images.src = skating[item];
//             return;
//         }
//         images.src = skating[skating.length-1];
//     }
//     document.getElementById('right').onclick = clickRight;
//     document.getElementById('left').onclick = clickLeft;


