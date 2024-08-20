export const enForms = {
  profile: {
    title: 'Change profile',
    submit: 'Save',
    inputs: {
      nickname: {
        label: 'Nickname',
        placeholder: 'create nickname',
      },
      about: {
        label: 'About',
        placeholder: 'write something about yourself',
      },
    },
  },
  login: {
    title: 'Sign in',
    registrationLabel: 'Registration',
    submit: 'Sign in',
    inputs: {
      email: {
        label: 'E-mail',
        placeholder: 'input e-mail',
      },
      password: {
        label: 'Password',
        placeholder: 'input password',
      },
    },
  },
  registration: {
    title: 'Registration',
    submit: 'Register',
    inputs: {
      email: {
        label: 'E-mail',
        placeholder: 'input e-mail',
      },
      password: {
        label: 'Password',
        placeholder: 'input password',
      },
      confirmPassword: {
        label: 'Confirm password',
        placeholder: 'input same password',
      },
    },
  },
  product: {
    edit: {
      title: 'Editing',
      submit: 'Update',
    },
    create: {
      title: 'Creation',
      submit: 'Save',
    },
    inputs: {
      name: {
        label: 'Product name',
        placeholder: '',
      },
      desc: {
        label: 'Product description',
        placeholder: 'input description',
      },
      photo: {
        label: 'Link to product photo',
        placeholder: 'URL',
      },
      price: {
        label: 'Price',
        placeholder: 'input price',
      },
      categoryId: {
        label: 'Product category',
      },
    },
  },
  category: {
    edit: {
      title: 'Editing',
      submit: 'Update',
    },
    create: {
      title: 'Creation',
      submit: 'Save',
    },
    inputs: {
      name: {
        label: 'Category name',
        placeholder: '',
      },
      photo: {
        label: 'Link to category photo',
        placeholder: 'URL',
      },
    },
  },
  productManagement: {
    product: {
      title: 'Creation/Editing products',
      inputs: {
        productId: {
          label: 'Product',
        },
      },
      buttons: {
        add: 'Add product',
        edit: 'Edit product',
      },
    },
    category: {
      title: 'Creation/Editing categories',
      inputs: {
        categoryId: {
          label: 'Category',
        },
      },
      buttons: {
        add: 'Add category',
        edit: 'Edit category',
      },
    },
  },
  orders: {
    title: 'Orders',
  },
};
