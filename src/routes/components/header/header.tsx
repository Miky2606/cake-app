import { component$ } from "@builder.io/qwik";
import { NavListItems } from "./nav.items";

export default component$(() => {
  return (
    <header>
      <nav class="flex justify-between items-center p-2 font-serif text-xs text-gray-500 ">
        <div>Logo</div>
        <NavListItems />
      </nav>
    </header>
  );
});
