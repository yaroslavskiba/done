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

<h2>imposter.js</h2>

Создайте функцию которая находит самозванцев (imposter) в массиве игроков, у каждого игрока своя роль. Если самозванцев нет, верните *["there are no imposters here!"]*. Если в массиве только самозванцы, верните *["imposters are everywhere!"]*. В ином случае верните массив с именами самозванцев.

Примеры:

        ["Vasya","Jack"]  == solution([["Daniel","crewmate"],["Vasya","imposter"],["Jack","imposter"]])
        ["there are no imposters here!"]  == solution([["Harry","crewmate"]])
        ["imposters are everywhere!"]  == solution([["Jack","imposter"]])

<hr>

<h2>differenceOfSquares.js</h2>

Найдите разность между квадратом суммы и суммой квадратов первых N натуральных чисел. Квадрат суммы первых десяти натуральных чисел это: (1 + 2 + ... + 10)^2 = 55^2 = 3025 Сумма квадратов первых десяти натуральных чисел это: 1^2 + 2^2 + ... + 10^2 = 385 Таким образом, разность между квадратом суммы и суммой квадратов первых десяти натуральных чисел это 3025 - 385 = 2640.

        170  == solution(5)
        25164150  == solution(100)
        100100  == solution(25)
        0  == solution(1)

<hr>

<h2>PaginationHelper.js</h2>

For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.

The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant.

The following are some examples of how this class is used:

        var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
        helper.pageCount(); //should == 2
        helper.itemCount(); //should == 6
        helper.pageItemCount(0); //should == 4
        helper.pageItemCount(1); // last page - should == 2
        helper.pageItemCount(2); // should == -1 since the page is invalid

        // pageIndex takes an item index and returns the page that it belongs on
        helper.pageIndex(5); //should == 1 (zero based index)
        helper.pageIndex(2); //should == 0
        helper.pageIndex(20); //should == -1
        helper.pageIndex(-10); //should == -1

<hr>

<h2>MeanSquareError.js</h2>

Complete the function that:

accepts two integer arrays of equal length

compares the value each member in one array to the corresponding member in the other

squares the absolute value difference between those two values

and returns the average of those squared absolute value difference between each member pair.

Examples

        [1, 2, 3], [4, 5, 6]              -->   9   because (9 + 9 + 9) / 3
        [10, 20, 10, 2], [10, 25, 5, -2]  -->  16.5 because (0 + 25 + 25 + 16) / 4
        [-1, 0], [0, -1]                  -->   1   because (1 + 1) / 2

<hr>

<h2>progress.js</h2>

Реализуйте фунцию, которая запускает код, заполняющий элемент <progress></progress>`<progress>`

на один процент за 1 секунду. Через 100 секунд процесс должен остановится, так как достигнет максимума.

Начальное состояние

        <progress value="0" max="100"></progress>

Через одну секунду

        <progress value="1" max="100"></progress>

Для изменения значения value используйте метод setAttribute()

<hr>

<h2>buildTree.js</h2>

Двоичное дерево — иерархическая структура данных, в которой каждый узел имеет не более двух потомков (детей). Как правило, первый называется родительским узлом, а дети называются левым и правым наследниками.

В данном испытании мы будем использовать подвид двоичного дерева — двоичное дерево поиска. Правильное дерево не содержит повторяющихся ключей, и для каждого узла гарантируется, что в левом поддереве все значения меньше текущего, а в правом — больше.

Реализуйте класс, который реализует представление узла.

Класс должен содержать:

Геттер getKey() — возвращает ключ.

Геттеры getLeft(), getRight() — возвращают соответственно левого и правого ребёнка. Если ребёнок в узле отсутствует, геттер возвращает null.

Метод insert(key) — выполняет добавление узла, формируя правильное двоичное дерево.

        Примеры
        const tree = new Node();
        tree.insert(9);
        tree.insert(17);
        tree.insert(4);
        tree.insert(3);
        tree.insert(6);

        tree.getKey(); // 9
        tree.getLeft().getKey(); // 4
        tree.getRight().getKey(); // 17
        tree.getLeft().getLeft().getKey(); // 3
        tree.getLeft().getRight().getKey(); // 6

