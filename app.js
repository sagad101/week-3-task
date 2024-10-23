let students = require("./data.json");

let getAllStudents = (list) => {
  list.forEach((el) => console.log(el));
};
//getAllStudents(students);

let getFirstStudent = (list) => {
  return list[0];
};
//console.log(getFirstStudent(students));

let getLastStudent = (list) => {
  //TODO:
  console.log(list.length - 1 + 1);
};
//getLastStudent(students);

let getStudentById = (list, id) => {
  //TODO:
  for (let i = 0; i < list.length; i++) {
    if (list[i].id === id) {
      return list[i];
    }
  }
};
//console.log(getStudentById(students, 3));

let getStudentsByStage = (list, stage) => {
  //TODO:
  for (let i = 0; i < list.length; i++) {
    if (list[i].stage === stage) {
      return list[i];
    }
  }
};
//console.log(getStudentsByStage(students, `Grade 9`));

let addStudent = (list, id, name, stage, age) => {
  //TODO:
  let newStudent = {
    id: id,
    name: name,
    stage: stage,
    age: age,
  };
  list.push(newStudent);
  console.log(list);
  return list;
};
//console.log(addStudent(students, 22, `sama`, `Grade 30`, 50));

let removeStudentById = (list, id) => {
  //TODO:
  return list.filter((item) => item.id !== id);
};
//console.log(removeStudentById(students, 7));

let updateStudentById = (list, id, updatedData) => {
  //TODO:
  return list.map((item) => {
    if (item.id === id) {
      return {
        id: item.id,
        name: updatedData.name,
        stage: updatedData.stage,
        age: updatedData.age,
      };
    }
    return item;
  });
};
//console.log(updateStudentById(students, 7, { name: " Lee" }));

let getAverageAge = (list) => {
  //TODO:
  let avg = list.reduce((sum, item) => sum + item.age, 0);
  return avg / list.length;
};
//console.log(getAverageAge(students));

let getStudentsAboveAge = (list, age) => {
  //TODO:

  return list.filter((item) => item.age > age);
};
//console.log(getStudentsAboveAge(students, 12));

let getStudentsBelowAge = (list, age) => {
  //TODO:
  return list.filter((item) => item.age < age);
};
//console.log(getStudentsBelowAge(students, 17));

let getStudentByName = (list, name) => {
  //TODO:
  return list.filter((item) => item.name === name);
};
//console.log(getStudentByName(students, `Bob Brown`));

let sortStudentsByName = (list) => {
  //TODO:
  return list.sort((a, b) => a.name.localeCompare(b.name));
};

//console.log(sortStudentsByName(students));

let sortStudentsByAge = (list) => {
  //TODO:
  return list.sort((a, b) => a.age - b.age);
};
//console.log(sortStudentsByAge(students));

let filterStudentsByAge = (list, age) => {
  //TODO:
  return list.filter((item) => item.age === age);
};
//console.log(filterStudentsByAge(students, 14));

let filterStudentsByStage = (list, stage) => {
  //TODO:
  return list.filter((item) => item.stage === stage);
};
//console.log(filterStudentsByStage(students, `Grade 11`));

let countStudents = (list) => {
  //TODO:
  let count = list.length;
  return count;
};
//console.log(countStudents(students));

let countStudentsByStage = (list, stage) => {
  //TODO:
  return list.filter((item) => item.stage === stage).length;
};
//console.log(countStudentsByStage(students, `Grade 11`));

let incrementStudentAgeById = (list, id) => {
  //TODO:
  for (let i = 0; i < list.length; i++) {
    if (list[i].id === id) {
      list[i].age++;
      return list[i];
    }
  }
};

//console.log(incrementStudentAgeById(students, 8));

let decrementStudentAgeById = (list, id) => {
  //TODO:
  for (let i = 0; i < list.length; i++) {
    if (list[i].id === id) {
      list[i].age--;
      return list[i];
    }
  }
};
//console.log(decrementStudentAgeById(students, 8));

let getStudentsWithIdGreaterThan = (list, id) => {
  //TODO:
  return list.filter((item) => item.id > id);
};
//console.log(getStudentsWithIdGreaterThan(students, 15));

let getStudentsWithIdLessThan = (list, id) => {
  //TODO:
  return list.filter((item) => item.id > id);
};
//console.log(getStudentsWithIdLessThan(students,8));

let getStudentsInRangeOfIds = (list, startId, endId) => {
  //TODO:
  return list.filter((item) => item.id > startId && item.id < endId);
};
//console.log(getStudentsInRangeOfIds(students, 8, 15));

let getTotalAgeOfStudents = (list) => {
  //TODO:
  return list.reduce((sum, item) => sum + item.age, 0);
};
//console.log(getTotalAgeOfStudents(students));

let getAverageAgeByStage = (list, stage) => {
  //TODO:
  let studentStage = list
    .filter((item) => item.stage === stage)
    .reduce((sum, item) => sum + item.age, 0);
  return studentStage;
};
//console.log(getAverageAgeByStage(students, `Grade 11`));

let getYoungestStudent = (list) => {
  //TODO:
  let youngest = list[0];
  for (let i = 1; i < list.length; i++) {
    if (list[i].age < youngest.age) {
      youngest = list[i];
    }
  }
  return youngest;
};
//console.log(getYoungestStudent(students));

