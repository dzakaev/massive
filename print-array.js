//после задачи A выведи в консоль первый элемент массива (да-да, мы знаем, что он не существует, но ты все равно попробуй вывести и посмотри что появится в консоли);

console.log (a);

//после задачи B выведи в консоль сумму первого и третьего элеметов массива;

let b = [10, 20 , 30];

console.log (b[0] + b[2]);

//после задачи C выведи в консоль строку, в которой склеены все три элемента массива;

let c = ['home', 'work', 'school'];

console.log (c.join(''));

//после задачи D выведи в консоль такую строку: 1-й элемент массива - [тут сам элемент], а последний элемент - [тут сам элемент]

let d = ['home', 'work', 'school', 10, 20 , 30];

console.log (`1-й элемент массива - ${d[0]},а последний элемент - ${d[5]}`);

//после задачи E выведи в консоль пятый элемент текущего массива и последний элемент массива из задания B;

let classmates = ['vishan', 'baysangur', 'muhammad', 'khamzat', 'adam', 'abu-bakar', 'shamil', 'deni'];

console.log (classmates[4], b[2]);

//после задачи F выведи каждый элемент массива в отдельный console.log()

let f = [14, 'home', null, undefined, true, false];

console.log(f[0]),
console.log(f[1]),
console.log(f[2]),
console.log(f[3]),
console.log(f[4]),
console.log(f[5]);

//после задачи G выведи в консоль длину массива;

let g = [[],[],[],];

console.log(g.length);

//после задачи H выведи в консоль произведение второго элемента первого вложенного массива и третьего элемента второго вложенного массива.

let x = [[1,2,3], [4,5,6],];

console.log (x[0][1] * x[1][2]);
