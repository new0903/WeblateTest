// анимация
function changeDisplay() {
  let lexs = document.querySelectorAll(".block");
  for (let el of lexs) {
    el.style.opacity = 0;
  }
  setTimeout(function () {
    for (let el of lexs) {
      el.style = "display:inline;"
      el.style.opacity = 1;
    }
  }, 3000)
}
// Контейнер для карточек
let pool = document.querySelector('.pool');

// Получаем шаблон карточки
let template = document.querySelector('#element-template').content;
let element = template.querySelector('div');

// Клонируем и наполняем элементы в цикле

for (let i = 1; i <= 3; i++) {

  let clonedElement = element.cloneNode(true);
  clonedElement.children[0].textContent = i;
  pool.appendChild(clonedElement);
}


let els = document.querySelectorAll(".el");
let txt = document.querySelector('.text');
txt.style = "margin-top: 20px";
function block() {
  for (let el of els) {
    el.style.opacity = 0;
  }
  setTimeout(function () {
    for (let el of els) {
      el.style = "display:block;"
      el.style.opacity = 1;
    }
  }, 500)
  txt.textContent = `Элемент block Элемент показывается как блочный. Применение этого значения для встроенных элементов, например тега ,
   заставляет его вести подобно блокам — происходит перенос строк в начале и в конце содержимого.`;
  return false;
};


function inline() {
  txt.textContent = "";
  for (let el of els) {
    el.style.opacity = 0;
  }
  setTimeout(function () {
    for (let el of els) {
      el.style = "display:inline;"
      el.style.opacity = 1;
    }
  }, 500)
  txt.textContent = `Элемент inline Элемент отображается как встроенный. 
  Использование блочных тегов, таких как div и p, автоматически создает перенос и показывает содержимое этих тегов с новой строки. 
  Значение inline отменяет эту особенность, поэтому содержимое блочных элементов начинается с того места, где окончился предыдущий элемент.`;
  return false;
};


function inline_block() {
  txt.textContent = "";
  for (let el of els) {
    el.style.opacity = 0;
  }
  setTimeout(function () {
    for (let el of els) {
      el.style = "display:inline-block;"
      el.style.opacity = 1;
    }
  }, 500)
  txt.textContent = `Элемент inline-block Это значение генерирует блочный элемент, который обтекается другими элементами веб-страницы подобно встроенному элементу. Фактически такой элемент по своему действию похож на встраиваемые элементы (вроде тега img).
   При этом его внутренняя часть форматируется как блочный элемент, а сам элемент — как встроенный.`;
};
function inline_table() {
  txt.textContent = "";
  for (let el of els) {
    el.style.opacity = 0;
  }
  setTimeout(function () {
    for (let el of els) {
      el.style = "display:inline-table;"
      el.style.opacity = 1;
    }
  }, 500)
  txt.textContent = `Элемент inline-table Определяет, что элемент является таблицей как при
  использовании тега table, но при этом таблица является встроенным элементом и происходит ее обтекание
  другими элементами, например, текстом.`;
};

