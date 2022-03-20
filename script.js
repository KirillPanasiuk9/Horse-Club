// DAY 1

// alert('Привет Кирилл');
// ['Fuck_u_and', 'see_u_tomorow'].forEach(alert)

// let message = "Kirill";
// message = 11111;
// alert(message);

// let name = "Kirill";
// alert (`Hi,${name}`)
// // typeof name
// console.log(
//     typeof name
// );

// let UserName = prompt('Введите Ваше имя', undefined);
// alert (`Hello, ${UserName}`);

// let a = "hi";
// alert (a);
// a = Boolean(a)
// console.log(typeof a)

// let n = 2;
// n *= 3 + 5;
// alert(n);

// let a = +(prompt("Первое число?", 1));
// let b = +(prompt("Второе число?", 2));

// alert(a + b); // 12

// let BirthDay = prompt("My Birthday", "");
// if (BirthDay == '09.04.1999') {
//     alert ("Молодц");
// }
// else {
// }

// let age = prompt ("How old is you?", "");
// let AccessAllowed = age >= 18 ? "Accesse allowed" : "Acesse denied";
// alert (AccessAllowed);

// let age = prompt("How old is you?", "");
// if (age < 10) {
//     alert ("Hi baby!");
// } else if (age < 18) {
//     alert("Hi, teenager!");
// } else if (age < 65) {
//     alert ("Hi, man!");
// } else {
//     alert ("Hi, old man!");
// }

// let age = prompt("U age?", "");
// if (age < 3) {
//     message = 'Здравствуй, малыш!';
//   } else if (age < 18) {
//     message = 'Привет!';
//   } else if (age < 100) {
//     message = 'Здравствуйте!';
//   } else {
//     message = 'Какой необычный возраст!';
//   }
//   alert(message);

// let a = 7777;
// alert (a);

// a = 7777;
// alert (a);

// let OficialName = prompt ("What's the oficial name of JavaScript?", "");
// if (OficialName == "ECMAScript") {
//     alert ("Great!")
// } else {
//     alert ("Don't know? - ECMAScript")
// };

// let Number = prompt("Input any number", "");
// if (Number < 0) {
//     alert ("-1")
// } else if (Number > 0) {
//     alert ("1")
// } else {
//     alert ("0")
// }

// let result;
// if (a + b < 4) {
//   result = 'Мало';
// } else {
//   result = 'Много';
// }

// let result = (a + b < 4) ? "Мало": "Много";

// let login = prompt("Login", "");
// if (login == 'Сотрудник') {
//   message = 'Привет';
// } else if (login == 'Директор') {
//   message = 'Здравствуйте';
// } else if (login == '') {
//   message = 'Нет логина';
// } else {
//   message = '';
// }
// alert (message);



// DAY 2

// let hour = 12;
// let isWeekend = true;

// if (hour < 10 || hour > 18 || isWeekend) {
//   message = ( 'Офис закрыт.' );
// } else message = ("Welcome");
// console.log(message);

// let h = prompt ("Hour", "");
// let m = prompt ("Minite", "");
// alert (`The Time is ${h}:${m}`);

// alert( alert(1) || alert(2) || alert(3) );
// alert ( alert(1) && alert(2) );

// alert( 2 && 3 );

// let age = prompt ("Age?", "");
// if (age >= 14 && age <= 90) {
//     alert ("Yes")
// } else {
//     alert ("No")
// }

// let age = prompt ("Age", "")
// let a = Boolean (age <= 14 && age >= 90)
// alert (a)

// let age = prompt ("Age", "");
// let a = !!(age >= 14 && age <= 90);
// alert (a);

// let login = prompt ("Who is here?", "");
// if (login == "Admin") {
//     let password = prompt ("Your Password?", "");
//     if (password == "Im the boss") {
//         alert ("Hi!")
//     } else if (password == "" || password == null) {
//         alert ("Canceled")
//     } else {
//         alert ("Wrong password")
//     }

// } else if (login == "" || password == null) {
//     alert ("Canceled")
// } else {
//     alert ("IDK who you are")
// }



// DAY 3

// let a = 1;
// while (a <= 3) {
//     alert (a);
//     a++
// }

// let a = 3;
// while (a != 0) {
//     alert (a)
//     a--
// }

// let a = prompt ("What is your name?", '');
// while (a != "Kirill") {
//     let a = prompt ("What is your name?", '');
// }

// let message = 'start message';
// //старт месседж для того, чтобы вайл не блокировал другие действия типа отмены

// while(message !== '77' && message) {
//     message = prompt('it is here until you input 77');
// }

// alert('you inputed 77 or canceled the promprt and it disappeared, good night!');

// let name = prompt ('What is your name?', '');
// while (name !== 'Kirill') {
//     alert ('Wrong name, try again')
//     name = prompt ('What is your name?', '');

// }
// alert ('Hi, Kirill')

// let a = 5;
// for (; a < 8; a++) {
//     alert (a)
// }

// let sum = 0;
// while (true) { // отдает бесконечный цикл, для его прерывания используем break
//     let value = +prompt ('Input any number', '');
//     if (!value) break
//     sum = sum + value; // = sum += value
// } 
// alert ('The Sum is ' + sum);

// let a = 0;
// for (; a < 10; a++) {
//     if (a % 2 == 0)
//     alert (a); 
// } // выдасть только нечетные

// let a = 0;
// for (; a < 10; a++) {
//     if (a % 2 == 0) continue
//     alert (a);
// } // выдасть только нечетные тк при выполнении условия (число четное) код продолжится и сл выдасть нечетное

// let i = prompt ("Input the number", '');
// if (i > 5) {
//     alert(i);
//   } else {
//     continue;
//   }

