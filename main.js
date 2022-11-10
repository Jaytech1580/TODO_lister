// This lister function interface is built using Vanilla interface
let form = document.getElementById("addForm");
let itemList = document.getElementById('items');
let filter = document.getElementById('filter');

// Form submit eventListener
form.addEventListener('submit', addItem);

//itemList delete eventListener
itemList.addEventListener('click', removeItem);

//Filter Eventlistener
filter.addEventListener('keyup', filterItems);

// Add Item function
function addItem(e){
    e.preventDefault();

    // Get Input value 
    let newItem = document.getElementById('itam').value;

    // Creating li element
    let li = document.createElement('li');

    // Adding className to newElement
    li.className = 'list-group-item';

    // Adding textnode with input value
    li.appendChild(document.createTextNode(newItem));

    // delete button element
    let deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn delete';

    // Add textNode
    deleteBtn.appendChild(document.createTextNode('X'));

    // Append button to li
    li.appendChild(deleteBtn);

    //append li to List
    itemList.appendChild(li);

}

//Remove Item function
function removeItem(e){
    // To make the eventlistener fire up only when we click the delete button, we used if statement
    if(e.target.classList.contains('delete')){
        if(confirm('Are You Sure?')){
            let li = e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

// Filter Items
function filterItems(e){
    // Convert text to lowercase
    let text = e.target.value.toLowerCase();
    // Get li
    let items = itemList.getElementsByTagName('li');
    // convert items to arrays
    Array.from(items).forEach(function(item){
        var itemName = item.firstChild.textContent;
        if (itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';
        } else {
            item.style.display ='none';
        }
    });
}