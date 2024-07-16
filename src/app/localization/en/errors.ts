export const enErrors = {
  forms: {
    requiredField: 'Required field',
    badEmail: 'Bad e-mail format',
    badPasswordLength: 'Password must be more than {PASSWORD_LENGTH} chars',
    passwordMismatch: 'Password mismatch',
    positiveValue: 'Value must be positive',
  },
  modals: {
    productNotExists: 'Product "{productId}" not exists',
  },
  pageNotFound: 'Page <i>{{path}}</i> not found.',
  authorization: {
    profileExits: 'Profile with email "{{email}}" already exists.',
    profileNotExits: 'Profile with email "{{email}}" does not exist.',
    passwordIncorrect: 'Password incorrect',
  },
  server: {
    ERR_INCORRECT_EMAIL_OR_PASSWORD: 'Password or email incorrect',
    ERR_ACCOUNT_ALREADY_EXIST: 'Profile already exists.',
    ERR_FIELD_REQUIRED: 'Required field',
    ERR_INCORRECT_PASSWORD: 'Old password is incorrect',
    ERR_INVALID_PASSWORD: 'Password does not match the regular expression /^[w-@{}()#$%^&*+=!~]{8,}$/',
    ERR_NOT_VALID: 'Entity id is not valid',
    ERR_AUTH: 'Token was not transferred or was not authorized',
    ERR_NO_FILES: 'Error loading files',
    ERR_NOT_ALLOWED: 'No access to this operation',
    ERR_NOT_FOUND: 'Entity not found',
    ERR_VALIDATION_ERROR: 'Validation error',
    ERR_INVALID_QUERY_PARAMS: 'For GET requests, you should pass parameters in the format { [key: string]: string} }',
    ERR_INTERNAL_SERVER: 'Server error',
    ERR_UNKNOWN: 'Error unknown',
  },
};
