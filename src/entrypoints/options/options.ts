import '../../app.css';
import Options from "@/entrypoints/options/Options.svelte";
import { mount } from "svelte";

mount(Options, {
  target: document.getElementById('app')!,
})
