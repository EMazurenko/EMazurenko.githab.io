export const ruErrors = {
  forms: {
    requiredField: 'Поле является обязательным',
    badEmail: 'Не удается распознать формат e-mail',
    badPasswordLength: 'Пароль должен быть более {PASSWORD_LENGTH} символов',
    passwordMismatch: 'Пароли не совпадают',
    positiveValue: 'Значение должно быть положительным',
  },
  modals: {
    productNotExists: 'Продукт "{productId}" не существует',
  },
  pageNotFound: 'Страница <i>{{path}}</i> не найдена.',
  authorization: {
    profileExits: 'Профиль с email "{email}" уже существует.',
    profileNotExits: 'Профиль с email "{email}" не существует.',
    passwordIncorrect: 'Неверный пароль',
  },
  server: {
    ERR_INCORRECT_EMAIL_OR_PASSWORD: 'Не корректный email или пароль',
    ERR_ACCOUNT_ALREADY_EXIST: 'Пользователь уже существует',
    ERR_FIELD_REQUIRED: 'Обязательное поле',
    ERR_INCORRECT_PASSWORD: 'Некорректный старый пароль',
    ERR_INVALID_PASSWORD: 'Пароль не соответствует регулярному выражению /^[w-@{}()#$%^&*+=!~]{8,}$/',
    ERR_NOT_VALID: 'Не валидный id сущности',
    ERR_AUTH: 'Токен не передан, либо не прошел авторизацию',
    ERR_NO_FILES: 'Ошибка при загрузке файлов',
    ERR_NOT_ALLOWED: 'Нет доступа к данной операции',
    ERR_NOT_FOUND: 'Сущность не найдена',
    ERR_VALIDATION_ERROR: 'Не валидные данные',
    ERR_INVALID_QUERY_PARAMS: 'Для GET-запросов сдедует передавать параметры в формате { [key: string]: string} }',
    ERR_INTERNAL_SERVER: 'Серверная ошибка',
    ERR_UNKNOWN: 'Неизвестная ошибка',
  },
};
