import {ComponentMeta, ComponentStory} from '@storybook/react';
import Button, {IButton} from './Button';
import {mockButtonProps, SIZE, VARIATION} from './Button.mocks';

export default {
  title: 'General/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    variant: {
      control: 'select',
      options: VARIATION,
    },
    size: {
      control: 'select',
      options: SIZE,
    },
  },
} as ComponentMeta<typeof Button>;

// More on component General: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

const TemplateSize: ComponentStory<typeof Button> = (args) => {
  return (
    <div>
      <Button {...args} size="small" variant="primary">
        Small
      </Button>
      <Button {...args} size="medium" variant="primary">
        Medium
      </Button>
      <Button {...args} size="large" variant="primary">
        Large
      </Button>
    </div>
  );
};

const TemplateVariants: ComponentStory<typeof Button> = (args) => {
  return (
    <div>
      <Button {...args} size="medium" variant="primary">
        primary
      </Button>
      <Button {...args} size="medium" variant="secondary">
        secondary
      </Button>
      <Button {...args} size="medium" variant="outline">
        outline
      </Button>
      <Button {...args} size="medium" variant="ghost">
        ghost
      </Button>
    </div>
  );
};

// export const Overview = Template.bind({});
// Overview.args = {
//   ...mockButtonProps.base,
// } as IButton;

export const Base = Template.bind({});
Base.args = {
  ...mockButtonProps.base,
} as IButton;

export const Variant = TemplateVariants.bind({});

export const Sizes = TemplateSize.bind({});
