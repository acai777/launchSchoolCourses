/*
Buggy Code 1:
Issue is scope. More specifically, morning, afternoon, and evening parameters inside the greet function is not recognized. Need to use keyword `this`. `name`, however, IS recognized inside the greet function. 
*/
// function Greeter(name) {
//     this.name = name;
//     this.morning = 'Good Morning';
//     this.afternoon = 'Good Afternoon';
//     this.evening = 'Good Evening';
//     this.greet = function(timeOfDay) {
//       let msg = '';
//       switch (timeOfDay) {
//         case 'morning':
//           msg += `${this.morning} ${name}`;
//           break;
//         case 'afternoon':
//           msg += `${this.afternoon} ${name}`;
//           break;
//         case 'evening':
//           msg += `${this.evening} ${name}`;
//           break;
//       }

//       console.log(msg);
//     }
// }

// let helloVictor = new Greeter('Victor');
// helloVictor.greet('morning');

// function createGreeter(name) {
//   return {
//     name: name,
//     morning: 'Good Morning',
//     afternoon: 'Good Afternoon',
//     evening: 'Good Evening',
//     greet: function(timeOfDay) {
//       let msg = '';
//       switch (timeOfDay) {
//         case 'morning':
//           msg += `${this.morning} ${name}`;
//           break;
//         case 'afternoon':
//           msg += `${this.afternoon} ${name}`;
//           break;
//         case 'evening':
//           msg += `${this.evening} ${name}`;
//           break;
//       }

//       console.log(msg);
//     },
//   };
// }
// let helloVictor = createGreeter('Victor');
// helloVictor.greet('morning');

// let item = {
//   name: 'Foo',
//   description: 'Fusce consequat dui est, semper.',
//   price: 50,
//   quantity: 100,
//   discount: function(percent) {
//     let discount = this.price * percent / 100;
//     let discountedPrice = this.price - discount;
    
//     return discountedPrice;
//   },
// };

// console.log(item.discount(20))   // should return 40
// console.log(item.discount(50))   // should return 25
// console.log(item.discount(25))  // should return 37.5

// function objectsEqual(obj1, obj2) {
//   for (let key in obj1) {
//     if (!obj2.hasOwnProperty(key)) return false; 
//     if (obj1[key] !== obj2[key]) return false;
//   }

//   return true; 
// }

// console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
// console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
// console.log(objectsEqual({}, {}));                                      // true
// console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false

// function createStudent(studentName, yearNum) {
//   return {
//     studentName: studentName, 
//     yearNum: yearNum,
//     courses: [],

//     info() {
//       console.log(`${this.studentName} is a ${this.yearNum} year student`);
//     },

//     addCourse(courseObj) {
//       this.courses.push(courseObj); 
//     },

//     listCourses() {
//       console.log(this.courses);
//     },

//     addNote(code, note) {
//       let courseObj = this.courses.filter(courseObj => courseObj.code === code)[0]; // filter returns an array. Need to access the course obj element.
//       courseObj.note = courseObj.note || [];
//       courseObj.note.push(note);
//     },

//     updateNote(code, note) {
//       let courseObj = this.courses.filter(courseObj => courseObj.code === code)[0];
//       courseObj.note = [note]; 
//     },

//     viewNotes() {
//       this.courses.forEach(courseObj => {
//         if (courseObj.hasOwnProperty("note")) {
//           console.log(`${courseObj.name}: ${courseObj.note.join("; ")}`);
//         }
//       });
//     },
//   }
// }

// let foo = createStudent('Foo', '1st');
// foo.info();
// // "Foo is a 1st year student"
// foo.listCourses();
// // [];
// foo.addCourse({ name: 'Math', code: 101 });
// foo.addCourse({ name: 'Advanced Math', code: 102 });
// foo.listCourses();
// // [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
// foo.addNote(101, 'Fun course');
// foo.addNote(101, 'Remember to study for algebra');
// foo.viewNotes();
// // "Math: Fun course; Remember to study for algebra"
// foo.addNote(102, 'Difficult subject');
// foo.viewNotes();
// // "Math: Fun course; Remember to study for algebra"
// // "Advance Math: Difficult subject"
// foo.updateNote(101, 'Fun course');
// foo.viewNotes();
// // "Math: Fun course"
// // "Advanced Math: Difficult subject"


const VALID_YEARS = ["1st", "2nd", "3rd", "4th", "5th"]
let school = {
  students: [], 

  addStudent(studentObj) {
    if (!VALID_YEARS.includes(studentObj.year)) {
      console.log("Invalid Year.");
    } else {
      this.students.push(studentObj);
      return studentObj;
    }
  },

  enrollStudent(studentObj, courseObj) {
    if (!this.students.includes(studentObj)) {
      addStudent(studentObj).addCourse(courseObj);
    }
  },

  addGrade(studentObj, course, grade) {
    studentObj.courses.filter(courseObj => courseObj.name === course)[0].grade = grade;
  },

  getReportCard(studentObj) {
    studentObj.courses.forEach(courseObj => {
      if (courseObj.hasOwnProperty("grade")) {
        console.log(`${courseObj.name}: ${courseObj.grade}`);
      } else {
        console.log(`${courseObj.name}: In progress`);
      }
    });
  },

  courseReport(course) {

    let studentsInThisCourse = this.students.filter(studentObj => studentObj.courses.some(courseObj => (courseObj.name === course)));

    if (studentsInThisCourse.length === 0 || studentsInThisCourse.some(studentObj => studentObj.courses.filter(courseObj => courseObj.name === course)[0].grade === undefined)) {
      console.log("undefined");
    } else {
      let allGrades = [];
      console.log(`=${course} Grades=`);
      this.students.forEach(studentObj => {
        let studentClass = studentObj.courses.filter(courseObj => courseObj.name === course)[0];

        if (studentClass) { // if not undefined
          console.log(`${studentObj.name}: ${studentClass.grade}`);
          allGrades.push(studentClass.grade);
        }
      });

      console.log("---");
      let courseAvg = (allGrades.reduce((acc, currVal) => acc + currVal, 0) / allGrades.length).toFixed(2); 

      console.log(`Course Average: ${courseAvg}`);
    }
  },
}

// Examples of created student objects with grades; methods on the objects are not shown here for brevity.
// The following are only showing the properties that aren't methods for the three objects
foo = {
  name: 'foo',
  year: '3rd',
  courses: [
    { name: 'Math', code: 101, grade: 95, },
    { name: 'Advanced Math', code: 102, grade: 90, },
    { name: 'Physics', code: 202, }
  ],
};

bar = {
  name: 'bar',
  year: '1st',
  courses: [
    { name: 'Math', code: 101, grade: 91, },
  ],
};

qux = {
  name: 'qux',
  year: '2nd',
  courses: [
    { name: 'Math', code: 101, grade: 93, },
    { name: 'Advanced Math', code: 102, grade: 90, },
   ],
};

school.addStudent(foo);
school.addStudent(bar);
school.addStudent(qux);
school.getReportCard(foo);
school.courseReport('Math');
school.courseReport('Advanced Math');
school.courseReport('Physics');

