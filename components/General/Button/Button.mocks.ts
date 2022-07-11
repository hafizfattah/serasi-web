import {IButton} from './Button';

export const VARIATION = ['primary', 'secondary', 'outline', 'ghost'];
export const SIZE = ['large', 'medium', 'small'];

const base: IButton = {
  children: 'Hello Button!',
  variant: 'primary',
  size: 'medium',
  disabled: false,
  loading: false,
};

const size: IButton = {
  children: 'xxx',
  variant: 'secondary',
  size: 'small',
  disabled: false,
  loading: false,
};

export const mockButtonProps = {
  base,
  size,
};
