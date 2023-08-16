function highestScore (students) {
  // Code disini
  if (students.length === 0) {
    return {};
  }
  let foxes = {};
  let wolves = {};
  let tigers = {};
  
  for (let i = 0; i < students.length; i++) {
    let student = students[i];
    if (student.class === 'foxes') {
      if (!foxes.score || student.score > foxes.score) {
        foxes = { name: student.name, score: student.score};
      }
    } else if (student.class === 'wolves') {
      if (!wolves.score || student.score > wolves.score) {
        wolves = { name: student.name, score: student.score};
      }
    } else if (student.class === 'tigers') {
      if (!tigers.score || student.score > tigers.score) {
        tigers = { name: student.name, score: student.score};
      }
    }
  }
  
  let result = {};
  if (foxes.score) {
    result.foxes = foxes;
  }
  if (wolves.score) {
    result.wolves = wolves;
  }
  if (tigers.score) {
    result.tigers = tigers;
  }
  
  return result;

}

// TEST CASE
console.log(highestScore([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

// {
//   foxes: { name: 'Dimitri', score: 90 },
//   wolves: { name: 'Alexei', score: 85 }
// }


console.log(highestScore([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

// {
//   foxes: { name: 'Alexander', score: 100 },
//   wolves: { name: 'Alisa', score: 76 },
//   tigers: { name: 'Viktor', score: 80 }
// }


console.log(highestScore([])); //{}