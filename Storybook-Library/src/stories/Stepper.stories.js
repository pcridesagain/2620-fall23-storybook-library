import Stepper from "./Stepper.svelte"

export default {
    title: 'Example/Stepper',
    component: Stepper,
    tags: ['autodocs'],

    argTypes: {
      backgroundColor: { control: 'color' },
      size: { control: { type: 'select'}, options: ['small', 'medium', 'large'] },
      color: { control: 'color' } }
    }

  export const Small = {
    args: {
        size: 'small',
        color: '#fff',
        backgroundColor: 'black'
      },
  }

  export const Medium = {
    args: {
        size: 'medium',
        color: '#fff',
        backgroundColor: 'black'
      },
  }

  export const Large = {
    args: {
        size: 'large',
        color: '#fff',
        backgroundColor: 'black'
      },
  }