function list_item() {
  txt.textContent = "";
  for (let el of els) {
    el.style.opacity = 0;
  }
  setTimeout(function () {
    for (let el of els) {
      el.style = "display:list-item;"
      el.style.opacity = 1;
    }
  }, 500)
  txt.textContent = `Элемент  none  Временно удаляет элемент из документа. Занимаемое им место не
  резервируется и веб-страница формируется так, словно элемента и не было. Изменить значение и сделать
  вновь видимым элемент можно с помощью скриптов, обращаясь к свойствам через объектную модель. В этом
  случае происходит переформатирование данных на странице с учетом вновь добавленного элемента.`;
};
function run_in() {
  txt.textContent = "";
  for (let el of els) {
    el.style.opacity = 0;
  }
  setTimeout(function () {
    for (let el of els) {
      el.style = "display: run-in;"
      el.style.opacity = 1;
    }
  }, 500)
  txt.textContent = `Элемент  run-in  Устанавливает элемент как блочный или встроенный в
  зависимости от
  контекста.`;
};
function table() {
  txt.textContent = "";
  for (let el of els) {
    el.style.opacity = 0;
  }
  setTimeout(function () {
    for (let el of els) {
      el.style = "display:table;"
      el.style.opacity = 1;
    }
  }, 500)
  txt.textContent = `Элемент table  Определяет, что элемент является блочной таблицей подобно
  использованию
  тега <code>table</code>.`;
};
function table_caption() {
  txt.textContent = "";
  for (let el of els) {
    el.style.opacity = 0;
  }
  setTimeout(function () {
    for (let el of els) {
      el.style = "display:table-caption;"
      el.style.opacity = 1;
    }
  }, 500)
  txt.textContent = `Элемент  table-caption  Задает заголовок таблицы подобно применению тега
  <code>caption</code>.`;
};
function table_cell() {
  txt.textContent = "";
  for (let el of els) {
    el.style.opacity = 0;
  }
  setTimeout(function () {
    for (let el of els) {
      el.style = "display:table-cell;"
      el.style.opacity = 1;
    }
  }, 500)
  txt.textContent = `Элемент  table-cell  Указывает, что элемент представляет собой ячейку
  таблицы (тег
  <code>td или th).`;
};
function table_column_group() {
  txt.textContent = "";
  for (let el of els) {
    el.style.opacity = 0;
  }
  setTimeout(function () {
    for (let el of els) {
      el.style = "display: table-column-group;"
      el.style.opacity = 1;
    }
  }, 500)
  txt.textContent = `Элемент table-column-group Определяет, что элемент является группой
  одной или более
  колонок таблицы, как при использовании тега colgroup.`;
};
function table_column() {
  txt.textContent = "";
  for (let el of els) {
    el.style.opacity = 0;
  }
  setTimeout(function () {
    for (let el of els) {
      el.style = "display:table-column;"
      el.style.opacity = 1;
    }
  }, 500)
  txt.textContent = `Элемент table-column Назначает элемент колонкой таблицы, словно был
  добавлен тег
   col.`;
};
function table_footer_group() {
  txt.textContent = "";
  for (let el of els) {
    el.style.opacity = 0;
  }
  setTimeout(function () {
    for (let el of els) {
      el.style = "display:table-footer-group;"
      el.style.opacity = 1;
    }
  }, 500)
  txt.textContent = `Элемент  table-footer-group  Используется для хранения одной или
  нескольких строк
  ячеек, которые отображаются в самом низу таблицы. По своему действию сходно с работой тега
  tfoot.`;
};
function table_row() {
  txt.textContent = "";
  for (let el of els) {
    el.style.opacity = 0;
  }
  setTimeout(function () {
    for (let el of els) {
      el.style = "table-row;"
      el.style.opacity = 1;
    }
  }, 500)
  txt.textContent = `Элемент table-row  Элемент отображается как строка таблицы (тег
    <code> tr</code>).`;
};
function table_row_group() {
  txt.textContent = "";
  for (let el of els) {
    el.style.opacity = 0;
  }
  setTimeout(function () {
    for (let el of els) {
      el.style = "display:table-row-group;"
      el.style.opacity = 1;
    }
  }, 500)
  txt.textContent = `Элемент table-row-group Создает структурный блок, состоящий из
  нескольких строк
  таблицы аналогично действию тега tbody.`;
};
/*
<template id="element-template" id="ajara">
            <div class="el block">
                <span>
                    <!--Номер элемента-->
                </span>
            </div>
        </template>
    */

// Кнопка "вверх"
function scrollTo(to, duration = 700) {
  const
    element = document.scrollingElement || document.documentElement,
    start = element.scrollTop,
    change = to - start,
    startDate = +new Date(),
    // t = current time
    // b = start value
    // c = change in value
    // d = duration
    easeInOutQuad = function (t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    },
    animateScroll = function () {
      const currentDate = +new Date();
      const currentTime = currentDate - startDate;
      element.scrollTop = parseInt(easeInOutQuad(currentTime, start, change, duration));
      if (currentTime < duration) {
        requestAnimationFrame(animateScroll);
      }
      else {
        element.scrollTop = to;
      }
    };
  animateScroll();
}

document.addEventListener('DOMContentLoaded', function () {
  let btn = document.querySelector('#toTop');


  window.addEventListener('scroll', function () {

    // Если прокрутили дальше 100px, показываем кнопку
    if (pageYOffset > 100) {
      btn.classList.add('show');
      // Иначе прячем
    } else {
      btn.classList.remove('show');
    }

    // появление текста

    let texer = document.querySelector('.animer');
    let texer2 = document.querySelector('.animer1');
    if (pageYOffset > 300 && pageYOffset < 700) {
      texer.classList.add("scrollanimated");
     // texer.style = "animation: lolo 1s 1 linear alternate forwards; visibility: visible;"
    }
    if(pageYOffset < 250)
    {
      texer.classList.remove("scrollanimated");
      //texer.style = "visibility: hidden; animation: lolo 1s 1 linear alternate forwards;"
    }
    // вторая волна
    if (pageYOffset > 800) {
      texer2.classList.add("scrollanimated2");
     // texer.style = "animation: lolo 1s 1 linear alternate forwards; visibility: visible;"
    }
    if(pageYOffset < 500)
    {
      texer2.classList.remove("scrollanimated2");
      //texer.style = "visibility: hidden; animation: lolo 1s 1 linear alternate forwards;"
    }
  });

  // При клике прокручиываем на самый верх
  btn.onclick = function (click) {
    click.preventDefault();
    scrollTo(0, 200);
  }
});