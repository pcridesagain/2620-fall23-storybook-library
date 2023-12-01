import Input from './Input.svelte';

export default {
    title: 'Example/Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {
      border: {
        control: { type: 'select', optiona: ['blueBorder', 'redBorder', 'grayBorder']}
      }
    }
  };

export const Primary = {
  args: {
    primary: true,
    
  },
};

export const Blue = {
  args: {
    border: 'blueBorder'
  }
};

export const Red = {
  args: {
    border: 'redBorder'
  }
};

export const Gray = {
  args: {
    border: 'grayBorder'
  }
};




