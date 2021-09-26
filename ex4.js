const students = [
  { id: 0, name: "student 0", scores: 85, grade: null },
  { id: 1, name: "student 1", scores: 65, grade: null },
  { id: 2, name: "student 2", scores: 90, grade: null },
  { id: 3, name: "student 3", scores: 99, grade: null },
  { id: 4, name: "student 4", scores: 75, grade: null },
  { id: 5, name: "student 5", scores: 66, grade: null },
  { id: 6, name: "student 6", scores: 45, grade: null },
];

const studentInfo = [];

//create a nested array (array of an array to find the id and name of each student)

for (let index = 0; index < 7; index++) {
  const student = students[index];
  studentInfo.push([student.id, student.name]);
  console.log("id:", students[index].id, "name:", students[index].name);
}
console.log(studentInfo);
