import cx from 'classnames';
import React, {ButtonHTMLAttributes, ReactNode} from 'react';
import './Button.scss';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** HTML Element */
  children: ReactNode;
  /** `primary`, `secondary`, `outline`, `ghost` */
  variant?: string;
  /** `small`, `medium`, `large` */
  size?: string;
  disabled?: boolean;
  loading?: boolean;
  fullwidth?: boolean;
}

const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  fullwidth = false,
  ...props
}: IButton) => {
  const buttonClass = cx({
    'button--primary': variant === 'primary',
    'button--secondary': variant === 'secondary',
    'button--outline': variant === 'outline',
    'button--ghost': variant === 'ghost',
    'button--small': size === 'small',
    'button--medium': size === 'medium',
    'button--large': size === 'large',
    'button--disabled': disabled,
    'button--fullwidth': fullwidth,
    'button--loading': loading,
  });
  return (
    <button className={`button ${buttonClass}`} disabled={disabled} {...props}>
      {loading ? (
        <div className="relative">
          <svg className="spinner" viewBox="0 0 50 50">
            <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
          </svg>
          <span className="invisible">{children}</span>
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
