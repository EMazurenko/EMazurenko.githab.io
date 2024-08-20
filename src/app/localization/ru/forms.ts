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
  category: {
    edit: {
      title: 'Редактирование категории',
      submit: 'Обновить',
    },
    create: {
      title: 'Создание категории',
      submit: 'Сохранить',
    },
    inputs: {
      name: {
        label: 'Наименование категории',
        placeholder: '',
      },
      photo: {
        label: 'Ссылка на фото категории',
        placeholder: 'URL',
      },
    },
  },
  productManagement: {
    product: {
      title: 'Добавление/Редактирование товаров',
      inputs: {
        productId: {
          label: 'Продукт',
        },
      },
      buttons: {
        add: 'Добавить продукт',
        edit: 'Редактировать продукт',
      },
    },
    category: {
      title: 'Добавление/Редактирование категорий',
      inputs: {
        categoryId: {
          label: 'Категория',
        },
      },
      buttons: {
        add: 'Добавить категорию',
        edit: 'Редактировать категорию',
      },
    },
  },
  orders: {
    title: 'Заказы',
  },
};
