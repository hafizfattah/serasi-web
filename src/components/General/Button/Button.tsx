import cx from 'classnames';
import React, {ButtonHTMLAttributes, forwardRef, ReactNode} from 'react';
import styles from './Button.module.scss';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** HTML Element */
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  fullwidth?: boolean;
  onClick?: () => void;
}

const Button = forwardRef<HTMLButtonElement, IButton>(
  (
    {children, variant = 'primary', size = 'medium', disabled = false, loading = false, fullwidth = false, onClick, ...props}: IButton,
    ref: React.Ref<any>
  ) => {
    const checkFullwidthClass = fullwidth ? styles['button--fullwidth'] : '';
    const checkLoadingClass = loading ? styles['button--loading'] : '';
    const buttonClasses = [styles[`button--${variant}`], styles[`button--${size}`], checkFullwidthClass, checkLoadingClass];

    return (
      <button
        ref={ref}
        className={cx(styles.button, buttonClasses)}
        disabled={disabled}
        aria-busy={loading}
        aria-disabled={disabled}
        aria-pressed="false"
        onClick={onClick}
        {...props}
      >
        {loading ? (
          <div className="relative">
            <svg className={styles['button--spinner']} viewBox="0 0 50 50">
              <circle className={styles.path} cx="25" cy="25" r="20" fill="none" strokeWidth="5"></circle>
            </svg>
            <span className="invisible">{children}</span>
          </div>
        ) : (
          children
        )}
      </button>
    );
  }
);

export default Button;