let getOldestStudent = (list) => {
  //TODO:
  let oldest = list[0];
  for (let i = 1; i < list.length; i++) {
    if (list[i].age > oldest.age) {
      oldest = list[i];
    }
  }
  return oldest;
};
//console.log(getOldestStudent(students));

let hasStudentWithName = (list, name) => {
  //TODO:
  return list.filter((item) => item.name === name);
};
//console.log(hasStudentWithName(students, "Jane Smith"));

let getNamesOfAllStudents = (list) => {
  //TODO:
  return list.map((item) => item.name);
};
//console.log(getNamesOfAllStudents(students));

let getAllStudentIds = (list) => {
  //TODO:
  return list.map((item) => item.id);
};
//console.log(getAllStudentIds(students));

let getAllStudentStages = (list) => {
  //TODO:
  return list.map((item) => item.stage);
};
// console.log(getAllStudentStages(students));

let getStudentsWithNamesStartingWith = (list, letter) => {
  //TODO:
  return list.filter((item) => {
    return item.name[0] === letter;
  });
};
//console.log(getStudentsWithNamesStartingWith(students, `J`));

let getStudentsWithNamesEndingWith = (list, letter) => {
  //TODO:
  return list.filter((item) => {
    return item.name[item.name.length - 1] === letter;
  });
};
//console.log(getStudentsWithNamesEndingWith(students, `n`));

let getStudentsWithNameLengthGreaterThan = (list, length) => {
  //TODO:
  return list.filter((item) => {
    return item.name.length > length;
  });
};
//console.log(getStudentsWithNameLengthGreaterThan(students, 5));

let getStudentsWithNameLengthLessThan = (list, length) => {
  //TODO:
  return list.filter((item) => {
    return item.name.length < length;
  });
};
// console.log(getStudentsWithNameLengthLessThan (students, 5));

let getAllStudentsSortedById = (list) => {
  //TODO:
  return list.sort((a, b) => a.id - b.id);
};
// console.log(getAllStudentsSortedById(students));

let reverseStudentList = (list) => {
  //TODO:
  return list.reverse();
};
// console.log(reverseStudentList(students));

let getRandomStudent = (list) => {
  //TODO:
  let ranIndex = Math.floor(Math.random() * list.length);
  return list[ranIndex];
};
//console.log(getRandomStudent(students));

let removeStudentsAboveAge = (list, age) => {
  //TODO:
  return list.filter((item) => item.age <= age);
};
//console.log(removeStudentsAboveAge(students, 15));

let removeStudentsBelowAge = (list, age) => {
  //TODO:
  return list.filter((item) => item.age >= age);
};
// console.log(removeStudentsBelowAge(students,15));

let getStudentsBetweenAges = (list, minAge, maxAge) => {
  //TODO:
  return list.filter((item) => {
    return item.age >= minAge && item.age <= maxAge;
  });
};
//console.log(getStudentsBetweenAges(students, 15, 16));

let countStudentsAboveAge = (list, age) => {
  //TODO:
  return list.filter((item) => item.age > age);
};
//console.log(countStudentsAboveAge(students, 16));

let countStudentsBelowAge = (list, age) => {
  //TODO:
  return list.filter((item) => item.age < age);
};
// console.log(countStudentsBelowAge(students,15));

let addMultipleStudents = (list, newStudents) => {
  //TODO:
  return list.push(...newStudents);
};
let newStudents = [
  {
    id: 40,
    name: "Bo Brown",
    stage: "Grade 9",
    age: 14,
  },
  {
    id: 50,
    name: "lee Davis",
    stage: "Grade 11",
    age: 16,
  },
  {
    id: 30,
    name: "rlie Wilson",
    stage: "Grade 10",
    age: 15,
  },
];
//console.log(addMultipleStudents(students, newStudents));
//console.log(students);

let removeMultipleStudentsById = (list, ids) => {
  //TODO:
  return list.filter((item) => !ids.includes(item.id));
};
//console.log(removeMultipleStudentsById(students, [3, 6]));

let updateMultipleStudentsById = (list, updatedData) => {
  //TODO:
  return list.map((item) => {
    let update = updatedData.find((U) => U.id === item.id);
    return update ? { ...item, ...update } : item;
  });
};
let updatedData = [{ id: 2, name: " Smith", stage: "Grade 11", age: 16 }];

//console.log(updateMultipleStudentsById(students, updatedData));

let isAllStudentsAboveAge = (list, age) => {
  //TODO:
  let filterStudents = list.filter((item) => item.age > age);
  return filterStudents.length === list.length;
};
//console.log(isAllStudentsAboveAge(students, 14));

let isAllStudentsBelowAge = (list, age) => {
  //TODO:
  let filterStudents = list.filter((item) => item.age < age);
  return filterStudents.length === list.length;
};
//console.log(isAllStudentsBelowAge(students, 15));

let hasStudentsInStage = (list, stage) => {
  //TODO:
  let hasStudents = list.filter((item) => item.stage === stage);
  return hasStudents.length > 0;
};
//console.log(hasStudentsInStage(students, `Grade 10`));

let getStudentNamesWithIds = (list, id) => {
  //TODO:
  let student = list.find((item) => item.id === id);
  return student.name;
};
//console.log(getStudentNamesWithIds(students, 6));
