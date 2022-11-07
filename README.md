<h2>reverse.js</h2>

Реализуйте функцию, которая переворачивает строку задом наперед, используя рекурсию.

Например:

    reverse('str');    // rts
    reverse('hexlet'); // telxeh
    
Попробуйте решить эту задачу, используя рекурсивный процесс. Для этого вам понадобится метод slice().

<h3>Подсказки</h3>
Чтобы узнать длину строки, используйте свойство length:

    'welcome'.length; // 7
Чтобы получить подстроку из строки, используйте метод slice():

    'welcome'.slice(1, 4); // 'elc';
    
    
<hr>
    
    
<h2>reverseNum.js</h2>

Реализуйте функцию, которая переворачивает цифры в переданном числе и возвращает новое число.

Примеры:

    reverseInt(13); // 31
    reverseInt(-123); // -321
    reverseInt(8900); // 98
    
<h3>Подсказки</h3>

<hr>

<h2>fizzBuzz.js</h2>

Реализуйте функцию, которая выводит (console.log) в терминал числа в диапазоне от begin до end. При этом:

Если число делится без остатка на 3, то вместо него выводится слово Fizz
Если число делится без остатка на 5, то вместо него выводится слово Buzz
Если число делится без остатка и на 3, и на 5, то вместо числа выводится слово FizzBuzz
В остальных случаях выводится само число


Функция принимает два параметра (begin и end), определяющих начало и конец диапазона (включительно). Для простоты считаем, что эти параметры являются целыми числами больше нуля. Если диапазон пуст (в случае, когда begin > end), то функция просто ничего не печатает.

<h3>Вызов функции:</h3>

    fizzBuzz(11, 20);
Вывод в терминале:

    11
    Fizz
    13
    14
    FizzBuzz
    16
    17
    Fizz
    19
    Buzz
Это задание крайне часто задают на собеседованиях.

Длина строки str находится так: str.length
Вам может пригодиться функция Math.abs()

<hr>

<h2>fibonacci.js</h2>

Реализуйте функцию fib(). Функция вычисляет положительные числа Фибоначчи. Аргументом является порядковый номер числа.

<h3>Формула:</h3>

    f(0) = 0
    f(1) = 1
    f(n) = f(n-1) + f(n-2)
    fib(3);  // 2
    fib(5);  // 5
    fib(10); // 55

<hr>

<h2>isHappyNumber.js</h2>

Реализуйте функцию, которая должна вернуть true, если число счастливое, и false, если нет. Количество итераций процесса поиска необходимо ограничить числом 10.

<h3>Счастливые числа</h3>

Назовем счастливыми числами те, которые в результате ряда преобразований вида "сумма квадратов цифр" превратятся в единицу. Например:

        7   => 7^2 = 49,
        49  => 4^2 + 9^2 = 16 + 81 = 97,
        97  => 9^2 + 7^2 = 81 + 49 = 130,
        130 => 1^2 + 3^2 + 0^2 = 10,
        10  => 1^2 + 0^2 = 1.
        
Вывод: исходное число 7 - счастливое.

Подсказки
Воспользуйтесь вспомогательной функцией sumOfSquareDigits(), которая принимает на вход число и возвращает "сумму квадратов цифр" этого числа.
Длина строки str находится так: str.length

<hr>

<h2>invertCase.js</h2>

Реализуйте функцию, которая меняет в строке регистр каждой буквы на противоположный.

<h3>Примеры:</h3>

        invertCase('Hello, World!'); // hELLO, wORLD!
        invertCase('I loVe JS');     // i LOvE js
        
<h3>Подсказки</h3>

Чтобы узнать длину строки, используйте свойство length:

        'welcome'.length; // 7
        
Чтобы получить строку (или отдельный символ) в верхнем регистре, используйте метод toUpperCase():

        'foo'.toUpperCase(); // 'FOO';
        'f'.toUpperCase();   // 'F';
        
