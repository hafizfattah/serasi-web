import {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';
import TextField, {ITextField} from './TextField';
import {mockTextFieldProps} from './TextField.mocks';

export default {
  title: 'Form/TextField',
  component: TextField,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {},
} as ComponentMeta<typeof TextField>;

// More on component Form: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args

export const Playground = Template.bind({});
Playground.args = {
  ...mockTextFieldProps.base,
} as ITextField;

export const Number = Template.bind({});
Number.args = {
  ...mockTextFieldProps.number,
} as ITextField;

export const Password = Template.bind({});
Password.args = {
  ...mockTextFieldProps.password,
} as ITextField;

export const Value = Template.bind({});
Value.args = {
  ...mockTextFieldProps.hasValue,
} as ITextField;

export const Required = Template.bind({});
Required.args = {
  ...mockTextFieldProps.required,
} as ITextField;

export const Disabled = Template.bind({});
Disabled.args = {
  ...mockTextFieldProps.disabled,
} as ITextField;

export const NoLabel = Template.bind({});
NoLabel.args = {
  ...mockTextFieldProps.noLabel,
} as ITextField;

export const Error = Template.bind({});
Error.args = {
  ...mockTextFieldProps.error,
} as ITextField;

export const ErrorWithMessage = Template.bind({});
ErrorWithMessage.args = {
  ...mockTextFieldProps.errorWithMessage,
} as ITextField;

export const Prefix = Template.bind({});
Prefix.args = {
  ...mockTextFieldProps.prefix,
} as ITextField;

export const Suffix = Template.bind({});
Suffix.args = {
  ...mockTextFieldProps.suffix,
} as ITextField;

export const FullWidth = Template.bind({});
FullWidth.args = {
  ...mockTextFieldProps.fullwidth,
} as ITextField;
