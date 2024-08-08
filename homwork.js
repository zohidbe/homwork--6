// task 1
// function while1(A, B) {
//     let qoldiq = A;

//     do {
//         qoldiq -= B;
//     } while (qoldiq >= B);

//     return qoldiq;
// }

// console.log(while1(17, 5)); // Natija: 2

// task 2 --- A va B butun musbat sonlari berilgan (A > B). A uzunlikdagi kesmada B kesmadan nechta joylashtirish mumkinligini aniqlovchi dastur tuzing.
// function while2(A, B) {
//     let qoldiq = A;
//     let count = 0;

//     do {
//         qoldiq -= B;
//         count++;
//     } while (qoldiq >= B);

//     return count;
// }

// console.log(while2(17, 5)); // Natija: 3

// task 3
// function while3(N, K) {
//     let qoldiq = N;
//     let butunQism = 0;

//     do {
//         qoldiq -= K;
//         butunQism++;
//     } while (qoldiq >= K);

//     return {
//         butunQism: butunQism,
//         qoldiq: qoldiq
//     };
// }

// console.log(while3(17, 5)); // Natija: { butunQism: 3, qoldiq: 2 }

// task 4 
// function while4(n) {
//     let current = 1;

//     do {
//         if (current === n) return "3 ning darajasi";
//         current *= 3;
//     } while (current <= n);

//     return "3 ning darajasi emas";
// }

// console.log(while4(27)); // Natija: 3 ning darajasi
// console.log(while4(10)); // Natija: 3 ning darajasi emas

// task 5
// function while5(n) {
//     let k = 0;
//     let current = 1;

//     do {
//         if (current === n) return k;
//         current *= 2;
//         k++;
//     } while (current <= n);

//     return -1; // Agar n 2 ning darajasi bo'lmasa
// }

// console.log(while5(8)); // Natija: 3 (chunki 2^3 = 8)
// console.log(while5(12)); // Natija: -1 (chunki 12 2 ning darajasi emas)

