import {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';
import {FaCamera, FaDownload, FaUpload} from 'react-icons/fa';

import Button, {IButton} from './Button';
import {buttonProps, SIZES, VARIANTS} from './Button.mocks';

export default {
  title: 'General/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: {
      control: 'radio',
      options: VARIANTS,
    },
    size: {
      control: 'radio',
      options: SIZES,
    },
  },
} as ComponentMeta<typeof Button>;

// More on component General: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

const TemplateVariants: ComponentStory<typeof Button> = (args) => {
  return (
    <div>
      <div className="flex flex-row items-center">
        {VARIANTS.map((variant, index) => (
          <div className="mr-4" key={index}>
            <Button {...args} size="medium" variant={variant}>
              <span className="capitalize">{variant}</span>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

const TemplateSize: ComponentStory<typeof Button> = (args) => {
  return (
    <div className="flex flex-row items-center">
      {SIZES.map((size, index) => (
        <div className="mr-4" key={index}>
          <Button {...args} variant="primary" size={size}>
            <span className="capitalize">{size}</span>
          </Button>
        </div>
      ))}
    </div>
  );
};

const TemplateLoading: ComponentStory<typeof Button> = (args) => {
  return (
    <Button {...args} size="medium" loading variant="primary">
      loading..
    </Button>
  );
};

const TemplateDisabled: ComponentStory<typeof Button> = (args) => {
  return (
    <div>
      <div className="flex flex-row items-center">
        {VARIANTS.map((variant, index) => (
          <div className="mr-4" key={index}>
            <Button {...args} size="medium" disabled variant={variant}>
              <span className="capitalize">{variant}</span>
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

const TemplateFullWidth: ComponentStory<typeof Button> = (args) => {
  return (
    <Button {...args} size="medium" fullwidth variant="primary">
      Full width
    </Button>
  );
};

const TemplateWithIcon: ComponentStory<typeof Button> = (args) => {
  return (
    <div className="flex flex-row items-center">
      <div className="mr-4">
        <Button {...args} size="medium" variant="primary">
          <FaCamera className="inline-block" />
        </Button>
      </div>
      <div className="mr-4">
        <Button {...args} size="medium" variant="primary">
          <FaDownload className="inline-block" /> Download
        </Button>
      </div>
      <div className="mr-4">
        <Button {...args} size="medium" variant="primary">
          Print <FaUpload className="inline-block" />
        </Button>
      </div>
    </div>
  );
};

export const Playground = Template.bind({});
Playground.args = {
  ...buttonProps.base,
} as IButton;

export const Variants = TemplateVariants.bind({});
export const Sizes = TemplateSize.bind({});
export const Disabled = TemplateDisabled.bind({});
export const Loading = TemplateLoading.bind({});
export const Fullwidth = TemplateFullWidth.bind({});
export const WithIcon = TemplateWithIcon.bind({});
