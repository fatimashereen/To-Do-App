
const itemForm = document.getElementById('itemForm');
const itemInput = document.getElementById('itemInput');
const itemList = document.querySelector('.item-list');
const clearBtn = document.getElementById('clear-list');
const feedback = document.querySelector('.feedback');

let itemData = [];

itemForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const textValue = itemInput.value;
    
    if(textValue === ''){
        showFeedback('please enter valid value');
    }
    else{
        addItem(textValue);
        itemInput.value = '';
        itemData.push(textValue);
        //console.log(itemData);

        handleItem(textValue);
    }
});

function showFeedback(text,action) {

  feedback.classList.add('showItem',`alert=${action}`);
  feedback.innerHTML = `<p>${text}</p>`

  setTimeout(function(){
    feedback.classList.remove('showItem',`alert=${action}`);  

  }, 3000);

}


function addItem (value) {
    const div = document.createElement('div');
    div.classList.add('item' , 'my-3');
    div.innerHTML =   `<h5 class="item-name text-capitalize">${value}</h5>
    <div class="item-icons">
        <a href="#" class="complete-item mx-2 item-icon"><i class="fa fa-check-circle"></i></a>
        <a href="#" class="edit-item mx-2 item-icon"><i class="fa fa-edit"></i></a>
        <a href="#" class="delete-item item-icon"><i class="fa fa-times-circle"></i></a>
       </div>`;
       itemList.appendChild(div);
}

function handleItem(textValue) {
const items = itemList.querySelectorAll('.item');
items.forEach(function(item){
  if(item.querySelector(".item-name").textContent === textValue) {
   item.querySelector('.complete-item').addEventListener('click' , function
     (){
    item.querySelector('.item-name').classList.toggle("completed");
    this.classList.toggle("visibility");
     });

   item.querySelector(".edit-item").addEventListener("click" ,function(){
     itemInput.value = textValue;
     itemList.removeChild(item);

     itemData =itemData.filter(function(item){
       return item !== textValue;
     });
   });

   item.querySelector(".delete-item").addEventListener("click", function(){
     itemList.removeChild(item);

     itemData = itemData.filter(function(item){
       return item !== textValue;
     });
     showFeedback("item delete" );
   });

 


  }
});
}

clearBtn.addEventListener("click" , function(){
  itemData = [];
  const items = items.querySelectorAll(".item");
  if (items.length > 0) {
    items.forEach(function(item){
      itemList.removeChild(item);
    });
  }

});



