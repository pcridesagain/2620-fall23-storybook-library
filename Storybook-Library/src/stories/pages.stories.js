import Page from "./pages.svelte";

export default {
  title: "Form",
  tags: ["autodocs"],
  component: Page,
  parameters: {
    layout: "fullscreen",
    name: "Select Action",
    act1: "Download",
    act2: "Save to favorites",
    act3: "Comment",
    act4: "Share",
    act5: "Report this",
  },
};

export const Forms = {};
