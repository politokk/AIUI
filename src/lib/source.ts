import { docs } from '@/.source';
import { loader } from 'fumadocs-core/source';
import { createElement } from 'react';
import { Icons } from '@/components/icons/icons';

// See https://fumadocs.vercel.app/docs/headless/source-api for more info
export const source = loader({
  // it assigns a URL to your pages
  baseUrl: '/docs',
  source: docs.toFumadocsSource(),
  icon(icon) {
    if (!icon) {
      // You may set a default icon
      return;
    }
    
    // Convert icon name to camelCase (e.g., "Heart" -> "heart")
    const iconKey = icon.charAt(0).toLowerCase() + icon.slice(1);
    
    if (iconKey in Icons) {
      const IconComponent = Icons[iconKey as keyof typeof Icons];
      return createElement(IconComponent, { className: 'size-4' });
    }
  },
});
