function students (name, gender) {
    return (gender in name)
};

const people = {
    name: 'Sergey',
    age: 18,
    course: 1
};

console.log(students(people, 'gender'));
console.log(students(people, 'name'));

