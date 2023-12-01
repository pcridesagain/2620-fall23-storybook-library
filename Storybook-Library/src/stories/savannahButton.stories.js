import savannahButton from "./savannahButton.svelte"

// More on how to set up stories at: https://storybook.js.org/docs/svelte/writing-stories/introduction
const meta = {
  title: "Example/savannahButton",
  component: savannahButton,
  tags: ["autodocs"],
  argTypes: {
    side: "right",
    size: "short",
    style: "filledIn",
    /*
    backgroundColor: { control: 'color' },
    size: {
      control: { type: 'select' },
      options: ['small', 'medium', 'large'],
      */
  },
} //satisfies Meta<Button>;

export default meta

// More on writing stories with args: https://storybook.js.org/docs/svelte/writing-stories/args
export const LongFilledIn = {
  args: {
    side: "right",
    size: "long",
    style: "filledIn",
  },
}

export const LongOutline = {
  args: {
    side: "right",
    size: "long",
    style: "outline",
  },
}

export const ShortFilledIn = {
  args: {
    side: "right",
    size: "short",
    style: "filledIn",
  },
}

export const ShortOutline = {
  args: {
    side: "right",
    size: "short",
    style: "outline",
  },
}
