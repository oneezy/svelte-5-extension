import '../../app.css';
import Test from "./Test.svelte";
import { mount } from "svelte";

mount(Test, {
  target: document.getElementById('app')!,
})
