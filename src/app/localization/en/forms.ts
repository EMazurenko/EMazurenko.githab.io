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
  productManagement: {
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
};
