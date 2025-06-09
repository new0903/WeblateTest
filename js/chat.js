
//для нас
var list = document.querySelector('.chat-content');
var items = list.children;
var emptyListMessage = document.querySelector('.chat-message-button');
var newItemForm = document.querySelector('.chat-form');
var newItemTitle = newItemForm.querySelector('.chat-form-input');
var taskTemplate = document.querySelector('#message-template').content;
var newItemTemplate = taskTemplate.querySelector('.chat-message');
//для бота
var emptyListMessageBot = document.querySelector('.bot-message-button');
var taskTemplateBot = document.querySelector('#message-bot').content;
var newItemTemplateBot = taskTemplateBot.querySelector('.bot-message');





// функции позволяющие удолять и добовлять сообщения
var toggleEmptyListMessage = function () {
  if (items.length === 0) {
    emptyListMessage.classList.remove('hidden');
  } else {
    emptyListMessage.classList.add('hidden');
  }
};

var addCheckHandler = function (item) {
  var checkbox = item.querySelector('.chat-message-button');
  checkbox.addEventListener('click', function () {
    item.remove();
    toggleEmptyListMessage();
  });
};

var toggleEmptyListMessageBot = function () {
  if (items.length === 0) {
    emptyListMessageBot.classList.remove('hidden');
  } else {
    emptyListMessageBot.classList.add('hidden');
  }
};

var addCheckHandlerBot = function (item) {
  var checkbox = item.querySelector('.bot-message-button');
  checkbox.addEventListener('click', function () {
    item.remove();
    toggleEmptyListMessage();
  });
};

for (var i = 0; i < items.length; i++) {
  addCheckHandler(items[i]);
}

for (var i = 0; i < items.length; i++) {
  addCheckHandlerB(items[i]);
}


newItemForm.addEventListener('submit', function (evt) {
  evt.preventDefault();  
  var taskText = newItemTitle.value;
  // сообщения которые может выводить бот
  var messegeTextBot1 = "Привет";
  var messegeTextBot2 = "блабла бла1";
  
  var task = newItemTemplate.cloneNode(true);
  var taskDescription = task.querySelector('p');


  var taskbot = newItemTemplateBot.cloneNode(true);
  var taskDescriptionBot = taskbot.querySelector('p');
  
  taskDescription.textContent = taskText;
  addCheckHandler(task);
  list.appendChild(task);
  setInterval(()=>{
    //условие если мы напишем 1 то он выведет ПРИВЕТ
    if(taskText=="1")
    {
      //текст который мы вставим в сообщение
      taskDescriptionBot.textContent=messegeTextBot1;
      // эти две строки просто копируй
      addCheckHandlerBot(taskbot);
      list.appendChild(taskbot);
    }
    //дублируй это условие 
    /*
    добавь к условиям else{ и типа я нихуя не понял}
    */ 
  }
  ,1000);
  newItemTitle.value = "";
  toggleEmptyListMessage();
  
  
});