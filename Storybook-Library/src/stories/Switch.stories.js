import Switch from "./Switch.svelte";


export default {
  title: 'Example/Switch',
  component: Switch,
  tags: ['autodocs'],
 
}
export const Purple = {
  args: {
      purple: true,
      gray: false,
      isChecked1: true,
  }
 
};


export const Gray = {
  args: {
    
     purple: false,
     gray: true,
      isChecked2: true
  }
 
};