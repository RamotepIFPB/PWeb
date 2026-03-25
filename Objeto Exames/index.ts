import { Exam } from './Exam';
import { Answer } from './Answer';
import { Weight } from './Weight';

const weight = new Weight({ q1: 2, q2: 2, q3: 2, q4: 2, q5: 2 });

const answer = new Answer('Professor', {
  q1: 'a',
  q2: 'b',
  q3: 'a',
  q4: 'c',
  q5: 'd',
});

const exam = new Exam(answer, weight);

exam.add(
  new Answer('Alice', {
    q1: 'a',
    q2: 'b',
    q3: 'b',
    q4: 'b',
    q5: 'b',
  })
);

console.log(exam.avg()); // 4
console.log(exam.min()); // [4]
console.log(exam.max()); // [4]
console.log(exam.lt(7)); // [4]
console.log(exam.gt(7)); // []

exam.add(
  new Answer('Bob', {
    q1: 'c',
    q2: 'b',
    q3: 'a',
    q4: 'c',
    q5: 'd',
  })
);

console.log(exam.avg()); // 6
console.log(exam.min()); // [4]
console.log(exam.max()); // [8]
console.log(exam.lt(7)); // [4]
console.log(exam.gt(7)); // [8]