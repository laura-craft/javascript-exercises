const students = [
  { id: 0, name: "student 0", scores: 85, grade: null },
  { id: 1, name: "student 1", scores: 65, grade: null },
  { id: 2, name: "student 2", scores: 90, grade: null },
  { id: 3, name: "student 3", scores: 99, grade: null },
  { id: 4, name: "student 4", scores: 75, grade: null },
  { id: 5, name: "student 5", scores: 66, grade: null },
  { id: 6, name: "student 6", scores: 45, grade: null },
];
for (let index = 0; index < 7; index++) {
  const student = students[index];

  if (student.id !== 3) {
    student.scores += 5;
  }
  const score = student.scores;

  // here
  if (score >= 90 && score <= 100) {
    const letterGrade = "A";
    student.grade = letterGrade;
  }

  if (score >= 80 && score < 90) {
    const letterGrade = "B";
    student.grade = letterGrade;
  }

  if (score >= 70 && score < 80) {
    const letterGrade = "C";
    student.grade = letterGrade;
  }

  if (score >= 60 && score < 70) {
    // you write some code
    const letterGrade = "D";
    student.grade = letterGrade;
  }

  if (score >= 0 && score < 60) {
    const letterGrade = "F";
    student.grade = letterGrade;
  }
}
console.log("students", students);