// let i = 0;
// while (++i < 5) alert( i ); // перфиксная форма (++i) возвращае значение ПОСЛЕ увеличение // 1,2,3,4,5

// let i = 0;
// while (i++ < 5) alert( i ); // постфиксная форма (i++) возвращае значение ДО увеличение // 1,2,3,4

// for (let i = 0; i < 5; ++i) alert( i ); // в алгоритме for пре/постфиксная форма не имеет значение
// for (let i = 0; i < 5; i++) alert( i );

// let i = 0;
// for (;i <= 10; i++) {
//     if (i % 2 == 0 && i !== 0)
//     alert (i);
// }

// let i = 0;
// for (; i <= 10; i = i +2) {
//     if (i !== 0)
//     alert (i);
// }

// for (let i = 0; i < 3; i++) {
//     alert( `number ${i}!` );
//   }

// let i = 0;
// while (i < 3) {
//     i++
//     alert (` Numebr ${i} ! `);
// }

// let a;
// do {
//     a = prompt ('Input the number bigger then 100')
// } while (a <= 100 && a)
// alert ('Done!'); // используем do ... while для того, чтобы цикл начал выполнение (выполнился хотя бы один раз) иначе while не даст начать выполняться циклу


// let a = 2 + 2;

// switch (a) {
//   case 3:
//     alert( 'Маловато' );
//     break;
//   case 4:
//     alert( 'В точку!' );
//     break;
//   case 5:
//     alert( 'Перебор' );
//     break;
//   default:
//     alert( "Нет таких значений" );
// }

// let a = 2 + 2;
// switch (a) {
//   case 3: // (*) группируем оба case
//   case 5:
//     alert('Неправильно!');
//     alert("Может вам посетить урок математики?");
//     break;

//   default:
//     alert('Результат выглядит странновато. Честно.');
// }

// switch (browser) {
//     case 'Edge':
//       alert( "You've got the Edge!" );
//       break;

//     case 'Chrome':
//     case 'Firefox':
//     case 'Safari':
//     case 'Opera':
//       alert( 'Okay we support these browsers too' );
//       break;

//     default:
//       alert( 'We hope that this page looks ok!' );
//   }

//   let browser = prompt ('What browser do you use?');
//   if (browser == 'Edge') {
//       alert ('You have got the Edge');
//   } else if (browser == 'Chrome') {
//     alert( 'Okay we support these browsers too' );
//   } else if (browser == 'Firefox') {
//     alert( 'Okay we support these browsers too' );
//   } else if (browser =='Safari') {
//     alert( 'Okay we support these browsers too' );
//   } else if (browser == 'Opera') {
//     alert( 'Okay we support these browsers too' );
//   } else {
//     alert( 'We hope that this page looks ok!' );
//   }

//   let browser = prompt ('What browser do you use?');
//   if (browser == 'Edge') {
//       alert ('You have got the Edge');
//   } else if (browser == 'Chrome'
//     || browser == 'Firefox'
//     || browser =='Safari'
//     || browser == 'Opera') {
//     alert( 'Okay we support these browsers too' );
//     } else {
//         alert( 'We hope that this page looks ok!' );
//       }

// const number = +prompt('Введите число между 0 и 3', '');
// if (number === 0) {
//   alert('Вы ввели число 0');
// }
// if (number === 1) {
//   alert('Вы ввели число 1');
// }
// if (number === 2 || number === 3) {
//   alert('Вы ввели число 2, а может и 3');
// }

// const number = +prompt('Введите число между 0 и 3', '');
// switch (number) {
//     case 0:
//     case 1:
//         alert (`Вы ввели число ${number}`);
//         break
//     case 2:
//     case 3:
//         alert('Вы ввели число 2, а может и 3');
// }

// function Name(name, surname) { // объяление Функции, в скобках указываем пареметры (аргументы) функции
//     alert ('Hi, Im' + ' ' + name + ' ' + surname); // тело функции
// } 
// Name ('Kirill', 'Panasiuk');

// function showMessage(from, text = "текст не добавлен") { // если один из параметров не добавлен, то выполнится Значение по умолчанию
//     alert( from + ": " + text );
//   }
// showMessage("Аня"); // Аня: текст не добавлен

// function sum(a, b) {
//     alert (a + b);
// }
// sum (1, 2);

// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('А родители разрешили?');
//     }
//   }
//   let age = prompt('Сколько вам лет?', 18);

// if ( checkAge(age) ) {
//   alert( 'Доступ получен' );
// } else {
//   alert( 'Доступ закрыт' );
// }

// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       return confirm('Родители разрешили?');
//     }
//   }

// function checkAge(age) {
//     return (age > 18) ? true : confirm ('Did Parrents allowe?') 
// }
// function checkAge(age) {
//     return (age < 18) || confirm ('Did Parrents allowe?') 
// }

// function min (number1, number2) {
//    return number1 > number2 ? number2 : number1
// }

// let x = prompt ('Input the number');
// let n = prompt ('Input the degree');

// function pow (x, n) {
//     if (n > 0){
//     }
// }
// let result = Math.pow (x, n);
// alert (result);


// let x = +prompt ('Input positive number', '');
// let n = +prompt ('Input positive number', '');
// function pow (x, n) {
//     let result = x;
//     for (let i = 1; i < n; i++) {
//         result *= x;
//     }
//     return result;
// }
// if (n < 0) {
//     alert ('Input positive number')
// } else {
//     alert ( pow (x, n))
// }

// function sayHi() {}  // Объявляем функцию (Function Declaration)
// let sayHi = function() {} // Создаем Функциональное выражение (Function Expression)

