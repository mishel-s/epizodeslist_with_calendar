## Выполнено
### mobile first React приложение соответствующее критериям приведенным ниже:
- Стартовый экран приложения содержит календарь.
- По нажатию на день в календаре пользователю отображается экран со списком эпизодов.

**Критерии приемки:**

### `Реализовано`   
1. Наличие ссылки на git репозиторий содержащий исходный код задания.
   https://github.com/mishel-s/epizodeslist_with_calendar - вы уже тут если читаете это фаул.

### `Реализовано`
2. Наличие отдельного блока в файле README.md с указанием какие из                         пунктов текущего задания подлежат проверке. 

### `Реализовано`
3. Пользовательский интерфейс должен содержать элементы, представленные                    на макетах.                                     
   https://drive.google.com/drive/folders/1Pk2tdkPJbDKoal--aR898wPD_SlnSnKN?usp=sharing 
   Полная реализация дизайна будет дополнительным плюсом. Адаптировать необходимо только под мобильные устройства. Реализовывать desktop версию нет необходимости. 

### `Реализовано`
4. Подключение и реализация поведения для источника данных -                               https://www.tvmaze.com/api#schedule  (country=US) будет дополнительным плюсом. 
   `api->request.js` - получаем данные(по сериалам) при клике на соответствующую дату календаря.

### `Реализовано`
5. Реализация отображения original изображения по нажатию на medium                        будет дополнительным плюсом.
   `при клике на любое изображение`

### `Реализовано`
6. В случае web приложения наличие ссылки на развернутую версию либо                       инструкции по сборке в отдельном блоке файла README.md репозитория,                     с указанием версий необходимого для развертывания ПО.
   https://mishel-s.github.io/epizodeslist_with_calendar/

`НЕреализовано`
7. В случае React Native приложения ссылка на apk файл или инструкция                      по сборке  в отдельном блоке файла README.md репозитория, с                             указанием версий необходимого для развертывания ПО. При наличии                         возможности предоставление доступа к iOS версии (если отсутствует                       опыт или необходимое окружение для сборки под iOS - не тратьте                          время, на рабочем месте обучим и предоставим все необходимое).

### `Реализовано`
8. Функция `serialEnding`(containers -> movieList -> functions.js), которая проверяет и    возвращает соответствующее окончание        слова или пустую строку в зависимости от    количества сериалов для подгрузки, а соответственно в зависимости от последней цифры:
    1 -> 'л';
    2-4 -> 'ла'; 
    5-9, 0 и диапозон от 10-20 -> 'ов';



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
