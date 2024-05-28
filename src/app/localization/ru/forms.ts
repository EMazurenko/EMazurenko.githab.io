export const ruForms = {
  profile: {
    title: 'Изменение профиля',
    submit: 'Сохранить',
    inputs: {
      nickname: {
        label: 'Псевдоним',
        placeholder: 'придумайте себе псевдоним',
      },
      about: {
        label: 'О себе',
        placeholder: 'напишите что-нибудь о себе',
      },
    },
  },
  login: {
    title: 'Вход',
    registrationLabel: 'Регистрация',
    submit: 'Авторизоваться',
    inputs: {
      email: {
        label: 'E-mail',
        placeholder: 'укажите e-mail',
      },
      password: {
        label: 'Пароль',
        placeholder: 'укажите пароль',
      },
    },
  },
  registration: {
    title: 'Регистрация',
    submit: 'Зарегистрироваться',
    inputs: {
      email: {
        label: 'E-mail',
        placeholder: 'укажите e-mail',
      },
      password: {
        label: 'Пароль',
        placeholder: 'укажите пароль',
      },
      confirmPassword: {
        label: 'Повтор пароля',
        placeholder: 'повторите пароль',
      },
    },
  },
  product: {
    edit: {
      title: 'Редактирование карточки продукта',
      submit: 'Обновить',
    },
    create: {
      title: 'Создание карточки продукта',
      submit: 'Сохранить',
    },
    inputs: {
      name: {
        label: 'Наименование товара',
        placeholder: '',
      },
      desc: {
        label: 'Описание товара',
        placeholder: 'укажите описание',
      },
      photo: {
        label: 'Ссылка на фото товара',
        placeholder: 'URL',
      },
      price: {
        label: 'Цена',
        placeholder: 'укажите цену',
      },
      categoryId: {
        label: 'Категория товара',
      },
    },
  },
};
