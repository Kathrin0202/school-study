# Задание:
Существует API эндпоинт 
GET https://logiclike.com/docs/courses.json

API эндпоинт возвращает список образовательных курсов платформы. Каждый курс имеет “тэги”, темы к которым этот курс относится. Например курс шахматы относится к темам “Головоломки”, “Шахматы” и “Логика и мышление”. 

Ваша задача разработать простую страницу, согласно макету, которая выводит список курсов и позволяет отфильтровать курсы по выбранной теме(tags). Весь контент, включая список тем должен формироваться динамически исходя из ответа от бэкэнда.

Макет: https://www.figma.com/file/gngIKlPiSuWmtoJPIfWHs8/Interview-Frontend?type=design&node-id=711-535&mode=design&t=RUg2M0Dhe5nPRGyb-4

Поведение на разных разрешениях экрана показано в виде отдельного фрейма. Блок с “тэгами” является фиксированным по ширине. Блок справа занимает все оставшееся место. В одной строчке выводится ровно 3 курса, которые делят между собой доступное место.
## Требования:
Использовать react, typescript, scss
pixel perfect
Код пишите так, как вы бы писали на реальном проекте
Можно использовать любые библиотеки, кроме стейт менеджеров(redux, zustand, mobx, ….)
Поддержка браузеров: код должен работать в хроме последней версии
Код должен быть размещен в codesandbox, либо в репозитории github/gitlab/bitbucket
Уделите внимание оптимизации кода, код не должен делать лишних перерендеров, которых можно было бы избежать 

## Примечания по локальному запуску проекта для разработки

Для клонирования репозитория выполните команду:

```bash
git clone https://github.com/Kathrin0202/school-study.git
```

Перед запуском проекта необходимо установить зависимости:

```bash
npm install
```

Запуск проекта:

```bash
npm run start
```

Проект будет запущен по адресу: http://localhost:3000
