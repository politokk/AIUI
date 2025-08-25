import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';
import { source } from '@/lib/source';
import { Component, Home, FileText, Code, FolderOpen, BookOpen, LayoutDashboard, Terminal } from 'lucide-react';
import React from 'react';

// Map icon names to actual icon components
const iconMap = {
  Home: Home,
  Component: Component,
  FileText: FileText,
  Code: Code,
  FolderOpen: FolderOpen,
  BookOpen: BookOpen,
  LayoutDashboard: LayoutDashboard,
  Terminal: Terminal,
} as const;

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
            const icon = node.icon as keyof typeof iconMap | undefined;
            return {
              ...option,
              icon: icon && iconMap[icon] ? React.createElement(iconMap[icon], { className: "size-4" }) : undefined,
            };
          },
        },
      }}
    >
      {children}
    </DocsLayout>
  );
}
