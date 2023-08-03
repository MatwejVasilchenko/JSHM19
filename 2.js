const people = [
    { name: 'John', surname: 'Doe', age: 32, occupation: 'programmer' },
    { name: 'Jane', surname: 'Lee', age: 26, occupation: 'teacher' },
    { name: 'Mike', surname: 'Watson', age: 42, occupation: 'engineer' },
    { name: 'Emily', surname: 'Brad', age: 29, occupation: 'designer' }
  ];
  
  const peopleWithIdAndFullName = people.map((person, index) => {
    const fullName = `${person.name} ${person.surname}`;
    return { id: index + 1, fullName };
  });
  
  console.log(peopleWithIdAndFullName);
  