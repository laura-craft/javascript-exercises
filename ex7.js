const students = [
  { id: 0, name: "student zero", scores: 85, grade: null },
  { id: 1, name: "student one", scores: 65, grade: null },
  { id: 2, name: "student two", scores: 90, grade: null },
  { id: 3, name: "student three", scores: 99, grade: null },
  { id: 4, name: "student four", scores: 75, grade: null },
  { id: 5, name: "student five", scores: 66, grade: null },
  { id: 6, name: "student six", scores: 45, grade: null },
];
const word = "dent";
for (let index = 0; index < students.length; index++) {
  const student = students[index];
  if (student.name.includes(word)) {
    console.log(student.name);
  }
}

// const searchStudent = (name) => {
//   for (let index = 0; index < students.length; index++) {
//     const student = students[index];
//     // if the `id` matches the `student.id`
//     // then return that student
//     if (name === student.name) {
//       return student;
//     }
//   }
//   return "not found";
// };
