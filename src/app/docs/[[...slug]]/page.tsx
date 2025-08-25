import { source } from '@/lib/source';
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from 'fumadocs-ui/page';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { createRelativeLink } from 'fumadocs-ui/mdx';
import { getMDXComponents } from '@/mdx-components';
import { PageActions } from '@/components/page-actions';
import { Separator } from '@/components/ui/separator';
export default async function Page(props: PageProps<'/docs/[[...slug]]'>) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDXContent = page.data.body;

  return (
    <div className="flex flex-col">
      <DocsPage toc={page.data.toc} full={page.data.full} footer={{
        enabled: true,
        className: "mt-16 pt-8 border-t-2 border-fd-border/50"
      }}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription className="text-sm mb-1">
        {page.data.description}
      </DocsDescription>
      <PageActions markdownUrl={page.data.title ?? ''} githubUrl={page.data.title ?? '' } />
      <Separator />
      <DocsBody>
        <MDXContent
          components={getMDXComponents({
            a: createRelativeLink(source, page),
          })}
        />
      </DocsBody>
    </DocsPage>
    </div>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(
  props: PageProps<'/docs/[[...slug]]'>,
): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
