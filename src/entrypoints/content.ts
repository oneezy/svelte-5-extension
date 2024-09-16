import '../app.css';
import Content from "@/entrypoints/content/Content.svelte";
import { mount } from "svelte";

export default defineContentScript({
  allFrames: true,
  matches: ['*://*/*'],
  main() {
    // const appVersion = browser?.runtime?.getManifest()?.version || "0.0.0-dev"
    console.log('Hello content.');

    mount(Content, {
      target: document.body
    })
  }
});
