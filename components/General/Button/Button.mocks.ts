import {IButton} from './Button';

export const VARIANTS = ['primary', 'secondary', 'outline', 'ghost'];
export const SIZES = ['large', 'medium', 'small'];

const base: IButton = {
  children: 'Hello Button!',
  variant: 'primary',
  size: 'medium',
  disabled: false,
  loading: false,
  fullwidth: false,
};

export const buttonProps = {
  base,
};
