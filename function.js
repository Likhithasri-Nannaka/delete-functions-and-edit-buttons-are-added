var header = document.getElementById("main-header");
header.style.borderBottom = "solid 3px #000";
var headerTitle = document.getElementById("header-title");
headerTitle.innerText = "Item List";
headerTitle.textContent = "Item Lister";
var item = document.getElementsByClassName("list-group-item");
for (var i = 0; i < item.length; i++) {
  item[i].style.fontWeight = "bold";
  item[i].style.backgroundColor = "#f4f4f4";
var form = document.getElementById("addForm");
var itemList = document.getElementById("items");

// Form submit event
form.addEventListener("submit", addItem);
// Delete event
itemList.addEventListener("click", removeItem);
//Edit event
itemList.addEventListener("click", editItem);

// Add item
function addItem(e) {
  e.preventDefault();

  // Get input value
  var newItem = document.getElementById("item").value;

  // Create new li element
  var li = document.createElement("li");
  // Add class
  li.className = "list-group-item";
  // Add text node with input value
  li.appendChild(document.createTextNode(newItem));

  // Create del button element
  var deleteBtn = document.createElement("button");
  var editBtn = document.createElement("button");

  // Add classes to del button
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";

  //Add classes to edit button
  editBtn.className = "btn btn-success btn-sm float-right edit";

  // Append text node
  deleteBtn.appendChild(document.createTextNode("Delete"));
  editBtn.appendChild(document.createTextNode("Edit"));

  // Append button to li
  li.appendChild(deleteBtn);
  li.appendChild(editBtn);

  // Append li to list
  itemList.appendChild(li);
}
//item[2].style.backgroundColor = "green";
var li = document.getElementsByTagName("li");
//li[1].style.backgroundColor = "red";
//li[2].style.display = "none";
var odd = document.querySelectorAll("li:nth-child(odd)");
var even = document.querySelectorAll("li:nth-child(even)");
even[0].style.color = "green";
for (var i = 0; i < odd.length; i++) {
  odd[i].style.backgroundColor = "#90ee90";
  even[i].style.backgroundColor = "#ffcccb";

// Remove item
function removeItem(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Do you want to delete")) {
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// edit item
function editItem(e) {
  if (e.target.classList.contains("edit")) {
    var itemValue = e.target.value;
    itemValue.contentEditable = true;
  }
}
//manipulating the DOM
var itemList = document.querySelector("#items");
itemList.parentElement.style.backgroundColor = "#f4f4f4";
itemList.childNodes[3].textContent = "Item 2";
itemList.childNodes[5].textContent = "Item 3";
itemList.firstElementChild.textContent = "Item 1";
itemList.firstChild.textContent = "Note : Add atleast 2 items";
itemList.lastElementChild.textContent = "Item 4";