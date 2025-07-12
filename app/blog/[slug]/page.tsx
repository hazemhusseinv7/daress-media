import { BlocksRenderer } from "@strapi/blocks-react-renderer";

import { fetchCMS } from "@/lib/cms";

import { BlogType } from "@/types/cms";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const response = await fetchCMS<{ data: BlogType[] }>(
    `/blogs?populate=Category&populate=Image&filters[Slug][$eq]=${slug}`
  );

  const post = response.data[0] || [];

  return (
    <main className="relative overflow-hidden bg-linear-to-t from-blue-700/10 to-blue-900/10 pb-80">
      {/* Gradients */}
      <div
        aria-hidden="true"
        className="flex absolute -top-96 start-1/2 transform -translate-x-1/2 rtl:translate-x-1/2"
      >
        <div className="bg-linear-to-r from-violet-300/50 to-purple-100 blur-3xl w-100 h-175 rotate-[-60deg] transform -translate-x-40 dark:from-violet-900/50 dark:to-purple-900" />
        <div className="bg-linear-to-tl from-blue-50 via-blue-100 to-blue-50 blur-3xl w-[1440px] h-200 rounded-fulls origin-top-left -rotate-12 -translate-x-60 dark:from-indigo-900/70 dark:via-indigo-900/70 dark:to-blue-900/70" />
      </div>
      {/* End Gradients */}

      {/* Blog Article */}
      <div className="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
        <div className="max-w-2xl mt-40">
          {/* Content */}
          <div className="space-y-5 md:space-y-8">
            <div className="space-y-3">
              <h1 className="text-2xl font-bold md:text-3xl dark:text-white">
                {post.Title}
              </h1>
            </div>
            <article className="prose">
              <BlocksRenderer content={post?.Content} />
            </article>
            <div>
              {post.Category?.map((category, i) => (
                <span
                  key={i}
                  className="m-1 inline-flex items-center gap-1.5 py-2 px-3 rounded-full text-sm bg-gray-100 text-gray-800 hover:bg-gray-200 focus:outline-hidden focus:bg-gray-200 dark:bg-neutral-800 dark:text-neutral-200 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700"
                >
                  {category.Name}
                </span>
              ))}
            </div>
          </div>
          {/* End Content */}
        </div>
      </div>
      {/* End Blog Article */}
    </main>
  );
}
