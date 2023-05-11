i// function getData() {
//   axios
//     .get("https://api.vschool.io/serenity2/todo")
//     .then((res) => listData(res.data))
//     .catch((err) => console.log(err));
// }
// function listData(data)
// document.getElementById("todo-list").innerHTML = "";
//   for (let i = 0; i < data.length; i++) 
//     const h3 = document.createElement("h3");
//     h3.textContent = data[i].title;
//     const img = document.createElement("img");
//     img.src = data[i].imgUrl;
//     const h4 = document.createElement("h4");
//     h4.textContent = data[i].description;
//     const number = document.createElement("number");
//     number.textContent = data[i].price;
//     const input = document.createElement("input");
//     input.type = "checkbox";
//     const button = document.createElement('button')
//    button.textContent = "X"
//     button.setAttribute("id", "deleteButton")
//     document.getElementById('todo-list').appendChild(h3)
//   document.getElementById('todo-list').appendChild(img)
//   document.getElementById('todo-list').appendChild(h4)
//   document.getElementById('todo-list').appendChild(number)
//   document.getElementById('todo-list').appendChild(input)
//   document.getElementById('todo-list').appendChild(button)
   
//   }

      
  
// }


// getData();




// deleteButton.addEventListener("click", function (e) {
//  axios.delete("https://api.vschool.io/serenity2/todo/" + data[i]._id)
//   .then (res => getData(res))
//   .catch (err => console.log (err))
// let listData = e.currentTarget.parentNode
// listData.style.dispaly = "none"
// document.getElementById('todoForm').appendChild(deleteButton)
// })

//   axios
//     .post("https://api.vschool.io/serenity2/todo", newTodo)
//     .then((res) => getData(res))
//     .catch((err) => console.log(err));

 



// const todoForm = document["todo-form"];

// todoForm.addEventListener("submit", function (e) {
//   e.preventDefault();

  
//   const newTodo = {
//     title: todoForm.title.value,
//     imgUrl: todoForm.imgUrl.value,
//     price: todoForm.price.value,
//     description: todoForm.description.value,
//   };

//   todoForm.title.value = "";
//   todoForm.imgUrl.value = URL;
//   todoForm.price.value = Number;
//   todoForm.description.value = "";

//   axios
//     .post("https://api.vschool.io/serenity2/todo", newTodo)
//     .then((res) => getData(res))
//     .catch((err) => console.log(err));

 


// });
// deleteBttn.addEventListener("click",function(){
    //   axios.delete("https://api.vschool.io/serenity2/todo" + data[i]._id)
    //   .then (res => getData())
    //   .catch (err => console.log (err))
    //   console.log(deleteBttn, "click")
    // })









git 

function listData(data) {
// for (let i = 0; i < data.length; i++){
//   const checkbox = document.createElement('input')
//   checkbox.setAttribute("type", "checkbox")
//   if(data[i].completed === true){
//     checkbox.checked ="checked"
//     checkbox.addEventListener("change", function(){
//       axios.put("https://api.vschool.io/serenity2/todo" + data[i]._id,{completed: false})
//       .then(res => getData())
//       .catch(err => console.log(err))
//     })
//   }else {
//     checkbox.addEventListener
//   }
// }


// }
  






function getData() {
  axios.get("https://api.vschool.io/serenity2/todo").then((response) => {
    const todos = response.data;
    const todoListContainer = document.getElementById("todoList");
    todos.forEach((todo) => {
      const todoItem = document.createElement("div");

      // Apply strikethrough style if the todo is complete

      if (todo.completed) {
        todoItem.style.textDecoration = "line-through";
      }
      // Display title, price, description, and image
      todoItem.innerHTML = `
        <h3>${todo.title}</h3>
        <p>Price: ${todo.price}</p>
        <p>Description: ${todo.description}</p>
        ${todo.imgUrl ? `<img src="${todo.imgUrl}" alt="Todo Image">` : ""}
        <input type="checkbox" ${todo.completed ? "checked" : ""}>
        <button class="delete-btn">X</button>
        <button class="edit-btn">Edit</button>
        
        `;
      todoListContainer.appendChild(todoItem);
    });
  })
  .catch(error =>{
    console.log("Error fectching data", error);
  });
  const todoForm = document.getElementById("todoForm");
  todoForm.addEventListener("submit", e => {
    e.preventDefault();
    const title = document.getElementById("lists").value;
    const price = document.getElementById("price").value;
  const description = document.getElementById("des").value;
  const imgUrl = document.getElementById("img").value;
  


  const newTodo = {
    title,
    price,
    description,
    imgUrl
  };
  axios.post("https://api.vschool.io/serenity2/todo", newTodo)
  .then(reponse => {
    // Handle the successful creation of the new todo
    console.log("New to created", reponse.data);
     
    
    // Clear the form fields
    todoForm.reset();
  })
  .catch(error => {
    console.log("Error creating new todo", error);
    })
  })
  document.addEventListener("click", e => {
if(e.target.classList.cocntians("delete-btn")){
  const todoItem = e.target.parentElement;
    const todoId = todoItem.dataset.id; //  each todo item has a unique ID


    axios.delete(`https://api.vschool.io/serenity2/todo/${todoId}`)
    .then(response => {
      // Handle the successful deletion of the todo
      console.log("Todo deleted:", response.data);
              // Remove the todo item from the DOM
    })
}
  })
    
  

}
