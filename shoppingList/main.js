const input = document.querySelector('.footer_input');
const addBtn = document.querySelector('.plus-btn');
const items = document.querySelector('.items');



function createList(text){
    const item_row = document.createElement('li');
    item_row.setAttribute('class', 'item-row');

    const item =  document.createElement('div');
    item.setAttribute('class', 'item');

    const name = document.createElement('span');
    name.setAttribute('class', 'item_name');
    name.innerText = text;


    const deleteBtn = document.createElement('button');
    deleteBtn.setAttribute('class', 'delete-btn');
    deleteBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    deleteBtn.addEventListener('click', () => {
        items.removeChild(item_row);
    })
    item.appendChild(name);
    item.appendChild(deleteBtn);
  

    item_row.appendChild(item);

    return item_row;
}



function addList(){
    const text = input.value;
    if(text === ' ')
    {
        input.focus();
        return;
    }
    console.log(text);
    const item = createList(text);
    items.appendChild(item);
    input.value=' ';
    input.focus();

}


addBtn.addEventListener('click', () => {
    addList(); 
});

input.addEventListener('keypress', () =>{
    //console.log('key');
    addList();
})