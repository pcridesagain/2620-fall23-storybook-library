import Input from './Input.svelte';

export default {
    title: 'Example/Input',
    component: Input,
    tags: ['autodocs'],
    argTypes: {
      border: {
        options: ["blue", "red", "gray"],
      }
    }
  };

export const Primary = {
  args: {
    primary: true,
    
  },
};

export const BlueBorder = {
  args: {
    border: 'blue',
  }
}


