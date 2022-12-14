# JS-learning
This directory dedicated to the study of JavaScript according to a [modern textbook of JS](https://learn.javascript.ru/).    
Here are the main tasks from this tutorial :)  
## 2. Basics of JavaScript  
<details><summary> <a href="https://learn.javascript.ru/hello-world"><b>#2.1 Hello, world!</b></a></summary>
<p>

**1.js: "Вызвать alert"**  

Создайте страницу, которая отобразит сообщение `«Я JavaScript!»`.  
  
</p>
</details>

<details><summary> <a href="https://learn.javascript.ru/variables"><b>#2.4 Variables</b></a></summary>
<p>

**1.js: "Работа с переменными"**  

1. Объявите две переменные: `admin` и `name`.  
2. Запишите строку `"Джон"` в переменную `name`.  
3. Скопируйте значение из переменной `name` в `admin`.  
4. Выведите на экран значение `admin`, используя функцию `alert` (должна показать «Джон»).  
  
</p>
</details>

<details><summary> <a href="https://learn.javascript.ru/alert-prompt-confirm"><b>#2.6 Alert, prompt, confirm</b></a></summary>
<p>

**1.js: "Простая страница"**  

Создайте страницу, которая спрашивает имя у пользователя и выводит его. 
  
</p>
</details>

<details><summary> <a href="https://learn.javascript.ru/ifelse"><b>#2.11 Logical operators</b></a></summary>
<p>

1. **1.js: "Проверка значения из диапазона"**  

Напишите условие `if` для проверки, что переменная `age` находится в диапазоне между `14` и `90` включительно.

«Включительно» означает, что значение переменной `age` может быть равно `14` или `90`. 

--------------------------------------------------------------------------------
 
2. **2.js: "Проверка значения вне диапазона"**  

Напишите условие `if` для проверки, что значение переменной `age` НЕ находится в диапазоне `14` и `90` включительно.

Напишите два варианта: первый с использованием оператора НЕ `!`, второй – без этого оператора.

--------------------------------------------------------------------------------
 
3. **checkingLog.js: "Проверка функций"** 

Проверка функций, описанных в скриптах `1.js` и `2.js`

--------------------------------------------------------------------------------
 
</p>
</details>

<details><summary> <a href="https://learn.javascript.ru/while-for"><b>#2.13 Cycles while for</b></a></summary>
<p>

1. **printEven.js: "Выведите чётные числа"**  

При помощи цикла `for` выведите чётные числа от `2` до `10`.

--------------------------------------------------------------------------------
 
2. **forToWhile.js: "Замените for на while"**  

Перепишите код, заменив цикл `for` на `while`, без изменения поведения цикла.

```javascript
    for (let i = 0; i < 3; i++) {
    alert( `number ${i}!` );
    }
```

--------------------------------------------------------------------------------
 
3. **incorrectInput.js, incorrectInput2.js: "Повторять цикл, пока ввод неверен"** 

Напишите цикл, который предлагает `prompt` ввести число, большее `100`. Если посетитель ввёл другое число – попросить ввести ещё раз, и так далее.

Цикл должен спрашивать число пока либо посетитель не введёт число, большее `100`, либо не нажмёт кнопку Отмена (ESC).

Предполагается, что посетитель вводит только числа. Предусматривать обработку нечисловых строк в этой задаче необязательно.

--------------------------------------------------------------------------------
 
4. **simpleNumbers.js: "Вывести простые числа"** 

Напишите код, который выводит все простые числа из интервала от `2` до `n`.

Для `n = 10` результат должен быть `2,3,5,7`.

P.S. Код также должен легко модифицироваться для любых других интервалов.

--------------------------------------------------------------------------------
 
</p>

</details>

<details><summary> <a href="https://learn.javascript.ru/switch"><b>#2.14 Construction Switch</b></a></summary>
<p>

1. **switchToFor.js: "Напишите "if", аналогичный "switch""**  

Напишите `if..else`, соответствующий следующему `switch`:

```javascript
    switch (browser) {
      case 'Edge':
      alert( "You've got the Edge!" );
      break;

    case 'Chrome':
    case 'Firefox':
    case 'Safari':
    case 'Opera':
      alert( 'Okay we support these browsers too' );
      break;

    default:
      alert( 'We hope that this page looks ok!' );
  }
```

--------------------------------------------------------------------------------
 
 2. **ifToSwitch.js: "Переписать условия "if" на "switch""** 

Перепишите код с использованием одной конструкции `switch`:

```javascript
    const number = +prompt('Введите число между 0 и 3', '');

    if (number === 0) {
      alert('Вы ввели число 0');
    }

    if (number === 1) {
      alert('Вы ввели число 1');
    }

    if (number === 2 || number === 3) {
      alert('Вы ввели число 2, а может и 3');
    }

```

--------------------------------------------------------------------------------
 
</p>
</details>

<details><summary> <a href="https://learn.javascript.ru/switch"><b>#2.15 Functions</b></a></summary>
<p>

1. **function_1.js: "Перепишите функцию, используя оператор '?' или '||'"**  

Следующая функция возвращает `true`, если параметр `age` больше `18`.  
В ином случае она задаёт вопрос `confirm` и возвращает его результат.  

```javascript
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}
```

Перепишите функцию, чтобы она делала то же самое, но без `if`, в одну строку.

Сделайте два варианта функции `checkAge`:

1. Используя оператор ?
2. Используя оператор ||

--------------------------------------------------------------------------------
 
 2. **min.js: "Функция min(a, b)"**  

Напишите функцию `min(a,b)`, которая возвращает меньшее из чисел `a` и `b`.

Пример вызовов:

```javascript
min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1
```

--------------------------------------------------------------------------------
 
 3. **function_1.js: "Функция pow(x,n)"**  

Напишите функцию `pow(x,n)`, которая возвращает `x` в степени `n`. Иначе говоря, умножает `x` на себя `n` раз и возвращает результат.

```javascript
pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
```

--------------------------------------------------------------------------------
 
</p>
</details>

<details><summary> <a href="https://learn.javascript.ru/switch"><b>#2.17 Arrow functions</b></a></summary>
<p>

1. **funcExpression_toArrow.js and funcExpression_toArrow_2.js: "Перепишите с использованием функции-стрелки"**  

Замените код `Function Expression` стрелочной функцией:

```javascript
function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Вы согласны?",
  function() { alert("Вы согласились."); },
  function() { alert("Вы отменили выполнение."); }
);
```

</p>
</details>

## 3. Code quolity

<details><summary> <a href="https://learn.javascript.ru/debugging-chrome"><b>#3.1 Debugging in the browser</b></a></summary>
<p>

1. **hello.js: ""**  



--------------------------------------------------------------------------------
 
</p>
</details>

<details><summary> <a href="https://learn.javascript.ru/debugging-chrome"><b>#3.5 Automatic testing with Motcha</b></a></summary>
<p>

1. **.js: ""**  



--------------------------------------------------------------------------------
 
</p>
</details>
