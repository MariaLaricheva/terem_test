## ТЗ

### 1. Верстка

1.1 Сделать HTML страницу с тэгами title "Тест", заполнить тэг meta
description lorem ipsum

1.2 Подключить к странице jQuery и Bootstrap актуальной версии из веб
репозитория

1.3 Сверстать следующую структуру
блок во всю ширину страницы
под ним 3 блока равного размера, расположенных на одном уровне по горизонтали
под ними 2 блока шириной в соотношении 1 к 2 на одном уровне по горизонтали

Примерная схема:

''' [                         ] '''
''' [       ][       ][       ] '''
''' [        ][               ] '''

1.4 В мобильной версии в вертикальном положении все блоки должны
показываться один над другим и по ширине быть 100%.

1.5 Добавить в нижние блоки кнопки в стилистике Bootstrap. В меньший
блок добавить кнопку "Кнопка 1" желтого цвета. В больший блок - кнопку
"Кнопка 2" зеленого цвета.

1.6 Сделать средствами CSS всем блокам рамки черного цвета. У среднего
блока во втором ряду сделать рамку пунктиром. Ширина рамок - 1
пиксель.

1.7 Покрасить средние 3 блока в разные цвета на выбор средствами CSS.

1.8 В верхнем блоке сделать заголовок H1 с надписью

### 2. Программирование JS

2.1 В тестовом файле из задания один сделать, чтобы при нажатии кнопки
"Кнопка 1" скрывался блок с заголовком. При повторном нажатии блок
должен появляться.

2.2 При нажатии кнопки "Кнопка 2" средний блок во втором ряду должен
меняться местами с левым блоком. При повторном нажатии - возвращаться
на прежнее место.

2.3 Сделать, чтобы при открытии страницы появлялось модальное окно с
надписью "Привет, мир".

2.4 Сделать в отдельном файле форму с 5 выпадающими списками и 2
полями для ручного ввода информации. Списки должны содержать цифры от
1 до 5. Также нужна кнопка для отправки формы.

2.5 Сделать формирование JSON-структуры из данных формы. Выводить ее
на экран под формой. Отправка формы не должна перезагружать страницу.

2.6 Форма должна отправлять асинхронный GET-запрос к абстрактному
обработчику на том же сервере (в той же папке). В случае, если данные
дошли, надо получать ответ. Можно выводить его через alert.
