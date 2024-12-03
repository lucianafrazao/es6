// - F1 to create new terminal
// - install babel: "npm i --save-dev @babel/core @babel/cli"
// - open package,json and add above devDependencies:
// "scripts": {
//     "build": "babel src -d dist"
// },
// - create src folder
// - install babel preset: "npm i --save-dev @babel/preset-env"
// - create file "babel.config.json", and write plugin code:
// {
//     "presets": ["@babel/preset-env"]
// }
// - add .gitignore file with node_modules and dist
// - npm run build 

// Array with sts names and grades
const students = [
    { name: 'Sarah', grade: 8 },
    { name: 'James', grade: 6 },
    { name: 'Sam', grade: 9 },
    { name: 'Lucy', grade: 10 },
    { name: 'Paul', grade: 4 },
    { name: 'Edward', grade: 7 },
    { name: 'Stephen', grade: 6 },
    { name: 'Lisa', grade: 5},
    { name: 'Carol', grade: 6.5 },
    { name: 'Chris', grade: 7.5 }
];

// Function to filter students with a 6 or higher grade
function filterPassGrade(students) {
    return students.filter(student => student.grade >= 6);
}

// Checking the function works
const PassingStudents = filterPassGrade(students);
console.log(PassingStudents);