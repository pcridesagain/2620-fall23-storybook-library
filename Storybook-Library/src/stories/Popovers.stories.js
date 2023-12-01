import Popovers from "./Popovers.svelte";

export default {
    title: 'Example/Popovers',
    component: Popovers,
    tags: ['autodocs'],
    args: {
       headingMessage: "Remove Item?",
        bodyMessage: "Are you sure you want to remove this item from your cart?",
        primaryButtonValue: "Sure",
        secondaryButtonValue: 'No, thanks',
        buttonBgColor: "bg-indigo-600",
        buttonTextColor:"text-gray-400",
        buttonHover : "bg-indigo-800",
        h1Color : "text-gray-50",
        backgroundColor: 'bg-gray-800'
      },
  };

  export const Dark_Theme = {
    args: {
      primary: true,
    //   placeholder: 'Add Username',
    },
  };

  export const Light_Theme = {
    args: {
        h1Color: 'text-black',
        headingMessage: "Oops! Something went wrong",
        bodyMessage: "Please try again later.",
        primaryButtonValue: "Okay",
        secondaryButtonValue: '',
        buttonBgColor: "bg-indigo-200",
        buttonTextColor:"text-black",
        buttonHover : "Button Hover Color",
        backgroundColor: 'bg-gray-200'
    },
  };