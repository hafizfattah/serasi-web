import cx from 'classnames';
import React, {ButtonHTMLAttributes, ReactNode, useMemo} from 'react';
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
  const classNames = useMemo(() => {
    return cx('button', `button--${variant} button--${size} ${disabled ? 'button--disabled' : ''} ${fullwidth ? 'button--fullwidth' : ''}`);
  }, [variant, size, disabled, fullwidth]);

  // const buttonAria = useMemo(() => {
  //   return {
  //     'aria-disabled': disabled,
  //     'aria-busy': loading ? 'true' : undefined,
  //   };
  // }, [loading, disabled]);

  return (
    <button className={classNames} disabled={disabled} {...props}>
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
