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
    });

    item.appendChild(name);
    item.appendChild(deleteBtn);
    item_row.appendChild(item);

    return item_row;
}



function addList(){
    //1 사용자가 입력한 텍스트를 받아옴 
    const text = input.value;
    if(text === '')
    {
        input.focus();
        return; 
    }
    console.log(text);

    // 2. 새로운 아이템을 만든 텍스트 + 삭제
    const item = createList(text);

    //3. items 컨테이너안에 새로 만든 아이템을 추가한다.
    items.appendChild(item);

    //3-새로 추가된 아이템으로 스크롤링

    item.scrollIntoView({block:'center'});
    //4. 인풋 초기화 한다

    input.value = '';
    input.focus();

}


addBtn.addEventListener('click', () => {
    addList(); 
});

input.addEventListener('keypress', (event) =>{
    console.log('key');
    //addList();

    if(event.key === 'Enter'){
        addList();
    } 
})