// function sayHi() {   // (1) создаём, or let sayHi = function ()
//     alert( "Hi" );
//   }
//   let func = sayHi;    // (2) копируем
//   func(); // Привет    // (3) вызываем копию (работает)!
//   sayHi(); // Привет   //     прежняя тоже работает (почему бы нет)

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
// }
// function showOk() {
//     alert ('Are you agree?');
// }
// function showCancele() {
//     alert ('You canceled.');
// }
// ask ("Are you agree?", showOk, showCancele); // использование: функции showOk, showCancel передаются в качестве аргументов ask

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
//   ask(
//     'Are you agree?',
//     function() { alert('You agreed.'); },
//     function() { alert('You canceled.'); }
//   );

// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }

//   ask(
//         'Are you agree?',
//         () => alert('You agreed.'),
//         () => alert('You canceled.')
//   );

// let sum = (a, b) => a + b;
// /* Более короткая форма для:
// let sum = function(a, b) {
//   return a + b;
// };
// */
// alert( sum(1, 2) ); // 3

// let isBoss = confirm("Ты здесь главный?"); // confirm выводит модальное окно с OK & Cancele
// alert( isBoss );

// let a = 1;
// console.log(a++);
// console.log(++a);

// let firstName = null;
// let lastName = null;
// let nickName = "Суперкодер";
// // !!! показывает первое определённое значение:
// alert(firstName ?? lastName ?? nickName ?? "Аноним"); // Суперкодер



// Код Ромы

// function createCharacter(data) {

//     return {
//         name: data.name,
//         age: data.age,
//         sayHi: function() {
//             console.log(this.name);
//         }
//     };
// };

// let john = createCharacter({name: 'John', age: 15});
//let johnsbro = 

// Конец Кода Ромы






// let name = prompt ('What is your name?');

// while (name !== 'Ann' && name) {
//     alert ('No, it isnt your name! Try again)');
//     name = prompt ('What is your name?');
// }

// alert ('Hi, ' + name + '!' + ' Computer have made a number from 1 to 100, lets try to guess!');

// function randomNumber () {
//     return Math.ceil(Math.random () * 100);
// }; 

// let guess = +prompt ('What is the number? Input your guess.');

// while (guess !== randomNumber ()) {
//         if (guess < randomNumber ()) {
//             alert ('Mmmm, too less, try one more time.');
//             guess = prompt ('What is the number? Input your guess.');
//             }
//         else if (guess > randomNumber ()) {
//             alert ('Mmmm, too much, try one more time.');
//             guess = prompt ('What is the number? Input your guess.');
//             }
//     }
// alert (`Wow, you did it! It was ${randomNumber ()}!`)





// function randomNumber () {
//     return Math.ceil(Math.random () * 100);
// }

// console.log (randomNumber ())







// let name = prompt ('What is your name?');
// let NAMES = [
//     'sasha',
//     'alexandra',
//     'aleksandra',
//     'sashka',
// ]

// function isNameExistInList() {
//     if (name === null) return false
//     return NAMES.includes(name.toLowerCase());
// }

// while (!isNameExistInList()) {
//     alert ('No, it isnt your name! Try again)');
//     name = prompt ('What is your name?');
// }

// alert ('Hi, ' + name + '!' + ' Computer have made a number from 1 to 100, lets try to guess!');

// function randomNumber () {
//     return Math.ceil(Math.random () * 100);
// }; 

// let numberRandom = randomNumber ();

// let guess = +prompt ('What is the number? Input your guess.');

// function showHint () {
//     (guess < numberRandom) ? alert ('Mmmm, too less, try one more time.') : alert ('Mmmm, too much, try one more time.');
// }

// while (guess !== numberRandom) {
//     showHint ();
//     guess = +prompt ('What is the number? Input your guess.'); 
// }

// alert (`Wow, you did it! It was ${numberRandom}!`);
// alert ('So get your reward!!!')






// 4.1 Объекты

//let user = {} // Это Объект. Объект - ящик с подписанными папками. Каждый элемент данных хранится в своей папке, на которой написан ключ.




// // протащили в контест через let that = this;
// a = 83;

// function hoisting() {

//     let that = this; // протащили в контест через let that = this;
//     a = 77;

//     let obj = {
//         a: 93,
//         func: function() {console.log(that.a)}, 
//     }

//    obj.func();


// }

// hoisting();




// let user = {                     // Объект
//     name: 'Kirill',              // под ключом "name" хранится значение "Kirill"
//     surname: 'Panasiuk',
//     age: 22,
//     'likes football': true,      // имя из неск слов в ""
// };

// delete user.age;                 // удаляем свойство

// console.log (user.name);         // получаем свойства объекта
// console.log (user.age);          // underfined, тк удалили его
// console.log (user["likes football"]);


// let key = 'likes football';

// // обратились к свойству, то же самое, что и user ['likes football'] = true;
// user[key] = true; // обращение к свойству (значению)



// let user = {
//     name: 'Kirill',
//     surname: 'Panasiuk',
//     age: 22,
//     city: 'Minsk',
// }

// let key = prompt ('What do you want to know about me?', '');

// console.log (user[key]);


// let fruit = prompt ('What fruit?', '');

// let bag = {
//     [fruit]: 5,
// };

// alert (bag[fruit]);

//Подведём итог: в большинстве случаев, когда имена свойств известны и просты, используется запись через точку. 
//Если же нам нужно что-то более сложное, то мы используем квадратные скобки [].



// let user = {
//     age: 22,
// };

// console.log (user.name);             // проверка на существование свойства
// console.log ('name' in user);        // проверка на существование свойства



// let friend = {
//     name: 'Roman',
//     surname: 'Ard',
//     age: 22,
//     status: 'Married',
// };

// for (let prop in friend) {           // for ... in  используется для перебора всех свойств объекта
//     console.log(prop);               // name, surname, ...
//     console.log(friend[prop]);       // Roman, Ard, ...
// }