Чтобы получить строку (или отдельный символ) в нижнем регистре, используйте метод toLowerCase():

        'BAR'.toLowerCase(); // 'bar';
        'b'.toLowerCase();   // 'b';

<hr>

<h2>alphabet.js</h2>

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

        "a" = 1, "b" = 2, etc.

<h3>Example</h3>

        alphabetPosition("The sunset sets at twelve o' clock.")
        Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

<hr>

<h2>sumLow.js</h2>

Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

<h3>For example</h3>

when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

        [10, 343445353, 3453445, 3453545353453] should return 3453455.

<hr>

<h2>sortRectangles.js</h2>

In this kata you will be given a sequence of the dimensions of rectangles ( sequence with width and length ) and circles ( radius - just a number ).
Your task is to return a new sequence of dimensions, sorted ascending by area.

<h3>For example</h3>

        const array = [ [4.23, 6.43], 1.23, 3.444, [1.342, 3.212] ]; // [ rectangle, circle, circle, rectangle ]
        sortByArea(array) => [ [ 1.342, 3.212 ], 1.23, [ 4.23, 6.43 ], 3.444 ]
        
<hr>

<h2>detectPangram.js</h2>

A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

<hr>

<h2>square.js</h2>

Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer

<hr>

<h2>multiples.js</h2>

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. Additionally, if the number is negative, return 0 (for languages that do have them).

Note: If the number is a multiple of both 3 and 5, only count it once.

<hr>

<h2>whoLikes.js</h2>

You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display text as shown in the examples:

        []                                -->  "no one likes this"
        ["Peter"]                         -->  "Peter likes this"
        ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
        ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
        ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"

Note: For 4 or more names, the number in "and 2 others" simply increases.

<hr>

<h2>uniqueInOrder.js</h2>

Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

<h3>For example:</h3>

        uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
        uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
        uniqueInOrder([1,2,2,3,3])       == [1,2,3]

<hr>

<h2>playingWithDigits.js</h2>

Some numbers have funny properties. For example:

        89 --> 8¹ + 9² = 89 * 1

        695 --> 6² + 9³ + 5⁴= 1390 = 695 * 2

        46288 --> 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51

Given a positive integer n written as abcd... (a, b, c, d... being digits) and a positive integer p

we want to find a positive integer k, if it exists, such that the sum of the digits of n taken to the successive powers of p is equal to k * n.

<h3>In other words:</h3>

        Is there an integer k such as : (a ^ p + b ^ (p+1) + c ^(p+2) + d ^ (p+3) + ...) = n * k

If it is the case we will return k, if not return -1.

Note: n and p will always be given as strictly positive integers.

        digPow(89, 1) should return 1 since 8¹ + 9² = 89 = 89 * 1
        digPow(92, 1) should return -1 since there is no k such as 9¹ + 2² equals 92 * k
        digPow(695, 2) should return 2 since 6² + 9³ + 5⁴= 1390 = 695 * 2
        digPow(46288, 3) should return 51 since 4³ + 6⁴+ 2⁵ + 8⁶ + 8⁷ = 2360688 = 46288 * 51
        
<hr>

<h2>matrix.js</h2>

Операция умножения двух матриц А и В представляет собой вычисление результирующей матрицы С, где каждый элемент C(ij) равен сумме произведений элементов в соответствующей строке первой матрицы A(ik) и элементов в столбце второй матрицы B(kj).

Две матрицы можно перемножать только в том случае, если количество столбцов в первой матрице совпадает с количеством строк во второй матрице. Это значит, что первая матрица обязательно должна быть согласованной со второй матрицей. В результате операции умножения матрицы размера M×N на матрицу размером N×K является матрица размером M×K.

Реализуйте и экспортируйте по умолчанию функцию, которая принимает две матрицы и возвращает новую матрицу — результат их произведения.

        const matrixA = [[1, 2], [3, 2]];
        const matrixB = [[3, 2], [1, 1]];

        multiply(matrixA, matrixB);
        // [[5, 4], [11, 8]]

        const matrixC = [
          [2, 5],
          [6, 7],
          [1, 8],
        ];
        const matrixD = [
          [1, 2, 1],
          [0, 1, 0],
        ];

        multiply(matrixC, matrixD);
        // [
        //   [2, 9, 2],
        //   [6, 19, 6],
        //   [1, 10, 1],
        // ]
        
