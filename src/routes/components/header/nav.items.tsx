import { component$ } from "@builder.io/qwik";
import { type INav, nav_item } from "./nav.interface";

export const NavListItems = component$(() => {
  return (
    <ul class="flex gap-3 items-center">
      {nav_item.map((e: INav) => (
        <NavItems nav_items={e} key={e.name} />
      ))}
    </ul>
  );
});

const NavItems = component$(({ nav_items }: { nav_items: INav }) => {
  return (
    <li class="hover:hover:text-pinkSecondary">
      <a href={nav_items.link}>{nav_items.name}</a>
    </li>
  );
});
