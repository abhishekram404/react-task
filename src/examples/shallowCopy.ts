const person = {
  name: "Keshav",
  age: 18,
  hobbies: {
    technical: ["React", "TypeScript"],
    others: ["Travelling", "Eating"],
  },
};
export function shallowCopy() {
  // shallow copy
  const shallowCopy = { ...person };
  shallowCopy.hobbies.technical.push("JavaScript"); // the original person object gets mutated
  console.log(
    "Shallow Copy:  ",
    "Original: ",
    person.hobbies.technical,
    "Copy: ",
    shallowCopy.hobbies.technical
  );
}
