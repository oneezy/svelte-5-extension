import '../../../../app.css';
import Dashboard from "@/entrypoints/options/pages/dashboard/Dashboard.svelte";
import { mount } from "svelte";

mount(Dashboard, {
  target: document.getElementById('app')!,
})
