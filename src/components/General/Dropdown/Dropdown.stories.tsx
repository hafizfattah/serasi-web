import {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';
import Dropdown, {IDropdown} from './Dropdown';
import {mockDropdownProps} from './Dropdown.mocks';

export default {
  title: 'General/Dropdown',
  component: Dropdown,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof Dropdown>;

// More on component General: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Playground = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

Playground.args = {
  ...mockDropdownProps.base,
} as IDropdown;
