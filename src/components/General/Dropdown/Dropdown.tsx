import React from 'react';
import Styles from './Dropdown.module.scss';

export interface IOptions {
  value: string;
  name: string;
}

export interface IDropdown {
  label?: string;
  placeholder?: string;
  options: IOptions[];
  // eslint-disable-next-line no-unused-vars
  onChange: (value: {}) => void;
}

const Dropdown = ({label, placeholder, options, onChange}: IDropdown) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selected, setSelected] = React.useState('');

  const onSelect = (selectedOption: {name: string; value: string}) => {
    setSelected(selectedOption.name);
    onChange(selectedOption);
  };

  return (
    <div className={Styles.select} onClick={() => setIsOpen(!isOpen)}>
      <div className={Styles.select__wrapper}>
        <div className={Styles.select__content}>
          {label && <span className={Styles.select__label}>{label}</span>}

          {(placeholder || selected) && (
            <p className={Styles.selected}>
              {selected ? <span className={Styles.selected__text}>{selected}</span> : <span>{placeholder}</span>}
            </p>
          )}

          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className={Styles.icon}>
            <path
              d="M14.8284 12.0259L16.2426 13.4402L12 17.6828L7.75733 13.4402L9.17155 12.0259L11 13.8544V6.31724H13V13.8544L14.8284 12.0259Z"
              fill="currentColor"
            />
          </svg>
        </div>

        <div className={`${Styles.select__fields}  ${isOpen ? Styles.open : ''}`}>
          {options.map((option) => (
            <div key={option.value} className={Styles.select__option} data-value={option.value} onClick={() => onSelect(option)}>
              {option.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
