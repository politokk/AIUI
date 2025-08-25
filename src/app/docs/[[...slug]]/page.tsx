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
import { Icons } from '@/components/icons/icons';
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
      <DocsTitle className='text-3xl text-subtle-foreground/80 font-semibold tracking-tight'>
        <div className="flex flex-row items-center gap-2">
          {page.data.icon && Icons[page.data.icon as keyof typeof Icons] && (
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
              {(() => {
                const IconComponent = Icons[page.data.icon as keyof typeof Icons];
                return <IconComponent className="w-5 h-5 text-blue-600 dark:text-blue-400" />;
              })()}
            </div>
          )}
          {page.data.title}
        </div>
      </DocsTitle>
      <DocsDescription className="text-lg mb-1">
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
