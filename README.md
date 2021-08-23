# googleBooks
# Тестовое задание на вакансию Программист (FrontEnd)
## Задание

## Available Scripts
Необходимо разработать React-приложение поиска книг с помощью Google Books API. Документация: https://developers.google.com/books/docs/v1/using. Для авторизации запросов к API выбрать способ с предоставлением API key (https://developers.google.com/books/docs/v1/using#APIKey).

In the project directory, you can run:
__Функционал__

### `npm start`
- Должны быть текстовое поле и кнопка поиска. По введенной пользователем подстроке производится поиск книг. Триггером к поиску является либо нажатие Enter (когда текстовое поле в фокусе), либо нажатие кнопки поиска.
- Фильтрация по категориям. Ниже текстового поля располагается селект с категориями: all, art, biography, computers, history, medical, poetry. Если выбрано "all" (выбрано изначально), то поиск производится по всем категориям.
- Сортировка. Рядом с селектом категорий находится селект с вариантами сортировки: relevance (выбран изначально), newest. 
- Найденные книги отображаются карточками, каждая из которых состоит из изображения обложки книги, названия книги, названия категории и имен авторов. Если для книги приходит несколько категорий, то отображается только первая. Авторы отображаются все. Если не приходит какой-либо части данных, то вместо нее просто пустое место.
- Над блоком с карточками отображается количество найденных по запросу книг.
- Пагинация реализована по принципу 'load more'. Ниже блока с карточками находится кнопка 'Load more', по клику на нее к уже загруженным книгам подгружаются еще. Шаг пагинации - 30.
- При клике на карточку происходит переход на детальную страницу книги, на которой выводятся ее данные: изображение обложки, название, все категории, все авторы, описание.
---
## Решение

При выполнении данного задания использовались следующие библиотеки:
- "antd" - для ui представления элементов
- "styled-components"для установки стилей элементов (ui-представление)
- "react-dom" - для уставноки маршрутизации при выборе книги
- "react-redux" - для управления состоянием

Приложение доступно на GitHub Pages [по ссылке](https://ting-sk.github.io/googleBooks/)

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
## Команды для скриптов

The page will reload if you make edits.\
You will also see any lint errors in the console.
В папке проекта вы можете запустить:

### `npm start`

### `npm test`
Запускает приложение в режиме разработки. \
Откройте [http://localhost:3000](http://localhost:3000), чтобы просмотреть его в браузере.

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.
Страница перезагрузится, если вы внесете правки. \
Вы также увидите любые ошибки линта в консоли.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
Собирает приложение для продакшена и оптимизирует сборку для достижения максимальной производительности в папку `build`. \
См. Раздел о [развертывании](https://facebook.github.io/create-react-app/docs/deployment) для получения дополнительной информации.
