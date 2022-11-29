console.log(2);

let item = localStorage.getItem("boards");

const boards = JSON.parse(item);

console.log(boards);
