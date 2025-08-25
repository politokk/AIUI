import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { source } from '@/lib/source';
import React from 'react';


export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout 
      tree={source.pageTree} 
      {...baseOptions()}
      sidebar={{
        defaultOpenLevel: 0,
        // Configure icon mapping for sidebar items
        banner: undefined,
        tabs: {
          transform: (option, node) => {
            return {
              ...option,
            };
          },
        },
      }}
    >
      {children}
    </DocsLayout>
  );
}