// // все конструкции «for» позволяют объявлять переменную внутри цикла: for (let prop in friend)



// let user = {};
// user.name = 'John';                  // добавляем свойство name в объект
// user.surname = 'Smith';
// user.name = 'Pete';
// delete user.name;
// console.log (user)



//   let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
//   };

//   let sum = 0;
//   for (let key in salaries) {
//     sum += salaries[key];
//   }

//   console.log(sum);




// let user = {
//     name: "Kirill",
//     city: "Vysokoe",
// }

// let admin = user;
// admin.city = 'Minsk';

// console.log (user.city)
// console.log (admin.city) // то же самое, что (user.city) тк admin это ссылка на user

// for (let key in user)
// console.log (key);

// for (let key in user)
// console.log (user[key]);



// // Два объекта равны только в том случае, если это один и тот же объект.
// let a = {
//     name: 'Kirill',
// };

// let b = {
//     name: 'Kirill',
// };

// console.log (a === b); // false, тк это два разных объекта, не смотря на то, что они одинаковые


// let a = {
//     name: 'Kirill',
// };

// let b = a; // Это не присваивание, а ССЫЛКА, объекты не присваиваются, а только ссылаются

// console.log (a === b); // true, тк сравниваем один и тот же объект





// КЛОНИРОВАНИЕ ОБЪЕКТОВ. THIS. 

// let user = {
//     name: "Иван",
//     age: 30,
//   };

// let status = "Maried";

//   let clone = {
//       ...user,                         // создаем Клон, НЕ ссылка, а новый объект, сперд оператор
//       city: 'Minsk',                   // Сразу добвить новые поля в объект          
//       status,                          // Добавлем новое поле, занчение для когорого прописано в переменной (let status = "Maried";)
//       age: undefined,                  // в данном случае удалить поле, но можно так перезаписывать значение полей
//       name: 'Kirill',                  // перезаписали name
//       sayHi() {                        // поместили функцию в объект (sayHI - метод объекта)
//         alert('Привет!' + this.name);  // Для доступа к информации внутри объекта используем THIS
//       },
//   };

// delete (clone.sayHi);
// clone.age = "44";                      // перезаписали значение age

// clone.sayHi = function() {             // перезаписали функцию в объекте
//     alert('HI! ' + this.name);
// };


// // console.log (clone.sayHi()) // Hi! Kirill
// for(let prop in clone)
// console.log(clone[prop]);


// console.log(user.age); // 30
// console.log(clone.age); // 44

// console.log(typeof user.age) // number
// console.log(typeof clone.age) // string


// const clone2 = JSON.parse(JSON.stringify(user)) // глубокое копирование
// console.log (JSON.parse(JSON.stringify(user)))



// let user = {
//     name: 'Kirill',
// };

// let admin = {
//     name: 'Roman',
// };

// function sayHi() {
//     console.log ('Hi, ' + this.name );
// };

// user.sayHi = sayHi;
// admin.sayHi = sayHi;

// user.sayHi();
// admin.sayHi();





// ФУКЦИЯ-КОНСТРУКТОР, NEW.

// function User(name,city) {                 // User это имя функции-конструктора (обязательно с большой буквы)
//     this.name = name;
//     this.city = city;
//     this.isAdmin = false;
//     this.sayHi = function() {
//         console.log('Hi! My name is ' + this.name + 'and I live in ' + this.city)
//     };
// }

// let user = new User('Kirill', 'Minsk');   
// let user2 = new User('Roman', 'Moscow');

// for(let prop in user) {
//     console.log(user[prop])
// };

// for(let prop in user2) {
//     console.log(user2[prop])
// }

// user2.sayHi()


// let user = {
//     name: 'Kirill',
// };

// function sayHi(city) {
//     console.log('Hi, ' + this.name + city)
// };

// sayHi.call(user, 'Minsk')                        // насильно привязываем функцию к объекту



// let calculator = {

//     read() {
//         this.a = +prompt('a?');
//         this.b = +prompt('b?');
//     },

//     sum() {
//         return this.a + this.b;
//     },

//     mul() {
//         return this.a * this.b;
//     },
// };

// calculator.read();
// alert(calculator.sum() );
// alert(calculator.mul() );



// function Calculator() {

//     this.read = function read() {
//         this.a = +prompt('a?');
//         this.b = +prompt('b?');
//     };

//     this.sum = function sum() {
//         return this.a + this.b;
//     };

//     this.mul = function mul() {
//         return this.a * this.b;
//     };
// };

// let calculator = new Calculator();
// calculator.read();

// alert( "Sum=" + calculator.sum() );
// alert( "Mul=" + calculator.mul() );




// 4.6 ОПЦИОНАЛЬНАЯ ЦЕПОЧКА '?'

//let user = {}; // пользователь без адреса
//alert( user?.address?.street ); // undefined (без ошибки) ЗНАК ВОПРОСА проверяет существует ли свой свойство объекта, если нет, то вернет undefined





// 5.4 МАССИВ

// let names = [                       // создаем массив 'names'
//     'Kirill',
//     'Ann',
//     'Roman',
//     'Marria',
//     function sayHi() {
//         console.log (`Hi, I'm ${this[0]}`)    // В массиве могут храниться элементы любого типа. (ОЧЕНЬ РЕДКО)
//     },
// ];

// //console.log( names[0]);           // вызываем отдельный элемент
// //console.log( names[1]);           // вызываем отдельный элемент

// names[3] = 'Marry';                 // изменяем элемент массива
// names[5] = 'Igor';                  // добавляем новый элемент в массив
// names[4] ()

