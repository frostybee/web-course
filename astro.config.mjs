import { defineConfig } from "astro/config";
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom'
import starlightViewModes from 'starlight-view-modes'

import rehypeExternalLinks from "rehype-external-links";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from 'rehype-slug';
import starlightSidebarTopics from "starlight-sidebar-topics";

import leftSidebar from './src/config/sidebars/main-sidebar.ts'

// TODO: clean the following imports
import mdx from "@astrojs/mdx";
import starlightLinksValidator from 'starlight-links-validator'


const siteURI = 'https://frostybee.github.io';
//@see: https://astro.build/config
export default defineConfig({
  site: siteURI,
  base: "/web-course",
  integrations: [
    starlight({
      title: 'Internet Programming',
      favicon: '/images/svgrepo-com.svg',
      social: {
        github: 'https://github.com/frostybee/web-course',
      },
      //TODO: add the head property.
      defaultLocale: "en",
      components: {
        Header: './src/components/Header.astro',
      },
      customCss: [
        "./src/styles/custom.css",
        "./src/styles/Linkable-headings.css",
        "./src/styles/sidebar-topics.css",
        "./src/styles/asides.css",
      ],
      lastUpdated: true,
      plugins: [
        starlightImageZoom(),
        starlightViewModes(),
        starlightSidebarTopics(
          [
            ...leftSidebar
          ]
        )
      ],
      // plugins: [
      //   starlightLinksValidator({
      //     errorOnFallbackPages: false,
      //   }),
      // ],
    }
    ),
  ],
  markdown: {
    rehypePlugins: [
      rehypeSlug,
      rehypeHeadingIds,
      [rehypeAutolinkHeadings, { behavior: 'wrap' }],
      [rehypeExternalLinks,
        {
          content: {
            type: "text",
            value: " ↗",
          },
          properties: {
            target: "_blank",
          },
          rel: ["noopener"],
        },
      ],
    ],
  },
});
