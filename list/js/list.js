const itemList = [];

const addBtn = document.querySelector ('#add');
addBtn.addEventListener ('click', addList);

function addList() {
   const item = document.querySelector('#item').value;
   if (item !== null) {
      itemList.push(item);
      document.querySelector('#item').value = "";
      document.querySelector('#item').focus();
   };
   
   const item1 = item.trim();
   if (item1 === '') {
      itemList.pop();
      alert ('항목을 입력하세요');
      item.focus();
      return;
   };
   showList();
};

function showList() {
   let list = "<ul>";
   for (let i=0; i<itemList.length; i++) {
      list += "<li>" + itemList[i] + '<span class="close" id=' + i + '>x</span></li>';
   };
   list += "</ul>";
   document.querySelector('#itemList').innerHTML = list;
   const remove = document.querySelectorAll('.close');
   for (let i=0; i<remove.length; i++) {
      remove[i].addEventListener('click', removeList);
   };
};

function removeList() {
   const id = this.getAttribute('id');
   itemList.splice(id, 1);
   showList();
};