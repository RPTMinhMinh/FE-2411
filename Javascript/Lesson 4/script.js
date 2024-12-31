// const person = {
//     id: 121212,
//     age: 13,
//     name: 'Nguyen Van A',
//     laguages: ['en','vi','fr'],
//     score: {
//         math: 4,
//         english: 5,
//         literature: 7
//     }
// }

// //tbc 3 mon cua sinh vien
// let tbc = 0;
// let sum = 0;
// for(let element in person['score']){
//     sum += person.score[element];
// }
// console.log(person.score.math);
// tbc = sum / 3;
// // console.log(tbc);

// console.log('Ho ten : ' + person.name);
// console.log('Tuoi : ' + person.age);
// console.log('Ngon ngu : ' + person.laguages);
// console.log('Hoc luc trung binh: ' + tbc);

// if(tbc <= 5){
//     console.log('trung binh');
// }else if(tbc > 5 && tbc < 8){
//     console.log('kha');
// }else{
//     console.log('gioi');
// }


//vd1
const students = [
    {id: 1, name: 'A', scores: {math: 7, english: 8, physical: 9}},
    {id: 2, name: 'B', scores: {math: 9, english: 6, physical: 7}},
    {id: 3, name: 'C', scores: {math: 7, english: 10, physical: 5}},
];

//truy vấn và tính tổng của từng sinh viên
let sum = 0;
let tbc = 0;
let count = 0;
for(let student of students){
    for(let score in student.scores){
        // console.log(student.scores[score])
        sum += student.scores[score];
        count++;
    }
    tbc = sum / count;
    console.log('sinh vien: ' + tbc);
}



