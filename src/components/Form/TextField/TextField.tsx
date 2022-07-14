import cx from 'classnames';
import React, {ChangeEventHandler, forwardRef, HTMLAttributes, useState} from 'react';
import styles from './TextField.module.scss';

export interface ITextField extends Omit<HTMLAttributes<HTMLInputElement>, 'size' | 'disabled' | 'onChange'> {
  id: string;
  label?: string;
  placeholder?: string;
  value?: string;
  readonly?: boolean;
  clearable?: boolean;
  disabled?: boolean;
  error?: boolean;
  /** `function` */
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const TextField = forwardRef<HTMLInputElement, ITextField>(
  ({id, value, label, placeholder, onChange, ...props}: ITextField, ref: React.Ref<any>) => {
    const [isFocus, setIsfocus] = useState(false);
    const setBlur = () => {
      if (value) return;
      setIsfocus(false);
    };
    return (
      <div className="relative py-4">
        {label && (
          <label htmlFor={id} className={cx(styles.label, isFocus ? styles.active : '')}>
            {label}
          </label>
        )}

        <input
          ref={ref}
          id={id}
          value={value}
          placeholder={placeholder}
          className={styles.textfield}
          onFocus={() => setIsfocus(true)}
          onBlur={() => setBlur()}
          onChange={onChange}
          {...props}
        />
      </div>
    );
  }
);

export default TextField;
