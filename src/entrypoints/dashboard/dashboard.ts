import '../app.css';
import Dashboard from "@/entrypoints/dashboard/Dashboard.svelte";
import { mount } from "svelte";

mount(Dashboard, {
  target: document.getElementById('app')!,
})
