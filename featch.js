////////////// fetch //////////////

fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => {
    if (response.ok) {
      return response.json();
    } else {
      return Promise.reject("something went wrong!");
    }
  })
  .then(data => showData(data))
  .catch(error => console.log("error is", error));

let showData = data => {
  data.forEach(dataFromServer => {
    let p = document.createElement("table");
    p.textContent = dataFromServer.name;
    p.className = "style";
    document.querySelector("#td").appendChild(p);
  });
};

/////////////// JSON.stringify(obj) JSON.parse(obj) /////////////////////

const myObj = {
  name: "Skip",
  age: 2,
  favoriteFood: "Steak"
};

const myObjStr = JSON.stringify(myObj);

console.log(myObjStr);
// "{"name":"Skip","age":2,"favoriteFood":"Steak"}"

console.log(JSON.parse(myObjStr));
// Object {name:"Skip",age:2,favoriteFood:"Steak"}
