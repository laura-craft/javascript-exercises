const students = [
  { id: 0, name: "student 0", scores: 85, grade: null },
  { id: 1, name: "student 1", scores: 65, grade: null },
  { id: 2, name: "student 2", scores: 90, grade: null },
  { id: 3, name: "student 3", scores: 99, grade: null },
  { id: 4, name: "student 4", scores: 75, grade: null },
  { id: 5, name: "student 5", scores: 66, grade: null },
  { id: 6, name: "student 6", scores: 45, grade: null },
];

const teachers = [
  { id: 15, name: "Teacher 15", students: [6, 4, 0] },
  { id: 16, name: "Teacher 16", students: [4, 3, 5] },
  { id: 17, name: "Teacher 17", students: [1, 2] },
  { id: 18, name: "Teacher 18", students: [6, 5, 4] },
  { id: 19, name: "Teacher 19", students: [0, 1] },
  { id: 20, name: "Teacher 20", students: [] },
];
//cross referencing data -  nested for Loop
for (let index = 0; index < teachers.length; index++) {
  const teacher = teachers[index];

  console.log(teacher.name);
  for (let j = 0; j < teacher.students.length; j++) {
    const studentId = teacher.students[j];
    const student = students.find((student) => studentId === student.id);

    console.log(student.name);
  }
}

// teachers.find((teacher) => {
//   teacher.name === teacher.id;
//   console.log(teacher.name);
//   student.filter((student)=> {

//   })
// });
