import defaultMdxComponents from 'fumadocs-ui/mdx';
import type { MDXComponents } from 'mdx/types';
import { Accordion, Accordions } from '@/components/accordion';
import { Banner } from '@/components/banner';
import { Callout } from '@/components/callout';
import { Card, Cards } from '@/components/card';
import { CodeBlock } from '@/components/codeblock';
import { File, Files, Folder } from '@/components/files';
import { GithubInfo } from '@/components/github-info';
import { ImageZoom } from '@/components/image-zoom';
import { InlineTOC } from '@/components/inline-toc';
import { Step, Steps } from '@/components/steps';
import { Tab, Tabs } from '@/components/tabs';
import { TypeTable } from '@/components/type-table';
import { Installer } from '@/components/installer';
import { Installation } from '@/components/installation';

// use this function to get MDX components, you will need it for rendering MDX
export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...components,
    // Custom components
    Accordion,
    Accordions,
    Banner,
    Callout,
    Card,
    Cards,
    CodeBlock,
    File,
    Files,
    Folder,
    GithubInfo,
    ImageZoom,
    InlineTOC,
    Step,
    Steps,
    Tab,
    Tabs,
    TypeTable,
    Installer,
    Installation,
  };
}
