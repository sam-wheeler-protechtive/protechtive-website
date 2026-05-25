import type { Metadata } from "next";
import Link from "next/link";
import { getAllPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — ProTechtive LLC",
  description: "Cybersecurity insights, compliance guides, and security leadership content from ProTechtive LLC.",
  openGraph: {
    title: "Blog — ProTechtive LLC",
    description: "Cybersecurity insights, compliance guides, and security leadership content from ProTechtive LLC.",
    url: "https://protechtive.net/blog",
    siteName: "ProTechtive LLC",
    images: [{ url: "/logo.png" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog — ProTechtive LLC",
    description: "Cybersecurity insights, compliance guides, and security leadership content from ProTechtive LLC.",
    images: ["/logo.png"],
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <div className="py-24 bg-gray-50 dark:bg-[#0d1b2a]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-[#1E4057] dark:text-gray-100 mb-4">Security Insights</h1>
          <p className="text-lg text-gray-500 dark:text-gray-400">
            Practical guidance on cybersecurity, compliance, and security leadership from the ProTechtive team.
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-20 text-gray-400 dark:text-gray-500">No posts yet. Check back soon.</div>
        ) : (
          <div className="space-y-8">
            {posts.map((post) => (
              <article key={post.slug} className="bg-white dark:bg-[#162435] rounded-2xl border border-gray-100 dark:border-white/10 p-8 hover:border-[#F5C022] hover:shadow-md transition-all">
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span key={tag} className="text-xs font-semibold bg-[#2D5F7A]/10 dark:bg-[#2D5F7A]/30 text-[#2D5F7A] dark:text-[#7BBCD6] px-2.5 py-1 rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-2xl font-bold text-[#1E4057] dark:text-gray-100 mb-3 hover:text-[#2D5F7A] dark:hover:text-[#7BBCD6] transition-colors">{post.title}</h2>
                </Link>
                <p className="text-gray-500 dark:text-gray-400 leading-relaxed mb-5">{post.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-400 dark:text-gray-500">
                    {post.author} &middot;{" "}
                    {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                  </div>
                  <Link href={`/blog/${post.slug}`} className="text-sm font-semibold text-[#2D5F7A] dark:text-[#7BBCD6] hover:text-[#1E4057] dark:hover:text-gray-100 inline-flex items-center gap-1">
                    Read more
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
