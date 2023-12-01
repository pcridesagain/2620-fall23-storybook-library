// import type { Meta, StoryObj } from '@storybook/svelte';

import SegmentedBars from './SegmentedBars.svelte';

const meta = {
    title: 'Example/SegmentedBars',
    component: SegmentedBars,
    tags: ['autodocs'],
    argTypes: {
      backgroundColor: { control: 'color' },
      size: {
        control: { type: 'select' },
        options: ['small', 'medium', 'large'],
      },
      segments:{
        control: { type: 'select' },
        options: [2, 3, 4],
    },
    },
  } satisfies Meta<SegmentedBars>;
  
  export default meta;
  type Story = StoryObj<typeof meta>;
  
  // More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
  export const Primary: Story = {
    args: {
      primary: true,
      label: 'SegmentedBars',
    },
  };
  
  export const Secondary: Story = {
    args: {
      label: 'SegmentedBars',
    },
  };
  
  export const Large: Story = {
    args: {
      label: 'SegmentedBars',
    },
  };
  
  export const Small: Story = {
    args: {
      size: 'small',
      label: 'SegmentedBars',
    },
  };