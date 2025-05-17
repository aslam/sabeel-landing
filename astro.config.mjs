// @ts-check
// import { defineConfig } from 'astro/config';
// import partytown from '@astrojs/partytown';

// // https://astro.build/config
// export default defineConfig({
//   site: 'https://sabeel.in',
//   integrations: [
//     partytown({
//       config: {
//         forward: ['dataLayer.push', 'gtag'],
//         // Only enable debug mode in development
//         debug: false,
//         resolveUrl: (url) => {
//           const gtmUrls = [
//             'www.googletagmanager.com',
//             'googletagmanager.com',
//             'analytics.google.com',
//             'www.google-analytics.com',
//           ];

//           if (gtmUrls.includes(url.hostname)) {
//             const finalUrl = new URL(
//               `https://${url.hostname}${url.pathname}${url.search}`
//             );
//             // Set no-cors mode for debug endpoints
//             if (url.pathname.includes('/debug/')) {
//               return {
//                 url: finalUrl,
//                 options: {
//                   mode: 'no-cors',
//                 },
//               };
//             }
//             return finalUrl;
//           }
//           return url;
//         },
//       },
//     }),
//   ],
// });