// names.pop();                        // pop Удаляет последний элемент из массива 
// names.shift();                      // shift Удаляет первый элемент из массива 
// names.push('Igor', 'Egor');         // push Добавляет элемент в конец массива (Может добавлять сразу несколько элкментов)
// names.unshift('Kirill', 'John');    // unshift Добавляет элемент в начало массива (Может добавлять сразу несколько элкментов)
// for(let i = 0; i < length; i++) {   // перебор элементов массива
//     console.log(names[i]);
// };
// names.length = 7;                   // сократили массив до 7 элементов (было 8)
// names.length = 0;                   // очистили массив
// console.log(names)

// let matrix = [                      // многомерный массив (матрица)
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9]
//   ];
//   console.log( matrix[1][1] );      // 5, центральный элемент




// let styles = [
//     'Jazz',
//     'Blues',
// ];

// styles.push('Rock-n-roll');
// styles[(Math.floor(styles.length/2))] = 'Classic';
// console.log(styles);




// sumInput();
// function sumInput() {

//     numbers = [];

//     let num = prompt('Input the number', '');

//     while(num !== null && !isNaN(+num)) {
//         numbers.push(+num);
//         num = prompt('Input the number', '');
//     };
//     console.log(numbers);

//     let sum =0;

//     for(let i = 0; i < numbers.length; i++) {
//         sum += numbers[i];
//     };
//     return sum;
// };

// alert(sumInput());





// 5.5 МЕТОДЫ МАССИВА

// arr.splice(index[, deleteCount, elem1, ..., elemN])

// let cities = ['Minsk', 'Moscow', 'London', 'New-York'];

// cities.splice(1,1);                                         // начиная с позиции 1, удалить 1 элемент
// cities.splice(0,1, 'Madrid', 'Rome');                       // удалили первый элемент, у дабавили 2 новых
// cities.splice(2,0, 'Paris');                                // без удаления добавили новый элемент
// let deleted = cities.splice(4,1)                            
// console.log(deleted)                                        // возвращает массив из удалённых элементов
// cities.splice(-1,1)                                         // отрицательный индекс позволяет начать отсчёт элементов с конца

// cities.slice()                                              // создаёт копию массива
// cities.slice(0,2)                                           // создаёт копию части массива (с 0 по 2)

// cities.concat(['Berlin', 1]);                               // создаёт копию массива и добавляет в нее значения

// let obj = {
//     0: 'Smth',
//     1: 'else',
//     [Symbol.isConcatSpreadable]: true,                      // средство для обработка объекта как массива
//     length: 2,                                              // для корректной обработки в объекте должны быть числовые свойства и length
// };

// console.log(cities.concat(obj));

// cities.forEach(console.log)                                 // forEach позволяет делать операции с каждыйм эл массива (напр вызвать в консоль)
// cities.forEach((item, index, array) => {
//     console.log(`${item} is on position ${index} in ${array}`)
// });

// cities.indexOf('London', 0);                                // ищет item, начиная с индекса from, и возвращает индекс
// cities.includes('London', 0);                               // ищет item, начиная с индекса from, и возвращает true





// let animals = [
//     {id: 1, name: 'dog', big: 2},
//     {id: 2, name: 'cat', big: 1},
//     {id: 3, name: 'tiger', big: 4},
//     {id: 4, name: 'wolf', big: 3},
// ];

// let animal = animals.find(item => item.id == 2);            // ищет элемент массива и выводит его
// console.log(animal.name);

// let bigAnimal = animals.filter(item => item.big > 2);       // фильтр возвращает массив
// console.log(bigAnimal.name)



// let scientists = ['Tesla', 'Newton', 'Einstien',];
// scientists.sort();                                          // возвращает отсортированный массив (но часто нужна функция, определяющая порядок сортировки)
// scientists.reverse();                                       // возвращает массив с обратным порядком элементов
// scientists.join(';');                                       // создаёт строку с указанным разделителем из элементов массива 
// let length = scientists.map(item => item.length);           // вызывает функцию для каждого элемента массива и возвращает массив результатов ее выполнения
// console.log(length);


// let names = 'Tesla, Newton, Einstien';
// let names2 = names.split(', ');                             // разбивает строку на массив по заданному разделителю
// let names3 = names.split('');                               // разбивает строку на массив по буквам

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let summa = numbers.reduce((sum,current)=>sum+current,0);   // ф-ия применяется по очереди ко всем эл массива и «переносит» результат на следующий вызов

// console.log(Array.isArray(numbers))                         // проверка на массив







// // b[1][0] 

// let a = "background-color";

// function upper(a) {
//     let b = a.split('');
//     let ind = b.indexOf('-');

//     b.splice(ind, 1);

//     b[ind] = b[ind].toUpperCase();
//     return b.join('')
// };

// console.log(upper(a))





// function camelize(str) {
//     return str
//       .split('-')
//       .map(
//         (word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)
//       )
//       .join('');
//   }




//   let b = a.split('-');

//   b[1] = b[1].split('');
//   b[1][0] = b[1][0].toUpperCase();
//   b[1]    = b[1].join(''); 

//  console.log(b.join(''));






// let arr = [11,2,37,44,25,6,67,58,19];

// function filterRange(arr, a, b) {


//     console.log(arr.filter(el => el >= a && el <= b ))
// };

// filterRange(arr, 2, 33);




// let arr = [5, 2, 1, -10, 8];

// arr.reverse(arr.sort())

// console.log(arr)




// let arr = ["HTML", "JavaScript", "CSS"];

// function sorted(arr) {
//     let arr2 = arr.slice();
//     return arr2.sort();
// };
// let arr3 = sorted(arr);

// sorted(arr);

// console.log(arr3);
// console.log(arr);





// function Calculator(str) {

//     this.method1 = function calculate(str) {

//         let arr = str.split(' ');

//         if(arr[1] === '+') {
//             return +arr[0] + +arr[2]
//         } else if(arr[1] === '-') {
//             return +arr[0] - +arr[2]
//         };
//     };

