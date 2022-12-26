import { defineConfig } from 'astro/config';

// https://astro.build/config
import partytown from "@astrojs/partytown";

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
import alpinejs from "@astrojs/alpinejs";

// https://astro.build/config
export default defineConfig({
  integrations: [partytown(), tailwind(), sitemap(), alpinejs()]
});