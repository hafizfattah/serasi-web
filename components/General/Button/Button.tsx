import cx from 'classnames';
import {ButtonHTMLAttributes, ReactNode, useMemo} from 'react';
import './Button.scss';

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: 'primary' | 'secondary' | 'outline' | 'ghost';
  size: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
}

const Button = ({children, variant, size, disabled, loading, ...props}: IButton) => {
  const classNames = useMemo(() => {
    return cx('button', `button--${variant} button--${size} ${disabled ? 'button--disabled' : ''}`);
  }, [variant, size, disabled]);

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