//     this.method2 = function calculate(str) {

//         let arr = str.split(' ');

//         if(arr[1] === '*') {
//             return +arr[0] * +arr[2]
//         } else if(arr[1] === '/') {
//             return +arr[0] / +arr[2]
//         } else if(arr[1] === '**') {
//             return (+arr[0]) ** +arr[2]
//         };
//     };

// };

// let calc = new Calculator;

// console.log(calc.method1('3 + 7'));



// function Calculator(str) {

//     this.method1 = function calculate(str) {

//         let arr = str.split(' ');
//         return (arr[1] === '+') ? +arr[0] + +arr[2] : +arr[0] - +arr[2]
//     };
// };

// let calc = new Calculator;

// console.log(calc.method1('3 + 7'));




// let users = [
//     { name: "Вася", age: 25 },
//     { name: "Петя", age: 30 },
//     { name: "Маша", age: 28 },
// ];

// // let names = users.map(function(users) {
// //     return users.name
// // });
// let names = users.map(a => a.name)

// console.log(names)




// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };

// let users = [ vasya, petya, masha ];

// let userMapped = users.map(users => ({
//     fullName: (`${users.name} ${users.surname}`),
//     id: users.id
// })
// );

// console.log(userMapped)





// function Calculator(str) {

//     this.method1 = function calculate(str) {

//         let arr = str.split(' ');
//         return (arr[1] === '+') ? +arr[0] + +arr[2] : +arr[0] - +arr[2]
//     };


// };

// let calc = new Calculator;

// console.log(calc.method1('3 + 7'));







// function Calculator() {
//     this.SN = 123;
//     this.methods = {
//         "-": (a, b) => a - b,
//         "+": (a, b) => a + b
//     };

//     this.showMetods = function () {
//         console.log(this.methods)
//     }

//     this.calculate = function (str) {
//         let split = str.split(" "),
//             a = +split[0],
//             op = split[1],
//             b = +split[2];

//         if (!this.methods[op] || isNaN(a) || isNaN(b)) {
//             return NaN;
//         }

//         return this.methods[op](a, b);
//     };

//     this.addMethod = function (op, func) {
//         this.methods[op] = func;
//     };
// }

// const calc = new Calculator();



// calc.addMethod("*", (a, b) => a * b);

// calc.showMetods()
// console.log(calc.calculate('4 * 7'))







// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };

// let arr = [vasya, petya, masha];

// function compareNumeric(a, b) {
//     if (a > b) return 1;
//     if (a == b) return 0;
//     if (a < b) return -1;
// };

// let sorted = arr.sort((a, b) => compareNumeric(a.age, b.age));

// average = (sorted.reduce((previousValue, sorted) => previousValue + sorted.age, 0) / sorted.length);

// console.log(sorted)
// console.log(average)







// let arr = [1, 2, 3, 4];

// function shuffle(array) {
//     let currentIndex = array.length, randomIndex;

//     while (currentIndex != 0) {

//         randomIndex = Math.floor(Math.random() * currentIndex);
//         currentIndex--;

//         [array[currentIndex], array[randomIndex]] = [
//             array[randomIndex], array[currentIndex]];
//     }

//     return array;
// };

// console.log(shuffle(arr))




// let strings = ["кришна", "кришна", "харе", "харе",
//     "харе", "харе", "кришна", "кришна", ":-O"
// ];


// function unique() {
//     let uniqueValues = [];

// case 1
// strings.forEach((item) => {
//     const isExist = uniqueValues.includes(item);
//     if (!isExist) uniqueValues.push(item);
// });

// case 2
// function onlyUnique(value, index, self) {
//     return self.indexOf(value) === index;
// }
// uniqueValues = strings.filter(onlyUnique);



//     return uniqueValues;
// };

// console.log(unique(strings));







// let range = {
//     from: 1,
//     to: 9,
// };

// range[Symbol.iterator] = function () {

//     return {
//         current: this.from,
//         last: this.to,

//         next() {
//             if (this.current <= this.last) {
//                 return { done: false, value: this.current++ };
//             } else {
//                 return { done: true };
//             };
//         }
//     };

// };

// for (let num of range) {
//     console.log(num); // 1, затем 2, 3, 4, 5
// }







// let user = {
//     name: 'Kirill',
//     age: 22,
// };

// console.log(Object.keys(user))                // возвращает массив ключей.
// console.log(Object.values(user))              // возвращает массив значений.
// console.log(Object.entries(user))             // возвращает массив пар [ключ, значение].

// for (let values of Object.values(user)) {     // перебора значений свойств
//     console.log(values)
// }




// let salaries = {
//     'John': 400,
//     'Adam': 500,
//     'Mark': 300,
// };

// let doubleSalaries = Object.fromEntries(Object.entries(salaries).map(([key, value]) => [key, value * 2]));

// function sumSalaries(obj) {
//     let sum = 0;
//     for (let values of Object.values(obj)) {
//         sum += values;
//     };
//     return sum
// };

// function count(obj) {

//     return Object.keys(obj).length
// };

// console.log(doubleSalaries);
// console.log(sumSalaries(salaries));
// console.log(count(salaries));





// let arr = ['Kirill', 'Panasiuk'];
// let [firstName, secondName] = arr;         // Деструктурирующее Присваивание записывает firstName=arr[0], surname=arr[1]
// let [firstName, surname] = "Kirill Panasiuk".split(' ');

// let arr2 = ['London', 'Madrid', 'Paris', 'Minsk'];
// let [city1, , city2] = arr2                 // Второй элемент массива пропускается, а третий присваивается переменной city1, оставшиеся элементы массива также пропускаются (так как для них нет переменных).
// console.log(city2)                          // Paris

