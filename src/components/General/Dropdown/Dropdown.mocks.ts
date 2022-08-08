import {IDropdown} from './Dropdown';

const base: IDropdown = {
  label: 'Character',
  placeholder: 'Select a character',
  options: [
    {
      name: 'Walter white',
      value: '1',
    },
    {
      name: 'Saul Goodman',
      value: '2',
    },
    {
      name: 'Jesse Pinkman',
      value: '3',
    },
    {
      name: 'Gus Fring',
      value: '4',
    },
  ],
};

export const mockDropdownProps = {
  base,
};
