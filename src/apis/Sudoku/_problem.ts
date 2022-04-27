const server = 'http://sudoku/popomon.club';

interface Problem {}

// 문제 불러오기
export function getProblem(problem: Problem) {
  if (problem) {
    console.log('특정 문제 불러오기');
  } else {
    console.log('새로운 문제 불러오기');
  }
}
