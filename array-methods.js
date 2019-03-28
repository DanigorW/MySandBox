//push() add to end, 
//Pop()take out the last one,
//unshift() add to the the start,
//shift() take out the first 

/////////////////////// forEach //////////////////////////////

let nums =[1,2,3,4,5,6,7,8,9];

let newArray = [];
nums.forEach((num) => {
  newArray.push(num * 2);
});

console.log(newArray);

function handlePosts() {
  var posts = [

      { id: 23, title: 'Daily JS News' },
      { id: 52, title: 'Code Refactor City' },
      { id: 105, title: 'The Brightest Ruby' }
  ];

posts.forEach((post) =>{
    let p = document.createElement("p");
    p.textContent = post.title;
    document.querySelector('#h1').appendChild(p);
 })
}

handlePosts();

/////////////////////// map //////////////////////////////

let newArray = nums.map((num) => {
     return num * 2
  });

const paints = [
    {color:'red'},
    {color:'blue'},
    {color:'green'}
];


function pluck(array, property) {
   let pluck = array.map((el) =>{
       return el[property]
   })
   return pluck
}
console.log(pluck(paints,'color'));



var images = [
    { height: '34px', width: '39px' },
    { height: '54px', width: '19px' },
    { height: '83px', width: '75px' },
  ];

var heights = images.map((img) => {
      return img.height;
  })

console.log(heights);

///////////////////// filter ////////////////////////////////

const todos = [{
    text: 'Order cat food',
    completed: false
}, {
    text: 'Clean kitchen',
    completed: true
}]

const getThingsToDo = function (todos) {
    return todos.filter(function (todo) {
        return !todo.completed
    })
}

var users = [
    { id: 1, admin: true },  
    { id: 2, admin: false },
    { id: 3, admin: false },
    { id: 4, admin: false },
    { id: 5, admin: true },
   ];
   
var filteredUsers = users.filter((user) =>{
      return user.admin === true 
   })

console.log(filteredUsers);

/////////////////////// sort ////////////////////////////////

const sortTodos = function (todos) {
    todos.sort(function (a, b) {
        if (!a.completed && b.completed) {
            return -1
        } else if (!b.completed && a.completed) {
            return 1
        } else {
            return 0
        }
    })
}

//////////////////////// findIndex + splice() use to delete items ////////////////////////

const deleteTodo = function (todos, todoText) {
    const index = todos.findIndex(function (todo) {
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })

    if (index > -1) {
        todos.splice(index, 1)
    }
}

/////////////////////// reduce //////////////////////////////

let numbers = [1,23,4,56];
  let newArray = numbers.reduce((acc,num) =>{
        return acc += num
  },0)

var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];

var totalDistance = trips.reduce((acc, trip)=>{
        return acc += trip.distance
},0);

console.log(totalDistance);

var desks = [
    { type: 'sitting' },
    { type: 'standing' },
    { type: 'sitting' },
    { type: 'sitting' },
    { type: 'standing' }
  ];
  
  var deskTypes = desks.reduce((acc, desk) =>{
    if(desk.type === 'sitting'){acc.sitting++}   
    if(desk.type === 'standing'){acc.standing++}
    return acc
  },{ sitting: 0, standing: 0 });

  console.log(deskTypes);

/////////////////////// includes /////////////////////////////

  let nums = [1,2,3,4,5,6,7,8,9]

  nums.includes(1) // true
  nums.includes('igor') // false

/////////////////////// ... spread  //////////////////////////

let colors = ['blue','green'];
let newColors = ['orange','black'];

let color1 = [...colors , ...newColors]
console.log(color1);

/////////////////////// destructuring //////////////////////////

const classes = [
    [ 'Chemistry', '9AM', 'Mr. Darnick' ],
    [ 'Physics', '10:15AM', 'Mrs. Lithun'],
    [ 'Math', '11:30AM', 'Mrs. Vitalis' ]
  ];
  
  const classesAsObject = classes => {
     return classes.map(([subject, time , teacher]) => {
        return {subject, time , teacher}
      })
      
}

///////////////// Object.assign() Object.entries() /////////////

let names = ['igor', 'lev', 'danit'];

let newNames = Object.assign({} ,names);
console.log(newNames);

let obj = {
    name:'igor',
    lastName: 'lev',
    age: 27
}

let objToArray = Object.entries(obj);
console.log(objToArray);