Подсказки :

[Описание алгоритма](https://www.math10.com/ru/vysshaya-matematika/matrix/umnozhenie-matric.html)
перемножения матриц.

[Демонстрация](http://matrixmultiplication.xyz) операции перемножения матриц.

<hr>

<h2>dcodeTheMorseCode.js</h2>

In this kata you have to write a simple Morse code decoder. While the Morse code is now mostly superseded by voice and digital data communication channels, it still has its use in some applications around the world.
The Morse code encodes every character as a sequence of "dots" and "dashes". For example, the letter A is coded as ·−, letter Q is coded as −−·−, and digit 1 is coded as ·−−−−. The Morse code is case-insensitive, traditionally capital letters are used. When the message is written in Morse code, a single space is used to separate the character codes and 3 spaces are used to separate words. For example, the message HEY JUDE in Morse code is ···· · −·−−   ·−−− ··− −·· ·.

NOTE: Extra spaces before or after the code have no meaning and should be ignored.

In addition to letters, digits and some punctuation, there are some special service codes, the most notorious of those is the international distress signal SOS (that was first issued by Titanic), that is coded as ···−−−···. These special codes are treated as single special characters, and usually are transmitted as separate words.

Your task is to implement a function that would take the morse code as input and return a decoded human-readable string.

For example:

        decodeMorse('.... . -.--   .--- ..- -.. .')
        //should return "HEY JUDE"

<i><b>NOTE</b></i>: For coding purposes you have to use ASCII characters . and -, not Unicode characters.

<hr>

<h2>yourOrderPlease.js</h2>

Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

<h3>Examples</h3>

        "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"
        "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"
        ""  -->  ""
        
<hr>

<h2>validate.js</h2>

<i>Валидация</i> - процесс проверки корректности данных. В вебе происходит всегда при отправке форм, например, регистрация на многих сайтах проверяет корректность введённого емейла, его уникальность (что такого пользователя ещё нет).

Каждый тип валидации в таких системах обычно представлен классом-валидатором, который принимает на вход опции и предоставляет интерфейс в виде функции validate(). Эта функция принимает на вход то, что проверяется (валидируется) и возвращает массив или объект с ошибками. Если объект пустой, значит ошибок нет.

Реализуйте и экспортируйте по умолчанию класс PasswordValidator, ориентируясь на тесты.

Этот валидатор поддерживает следующие опции:

minLength (по умолчанию 8) - минимальная длина пароля

containNumbers (по умолчанию true) - требование содержать хотя бы одну цифру

Опции передаются одним объектом в конструктор валидатора.

        const validator = new PasswordValidator({ containNumbers: false });
        validator.validate('qwertyui'); // {}
        validator.validate('qwerty'); // { minLength: 'too small' }

<hr>

<h2>file.js</h2>

Реализуйте и экспортируйте функцию `move`, которая асинхронно перемещает файл из одного места в другое. Ее параметры:

Путь до файла исходника

Путь по которому нужно копировать файл

Колбек, у которого единственный аргумент — ошибка.

Алгоритм работы функции следующий:

        Читаем исходный файл
        Создаём новый файл и записываем туда данные исходного файла (это важно сделать до попытки удаления исходного файла!)
        Удаляем исходный файл
        
Реальная функция move устроена не так. Если исходник и приемник находятся на одном устройстве, то копирования не происходит, меняются лишь указатели в фс

        import { move } from './file.js';

        move('/opt/myfile', '/tmp/newfile', (error) => {
          if (error) {
            console.log('oops');
            return;
          }
          console.log('yes!');
        });

**Подсказки**

*fs.unlink* - удаление файла

*fs.readFile* - чтение файла

*fs.writeFile* - запись в файл

<hr>
