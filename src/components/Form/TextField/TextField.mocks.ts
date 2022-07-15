import {ITextField} from './TextField';

const base: ITextField = {
  id: '1',
  label: 'Name',
  placeholder: 'Input your name here',
  type: 'text',
  isRequired: false,
  isError: false,
  fullwidth: false,
  passwordReveal: false,
};

const number: ITextField = {
  id: '1',
  label: 'Phone',
  placeholder: 'Input your Phone number here',
  type: 'number',
  isRequired: false,
  isError: false,
};

const password: ITextField = {
  id: '1',
  label: 'Password',
  placeholder: 'Input your Phone number here',
  type: 'password',
  value: 'SomePassword123',
  passwordReveal: true,
};

const hasValue: ITextField = {
  id: '2',
  label: 'Name',
  placeholder: 'Input your name here',
  type: 'text',
  value: 'John Doe',
};

const disabled: ITextField = {
  id: '2',
  label: 'Name',
  placeholder: 'Input your name here',
  type: 'text',
  value: 'John Doe',
  isDisabled: true,
};

const noLabel: ITextField = {
  id: '2',
  placeholder: 'Input your name here',
  type: 'text',
};

const required: ITextField = {
  id: '2',
  placeholder: 'Input your name here',
  type: 'text',
  label: 'Name',
  isRequired: true,
};

const error: ITextField = {
  id: '2',
  placeholder: 'Input your name here',
  type: 'text',
  label: 'Name',
  isRequired: true,
  isError: true,
};

const errorWithMessage: ITextField = {
  id: '2',
  placeholder: 'Input your name here',
  type: 'text',
  label: 'Name',
  value: 'James Bond 007',
  message: 'Cannot contain number',
  isRequired: true,
  isError: true,
};

const prefix: ITextField = {
  id: '2',
  placeholder: 'Transfer amount',
  type: 'number',
  prefix: 'Rp',
};

const suffix: ITextField = {
  id: '2',
  placeholder: 'Discount',
  type: 'number',
  label: 'Discount',
  suffix: '%',
};

const fullwidth: ITextField = {
  id: '2',
  label: 'Full name',
  placeholder: 'Input your name here',
  type: 'text',
  fullwidth: true,
};

export const mockTextFieldProps = {
  base,
  number,
  password,
  hasValue,
  disabled,
  noLabel,
  required,
  error,
  errorWithMessage,
  prefix,
  suffix,
  fullwidth,
};
