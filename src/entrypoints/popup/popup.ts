import '../app.css';
import Popup from './Popup.svelte';
import { mount } from "svelte";

mount(Popup, {
  target: document.getElementById('app')!,
})
