//grabs data from api

function getData() {
  axios.get("https://api.vschool.io/serenitysmith/todo")
      .then(res => listData(res.data))
      .catch(err => console.log(err))
}
      
// Lists data on the Dom
function listData(data) {
  clearList()
// ittirates over list creates buttons, inputs etc
  for (let i = 0; i < data.length; i++) {
      // creating check box
      const checkbox = document.createElement('input')
      checkbox.setAttribute("type", "checkbox")
     
// handles the behavior of a checkbox element based on the completed property of an item in the data array.
      if (data[i].completed === true) {
          checkbox.checked = "checked"
          //event listener is attached to the checkbox. When the checkbox is changed, an Axios PUT request is made to update the corresponding item's 
          checkbox.addEventListener("change", function() {
              axios.put("https://api.vschool.io/serenitysmith/todo/" + data[i]._id, {completed: false})
              .then (res => getData())
              .catch (err => console.log(err))
          })
      } else {
        //  if the completed property of the current item is false, the checkbox will not be initially checked. The change event listener is still attached to the checkbox, but this time the Axios PUT request updates the completed property to true in the API.
          checkbox.addEventListener("change", function() {
              axios.put("https://api.vschool.io/serenitysmith/todo/" + data[i]._id, {completed: true})
              .then (res => getData())
              .catch (err => console.log(err))
          })
      }
// creating img element
      const img = document.createElement('img')
      img.src = data[i].imgUrl 
      img.setAttribute("id", "pic")   
      const h2 = document.createElement('h2')
      h2.textContent = data[i].title
// creating h4 element price and descriotion
      const h4 = document.createElement('h4')
      h4.textContent = data[i].description
     


      const priceText = document.createElement('h4')
      priceText.textContent = data[i].price
      
// if check box checked, strikes a line through
      if (data[i].completed === true) {
          h2.style.setProperty("text-decoration", "line-through")
          h4.style.setProperty("text-decoration", "line-through")
          priceText.style.setProperty("text-decoration", "line-through")
          h2.style.setProperty("color", "darkgray")
          h4.style.setProperty("color", "darkgray")
          priceText.style.setProperty("color", "darkgray")
      }

    
// delete button
      const delButton = document.createElement('button')
      delButton.textContent = "X"
      delButton.setAttribute("id", "deleteButton")
// delete button event listener
      delButton.addEventListener("click", function () {
          axios.delete("https://api.vschool.io/serenitysmith/todo/" + data[i]._id)
          .then (res => getData())
          .catch (err => console.log (err))
      })
      
      // appending our elements to the list
      document.getElementById('todo-list').appendChild(checkbox)
      document.getElementById('todo-list').appendChild(img)
      document.getElementById('todo-list').appendChild(h2)
      document.getElementById('todo-list').appendChild(priceText)
      document.getElementById('todo-list').appendChild(h4)
      document.getElementById('todo-list').appendChild(delButton)

      

  }
}
//clear list function so we dont get same item over and over
function clearList() {
  const el = document.getElementById('todo-list')
  while (el.firstChild) {
      el.removeChild(el.firstChild)
  }
}

getData()

//posting data to the data base

const todoForm = document.todoForm
//submit button event listener
todoForm.addEventListener("submit", function(e) {
  e.preventDefault()

  const newTodo = {
      title: todoForm.title.value,
      description: todoForm.desc.value,
      price: todoForm.price.value,
      imgUrl: todoForm.imgURL.value
  }
// setting the value types of each input 
  todoForm.title.value = ""
  todoForm.desc.value = ""
  todoForm.price.value = Number
  todoForm.imgURL.value = Image


  // making the post request to the api
  axios.post("https://api.vschool.io/serenitysmith/todo", newTodo)
      .then(res => getData())
      .catch(err => console.log(err))
  
})