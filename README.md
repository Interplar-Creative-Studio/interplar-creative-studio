# gulp-template

Gulp-template это template для веб frontend html разработчиков
Тут используются следующие технологии:
- pug
- scss
- bootstrap

### Начало
Для запуска:
`npm i; npm update; gulp start`

### Структура проекта
```

app/ - включает в себя все файлы с версткой
├── assets/ - тут хранятся условно "статические" файлы. То есть все кроме html, js
│   ├── fonts/ - все шрифты проекта
│   ├── img/ - картинки .png .jpg .jpeg .svg .webp .gif
│   ├── static/ - статичные файлы из тега <head> (robot.txt, ico, sitemap)
│   └── styles/ - scss файлы
│       └── utils/
│   │       ├── _custom.scss - исправляем переменные bootstrap
│   │       ├── fonts.scss - подключаемы фонты
│   │       ├── libs.scss - подключаем библиотеки
│   │       ├── reset.scss - см. ссылку на пример ниже
│   │       └── ...
│   └── main.scss
├── scripts/ - Директория скриптов
└── views/ - Место обитания PUG файлов
    ├── includes/
    │   └── modules/
    ├── layouts/
    ├── pages/
    └── utils/
build/ - Директория готового билда
tasks
gulpfile.js
```

## Команды Gulp

- `gulp start:clean` - локальный сервер с очищением build директории и компиляцией (сценарий для разработки)
- `gulp start:dev` - локальный сервер с очищением build директории и компиляцией (сценарий для разработки)
- `gulp start:prod` - локальный сервер с очищением build директории и компиляцией (сценарий для релиза)

---

- `gulp serve:dev` - локальный сервер без очищения build директории и компиляции (сценарий для разработки)
- `gulp serve:prod` - локальный сервер без очищения build директории и компиляции (сценарий для релиза)

---

- `gulp compile:prod` - полностью компилируем проект
- `gulp compile:dev` - полностью компилируем проект под разработку (оставляем maps)

---

- `gulp useref:dev` - комбинируем .js файлы в один
- `gulp useref:prod` - комбинируем .js файлы в один, минифицируем

---

- `gulp imagemin:dev` - перенос картинок без обработки
- `gulp imagemin:prod` - сжатие картинок

---

- `gulp clean` - Очищаем директорию build

## Известные проблемы
При запуске выходит ошибка от unCss, что не удалось найти js файл, но css компилируется, так что как-нибудь потом пофиксится

[comment]: <> (Gulp template is a template for web html developers!)

[comment]: <> (It includes)

[comment]: <> (1. pug)

[comment]: <> (2. scss)

[comment]: <> (3. Bootstrap)