<hr>

<h2>treeSearch.js</h2>

Двоичное дерево поиска состоит из узлов, каждый из которых содержит значение ключа и два поддерева (левое и правое), которые в свою очередь также являются двоичными деревьями. Правильное дерево не содержит повторяющихся ключей, и для каждого узла гарантируется, что в левом поддереве все значения меньше текущего, а в правом — больше.

Реализуйте класс, который реализует представление узла. Конструктор класса принимает на вход значение ключа (число), и двух детей, которые в свою очередь также являются узлами. Дерево может быть создано пустым.

Класс должен содержать методы:

Геттер getKey() — возвращает ключ. Если дерево пустое, возвращает null.

Геттеры getLeft(), getRight() — возвращают соответственно левого и правого ребёнка. Если ребёнок в узле отсутствует, геттер возвращает null.

search(key) — выполняет поиск узла в правильном двоичном дереве по ключу и возвращает узел. Если узел не найден, возвращается null.

        Примеры
        const tree = new Node(9,
          new Node(4,
            new Node(3),
            new Node(6,
              new Node(5),
              new Node(7))),
          new Node(17,
            null,
            new Node(22,
              new Node(20),
              null)));

        const node = tree.search(6);
        node.getKey(); // 6
        node.getLeft().getKey(); // 5
        node.getRight().getKey(); // 7

        tree.search(35); // null
        tree.search(3).getLeft(); // null

<hr>

<h2>EqualSidesOfAnArray.js</h2>

You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N. If there is no index that would make this happen, return `-1`.

For example:

