import '../../app.css';
import Dashboard from "./Dashboard.svelte";
import { mount } from "svelte";

mount(Dashboard, {
  target: document.getElementById('app')!,
})
