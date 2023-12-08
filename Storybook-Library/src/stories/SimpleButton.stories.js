import Button from './SimpleButton.svelte';

export default {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    color: { control: { type: 'select', options: ['cancel', 'active'] } },
    size: { control: { type: 'select', options: ['sm', 'md', 'lg'] } },
  },
};

const Template = ({ ...args }) => ({
  Component: Button,
  props: args,
});

export const Default = Template.bind({});
Default.args = {};

export const Active = Template.bind({});
Active.args = {
  text: 'Confirm your action',
  color: 'active',
};

export const Small = Template.bind({});
Small.args = {
  size: 'sm',
};

export const SmallActive = Template.bind({});
SmallActive.args = {
  text: 'Confirm your action',
  color: 'active',
  size: 'sm',
};

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
};

export const LargeActive = Template.bind({});
LargeActive.args = {
  text: 'Send',
  color: 'active',
  size: 'lg',
};