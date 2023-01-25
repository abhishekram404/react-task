const person = {
  name: "Keshav",
  age: 18,
  hobbies: {
    technical: ["React", "TypeScript"],
    others: ["Travelling", "Eating"],
  },
};

export function deepCopy() {
  // deep copy
  const deepCopy = structuredClone(person);
  deepCopy.hobbies.technical.push("JavaScript"); // the original person object remains untouched
  console.log(
    "Deep Copy:  ",
    "Original: ",
    person.hobbies.technical,
    "Copy: ",
    deepCopy.hobbies.technical
  );
}
