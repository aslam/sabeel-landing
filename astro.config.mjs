// @ts-check
import { defineConfig } from 'astro/config';

import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  site: 'https://sabeel.in',
  integrations: [
    partytown({ config: { forward: ['dataLayer.push'] } }),
  ],
});
