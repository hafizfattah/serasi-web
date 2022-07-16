import cx from 'classnames';
import React, {ChangeEventHandler, forwardRef, HTMLAttributes, useState} from 'react';
import {FaEye, FaEyeSlash} from 'react-icons/fa';
import styles from './TextField.module.scss';

export interface ITextField extends Omit<HTMLAttributes<HTMLInputElement>, 'disabled' | 'onChange'> {
  id: string;
  /** `text`, `number`, `password` */
  type: 'text' | 'number' | 'password';
  label?: string;
  placeholder?: string;
  value?: string;
  message?: string;
  /** Property Label must not empty to use isRequired */
  isRequired?: boolean;
  isDisabled?: boolean;
  isError?: boolean;
  fullwidth?: boolean;
  passwordReveal?: boolean;
  prefix?: string;
  suffix?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const TextField = forwardRef<HTMLInputElement, ITextField>(
  (
    {
      id,
      type = 'text',
      value,
      label,
      placeholder,
      message,
      isRequired = false,
      isDisabled = false,
      isError = false,
      fullwidth = false,
      passwordReveal = false,
      prefix,
      suffix,
      onChange,
      ...props
    }: ITextField,
    ref: React.Ref<any>
  ) => {
    const [currentType, setCurrentType] = useState(type);

    const showPassword = () => {
      setCurrentType(currentType === 'password' ? 'text' : 'password');
    };

    return (
      <div className={`pt-4 ${isError ? styles.error : ''} ${isDisabled ? styles.disabled : ''} ${fullwidth ? 'block' : 'inline-block'}`}>
        <div className={cx([styles['textfield-wrapper']])}>
          {prefix && <div className={styles.prefix}>{prefix}</div>}
          {label && (
            <label htmlFor={id} className={styles['textfield__label']}>
              {isRequired && <span className={styles.required}>*</span>}
              {label}
            </label>
          )}
          <input
            ref={ref}
            type={currentType}
            id={id}
            value={value}
            placeholder={placeholder}
            disabled={isDisabled}
            className={styles.textfield}
            onChange={onChange}
            {...props}
          />
          {passwordReveal && (
            <button className={styles.reveal} onClick={() => showPassword()}>
              {currentType === 'password' ? <FaEye /> : <FaEyeSlash />}
            </button>
          )}

          {suffix && <div className={styles.prefix}>{suffix}</div>}
        </div>
        {message && (
          <div className={styles.message}>
            <p>{message}</p>
          </div>
        )}
      </div>
    );
  }
);

export default TextField;