Let's say you are given the array `{1,2,3,4,3,2,1}`:
Your function will return the index 3, because at the 3rd position of the array, the sum of left side of the index ({1,2,3}) and the sum of the right side of the index (`{3,2,1})` both equal `6`.

Let's look at another one.
You are given the array `{1,100,50,-51,1,1}`:
Your function will return the index 1, because at the 1st position of the array, the sum of left side of the index ({1}) and the sum of the right side of the index (`{50,-51,1,1})` both equal `1`.

Last one:
You are given the array `{20,10,-80,10,10,15,35}`
At index 0 the left side is {}
The right side is `{10,-80,10,10,15,35}`
They both are equal to 0 when added. (Empty arrays are equal to 0 in this problem)
Index 0 is the place where the left side and right side are equal.

Note: Please remember that in most programming/scripting languages the index of an array starts at 0.

Input:
An integer array of length 0 < arr < 1000. The numbers in the array can be any integer positive or negative.

Output:
The lowest index N where the side to the left of N is equal to the side to the right of N. If you do not find an index that fits these rules, then you will return -1.

Note:
If you are given an array with multiple answers, return the lowest correct index.

<hr>

<h2>vectorClass.js</h2>

Create a Vector object that supports addition, subtraction, dot products, and norms. So, for example:

        var a = new Vector([1, 2, 3]);
        var b = new Vector([3, 4, 5]);
        var c = new Vector([5, 6, 7, 8]);

        a.add(b);      // should return a new Vector([4, 6, 8])
        a.subtract(b); // should return a new Vector([-2, -2, -2])
        a.dot(b);      // should return 1*3 + 2*4 + 3*5 = 26
        a.norm();      // should return sqrt(1^2 + 2^2 + 3^2) = sqrt(14)
        a.add(c);      // throws an error

If you try to add, subtract, or dot two vectors with different lengths, you must `throw an error!`

Also provide:

a toString method, so that using the vectors from above, `a.toString() === '(1,2,3)'` (in Python, this is a `__str__` method, so that `str(a) == '(1,2,3)')`
an equals method, to check that two vectors that have the same components are `equal`
Note: the test cases will utilize the user-provided `equals` method.

<hr>

<h2>tribonacciSequence.js</h2>

Well met with Fibonacci bigger brother, AKA Tribonacci.

As the name may already reveal, it works basically like a Fibonacci, but summing the last 3 (instead of 2) numbers of the sequence to generate the next. And, worse part of it, regrettably I won't get to hear non-native Italian speakers trying to pronounce it :(

So, if we are to start our Tribonacci sequence with [1, 1, 1] as a starting input (AKA signature), we have this sequence:

        [1, 1 ,1, 3, 5, 9, 17, 31, ...]
        
But what if we started with [0, 0, 1] as a signature? As starting with [0, 1] instead of [1, 1] basically shifts the common Fibonacci sequence by once place, you may be tempted to think that we would get the same sequence shifted by 2 places, but that is not the case and we would get:

        [0, 0, 1, 1, 2, 4, 7, 13, 24, ...]
        
Well, you may have guessed it by now, but to be clear: you need to create a fibonacci function that given a signature array/list, returns the first n elements - signature included of the so seeded sequence.

Signature will always contain 3 numbers; n will always be a non-negative number; if n == 0, then return an empty array (except in C return NULL) and be ready for anything else which is not clearly specified ;)

<hr>

<h2>validParentheses.js (валидация скобок)</h2> 

Given a string s containing just the characters `'(', ')', '{', '}', '[' and ']'`, determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

        Input: s = "()"
        Output: true

Example 2:

        Input: s = "()[]{}"
        Output: true

Example 3:

        Input: s = "(]"
        Output: false

<hr>

<h2>profileLookup.js</h2>

We have an array of objects representing different people in our contacts lists.

A lookUpProfile function that takes name and a property (prop) as arguments has been pre-written for you.

The function should check if name is an actual contact's firstName and the given property (prop) is a property of that contact.

If both are true, then return the "value" of that property.

If name does not correspond to any contacts then return the string No such contact.

If prop does not correspond to any valid properties of a contact found to match name then return the string No such property.

<br>


<h2>Scramblies</h2>

Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

  Notes:

Only lower case letters will be used (a-z). No punctuation or digits will be included.
Performance needs to be considered.

  Examples:

    scramble('rkqodlw', 'world') ==> True
    scramble('cedewaraaossoqqyt', 'codewars') ==> True
    scramble('katas', 'steak') ==> False

<br>

<h2>ReversePolishNotationCalculator</h2>

Your job is to create a calculator which evaluates expressions in Reverse Polish notation.

For example expression `5 1 2 + 4 * + 3 -` (which is equivalent to `5 + ((1 + 2) * 4) - 3` in normal notation) should evaluate to `14`.

For your convenience, the input is formatted such that a space is provided between every token.

Empty expression should evaluate to 0.

Valid operations are `+, -, *, /`.

You may assume that there won't be exceptional situations (like stack underflow or division by zero).

<br>

<h2>josephusPermutation</h2>

This problem takes its name by arguably the most important event in the life of the ancient historian Josephus: according to his tale, he and his 40 soldiers were trapped in a cave by the Romans during a siege.

Refusing to surrender to the enemy, they instead opted for mass suicide, with a twist: they formed a circle and proceeded to kill one man every three, until one last man was left (and that it was supposed to kill himself to end the act).

Well, Josephus and another man were the last two and, as we now know every detail of the story, you may have correctly guessed that they didn't exactly follow through the original idea.

You are now to create a function that returns a Josephus permutation, taking as parameters the initial array/list of items to be permuted as if they were in a circle and counted out every k places until none remained.

Tips and notes: it helps to start counting from 1 up to n, instead of the usual range 0 to n-1; k will always be >=1.

For example, with an `array=[1,2,3,4,5,6,7]` and `k=3`, the function should act this way.

    [1,2,3,4,5,6,7] - initial sequence
    [1,2,4,5,6,7] => 3 is counted out and goes into the result [3]
    [1,2,4,5,7] => 6 is counted out and goes into the result [3,6]
    [1,4,5,7] => 2 is counted out and goes into the result [3,6,2]
    [1,4,5] => 7 is counted out and goes into the result [3,6,2,7]
    [1,4] => 5 is counted out and goes into the result [3,6,2,7,5]
    [4] => 1 is counted out and goes into the result [3,6,2,7,5,1]
    [] => 4 is counted out and goes into the result [3,6,2,7,5,1,4]

So our final result is:

    [3,6,2,7,5,1,4]

<br>