// let user = {};

// [user.name, user.surname] = 'Kirill Panasiuk'.split(' ');
// console.log(user.name);                     // Kirill








// 5.11 ДАТА И ВРЕМЯ


// let now = new Date();
// console.log(now)

// let Jan01_1970 = new Date(0);                 //  0 - 01.01.1970
// let Jan02_1970 = new Date(24 * 3600 * 1000);
// let Dec31_1969 = new Date(-24 * 3600 * 1000);
// let date = new Date('1999-04-09');
// let date2 = new Date(1999, 3, 9)
// console.log(date2)


// let date = new Date(2022, 2, 23, 4, 7, 22,)

// date.getFullYear()
// date.getHours()                    // вернет местное время
// date.getUTCHours()                 // вернет UTC+0 время
// date.getTime()                     // возвращает таймстамп прошедших с 1 января 1970 года UTC+0.
// date.getTimezoneOffset()           // Возвращает разницу в минутах между UTC и местным часовым поясом:


// let date = new Date();

// date.setHours(0);                     // выводится сегодняшняя дата, но значение часа будет 0


// let start = new Date();
// for (let i = 0; i < 1000000; i++) {
//     let doIt = i * i ** i;
// }
// let end = new Date();
// let consumedTime = end - start;       // измерение затраченного времени
// console.log(`Was consumed ${consumedTime} miliseconds`)


// let ms = Date.parse('2012-01-26T13:51:50.417-07:00')    // обрабатывает строку в заданном формате и возвращает таймстамп
// let date = new Date( Date.parse('2012-01-26T13:51:50.417-07:00') );  // создать объект new Date из таймстампа



// БЕНЧМАРКИНГ

// function one(date1, date2) {
//     return date2 - date1;
// };
// function two(date1, date2) {
//     return date2.getTime() - date1.getTime();
// };

// function bench(f) {
//     let date1 = new Date(0);
//     let date2 = new Date();

//     let start = Date.now();
//     for (let i = 0; i < 100000; i++) f(date1, date2);
//     return Date.now() - start;
// }

// console.log('Время one: ' + bench(one) + 'мс');
// console.log('Время two: ' + bench(two) + 'мс');





// let date = new Date();
// function getDateAgo(date, daysAgo) {
//     date.setDate(date.getDate() - daysAgo)
//     return date.getDate()
// }
// console.log(getDateAgo(date, 2))


// let date = new Date();

// function getSecondsToday(date) {

//     let dayStart = date.setHours(0, [0], [0], [0], date);

//     let secondsFromStart = Date.now() - dayStart;

//     return Math.round(secondsFromStart / 1000)

// }

// console.log(getSecondsToday(date))







// 5.12 JSON

// let student = {
//     name: 'John',
//     age: 30,
//     isAdmin: false,
//     courses: ['html', 'css', 'js'],
//     wife: null
// };

// let json = JSON.stringify(student)
// console.log(json)


// let user = {
//     name: "Василий Иванович",
//     age: 35
// };

// let json = JSON.stringify(user);
// let rejson = JSON.parse(json);
// console.log(rejson)






// 6.1 РЕКУРСИЯ И СТЕК

// function pow(x, n) {
//     let result = 1;
//     for (let i = 0; i < n; i++) {
//         result *= x
//     }
//     return result
// };
// console.log(pow(2, 4))

// function pow(x, n) {
//     if (n == 1) {
//         return x
//     } else {
//         return x * pow(x, n - 1)
//     }
// };
// console.log(pow(2, 4))

// function pow(x, n) {
//     return (n == 1) ? x : (x * pow(x, n - 1))
// };
// console.log(pow(2, 4))








// МАСССССИИИИИИВВВВВЫЫЫЫЫЫ

// 1
// let str = "list-style-image";
// function camelize(str) {
//     return str
//         .split('-')
//         .map((item, index) => (index == 0) ? item : item[0].toUpperCase() + item.slice(1))
//         .join('')
// }
// console.log(camelize(str))


// 2
// let arr = [4, 45, 22, 66, 88, 17, 99, 34, 57, 77];
// function filterRange(arr, a, b) {
//     return filtered = arr.filter(item => (item >= a && item <= b));
// };
// console.log(filterRange(arr, 2, 30))


// 3
// let arr = [4, 45, 22, 66, 88, 17, 99, 34, 57, 77];
// function filterRangeInPlace(arr, a, b) {
// }


// 4
// let arr = [5, 2, 1, -10, 8];
// function reverse(arr) {
//     function compareNumeric(a, b) {
//         if (a < b) return 1;
//         if (a == b) return 0;
//         if (a > b) return -1;
//     }
//     return arr.sort(compareNumeric)
// }
// console.log(reverse(arr))

// 4 вариант 2
// let arr = [5, 2, 1, -10, 8];
// arr.sort((a, b) => b - a);
// console.log(arr);


// 5
// let arr = ["HTML", "JavaScript", "CSS"];
// let sorted = arr.slice(0).sort();
// console.log(sorted)


// 6
// function Calculator() {
//     this.methods = {
//         '+': (a, b) => a + b,
//         '-': (a, b) => a - b,
//     };
//     this.calculate = function (str) {
//         let arr = str.split(' '),
//             a = +arr[0],
//             b = +arr[2],
//             op = arr[1]
//         return this.methods[op](a, b)
//     };
//     this.addMethod = function (name, func) {
//         return this.methods[name] = func;
//     }
// };
// let calc = new Calculator;
// console.log(calc.calculate("3 + 7"))
// let powerCalc = new Calculator;
// powerCalc.addMethod("*", (a, b) => a * b);
// powerCalc.addMethod("/", (a, b) => a / b);
// powerCalc.addMethod("**", (a, b) => a ** b);
// let result = powerCalc.calculate("2 ** 3");
// console.log(result); 


