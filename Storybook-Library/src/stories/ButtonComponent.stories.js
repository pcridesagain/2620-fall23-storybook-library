import Button from './ButtonComponet.svelte';

export default {
  title: 'DWDD Component',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    // name: { control: 'text' },
    // type: { control: { type: 'select', options: ['regular', 'flat', 'disabled'] } },
    // size: { control: { type: 'select', options: ['sl', 'md', 'lg', 'xlg'] } },
    // color: { control: { type: 'select', options: ['purple', 'purple1', 'gray', 'lightpurple', 'violet', 'indigo'] } },
    // borderColor: { control: { type: 'select', options: ['violet', 'indigo', 'zinc'] } },
  },
};

export const Regular = {
  args: {
    name: 'Default',
    type: 'regular',
    size: 'sl',
    color: 'purple',
    borderColor: 'violet',
  },
};

export const Flat = {
  args: {
    name: 'Default',
    type: 'flat',
    size: 'md',
    color: 'purple',
    borderColor: 'violet',
  },
};

export const Disabled = {
  args: {
    name: 'Default',
    type: 'disabled',
    size: 'md',
    color: 'purple',
    borderColor: 'violet',
  },
};

export const Test4 = {
  args: {
    size: 'small',
    name: 'Button',
  },
};
