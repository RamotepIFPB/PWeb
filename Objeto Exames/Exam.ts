import { Answer } from './Answer';
import { Weight } from './Weight';

export class Exam {
  private weight: Weight;
  private answer: Answer; // gabarito
  private answers: Answer[] = []; // alunos

  constructor(answer: Answer, weight: Weight) {
    this.answer = answer;
    this.weight = weight;
  }

  add(answer: Answer): void {
    this.answers.push(answer);
  }

  private grade(answer: Answer): number {
    let total = 0;

    for (const key in this.weight.values) {
      if (answer.values[key] === this.answer.values[key]) {
        total += this.weight.values[key];
      }
    }

    return total;
  }

  private allGrades(): number[] {
    return this.answers.map(a => this.grade(a));
  }

  avg(): number {
    const grades = this.allGrades();
    if (grades.length === 0) return 0;

    const sum = grades.reduce((acc, g) => acc + g, 0);
    return sum / grades.length;
  }

  min(): number[] {
    const grades = this.allGrades();
    if (grades.length === 0) return [];

    const min = Math.min(...grades);
    return grades.filter(g => g === min);
  }

  max(): number[] {
    const grades = this.allGrades();
    if (grades.length === 0) return [];

    const max = Math.max(...grades);
    return grades.filter(g => g === max);
  }

  lt(limit: number): number[] {
    return this.allGrades().filter(g => g < limit);
  }

  gt(limit: number): number[] {
    return this.allGrades().filter(g => g > limit);
  }
}