// 7
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
// let users = [vasya, petya, masha];
// let names = users.map(items => items.name)
// console.log(names)


// 8
// let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
// let petya = { name: "Петя", surname: "Иванов", id: 2 };
// let masha = { name: "Маша", surname: "Петрова", id: 3 };
// let users = [vasya, petya, masha];
// let usersMapped = users.map(item => ({
//     fullName: item.name + ' ' + item.surname,
//     id: item.id
// }));
// console.log(usersMapped);


// 9
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 28 };
// let arr = [vasya, petya, masha];

// function sortByAge(arr) {
//     return arr.sort((a, b) => a.age > b.age ? 1 : -1);
// }
// console.log(sortByAge(arr))


// 10
// let arr = [1, 2, 3];
// function shufle(arr) {
//     return arr.sort(() => Math.random() - 0.5)
// }
// console.log(shufle(arr))


// 11
// let vasya = { name: "Вася", age: 25 };
// let petya = { name: "Петя", age: 30 };
// let masha = { name: "Маша", age: 29 };
// let arr = [vasya, petya, masha];
// function getAverageAge(arr) {
//     return Math.round((arr.reduce((sum, user) => sum + user.age, 0)) / (arr.length))
// }

// console.log(getAverageAge(arr))


// 12
// let strings = ["кришна", "кришна", "харе", "харе",
//     "харе", "харе", "кришна", "кришна", ":-O"
// ];
// function unique(arr) {
//     let uniqueArr = [];
//     for (let item of arr) {
//         if (uniqueArr.includes(item) == false) {
//             uniqueArr.push(item)
//         }
//     }
//     return uniqueArr;
// }
// console.log(unique(strings))





//  БАЗОВЫЕ

// 1
// function mul(a, b) {
//     return (a * b)
// };
// console.log(mul(5, 3))


// 2
// function FIO(name, surname, age) {
//     return `Hi, ${name} ${surname}, you are ${age}`
// };
// console.log(FIO('Kirill', 'Panasiuk', 22))


// 3
// function yourGender(gender) {
//     let genderUpper = gender.toUpperCase();
//     if (genderUpper == "M") {
//         return ('Your gender is Male')
//     } else if (genderUpper == "F") {
//         return ('Your gender is Female')
//     } else {
//         return ('Your gender is underfined')
//     }
// };
// console.log(yourGender("m"))


// 5
// let str = 'Вчера я смотрел кино. Кино было супер. Потом я лег спать. Я уснул'
// function getFirstWords(str) {
//     arr = str.split('.');
//     return arr.map((item) => {
//         it = item.indexOf(' ', 1);
//         return item.slice(0, it)
//     })
// }
// console.log(getFirstWords(str))


// 6
// function gritting(name) {
//     date = new Date();
//     hours = date.getHours();
//     switch (true) {
//         case (hours >= 0 && hours <= 5):
//             return (`Good night, ${name}`);
//         case (hours >= 6 && hours <= 12):
//             return (`Good morning, ${name}`);
//         case (hours >= 13 && hours <= 18):
//             return (`Good day, ${name}`);
//         case (hours >= 19 && hours <= 23):
//             return (`Good evning, ${name}`);
//     }
// }
// console.log(gritting("Kirill"))


// 7
// for (let i = 1; i <= 100; i++) {
// if (i >= 0 && i <= 17) {
//     output = `${i} -- child`
//     console.log(output)
// };
// if (i >= 18 && i <= 30) {
//     output = `${i} -- young`
//     console.log(output)
// }
// if (i >= 30 && i <= 55) {
//     output = `${i} -- adult`
//     console.log(output)
// }
// if (i >= 55) {
//     output = `${i} -- old`
//     console.log(output)
// }
// };


// 8
// function person(name, i) {
//     if (i >= 0 && i <= 17) {
//         output = `${name} is ${i}, he is child`
//         return output
//     };
//     if (i >= 18 && i <= 30) {
//         output = `${name} is ${i}, he is young`
//         return output
//     }
//     if (i >= 30 && i <= 55) {
//         output = `${name} is ${i}, he is adult`
//         return output
//     }
//     if (i >= 55) {
//         output = `${name} is ${i}, he is ld`
//         return output
//     }
// }
// console.log(person('Kirill', 22))



// МАССИВЫ

// 1
// let arr = [2, 4, 6, 8, 10, 11];
// function isEven(arr) {
//     let odd = [];
//     for (let items of arr) {
//         if (items % 2 != 0) {
//             odd.push(items)
//         }
//     };
//     return odd.length == 0 ? true : false
// }
// console.log(isEven(arr))


// 3
// let arr = [1, 2, 5, 12, 15, 21];
// function mulOfFive(arr) {
//     let mul5 = [];
//     for (let item of arr) {
//         if (item % 5 == 0) {
//             mul5.push(item)
//         }
//     }
//     return mul5
// };
// console.log(mulOfFive(arr))


// 4
// let arr = [1, 2, 5, 12, 15, 21];
// function average(arr) {
//     return Math.round((arr.reduce((sum, item) => sum + item, 0)) / (arr.length))
// };
// console.log(average(arr))


// 5
// let arr = [1, 2, 5, 12, 15, 21];
// function firstElToEnd(arr) {
//     arr.push(arr[0]);
//     arr.shift()
//     return arr
// }
// console.log(firstElToEnd(arr))


// 6
// let staff = [
//     { name: "Вася", age: 25 },
//     { name: "Петя", age: 30 },
//     { name: "Маша", age: 28 },
// ];
// function person(arr) {
//     return arr.map(item => `Имя: ${item.name}, возвраст: ${item.age}`)
// }
// console.log(person(staff))


