import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { getAllPosts, getPost } from "@/lib/blog";

export async function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: `${post.title} — ProTechtive LLC`,
    description: post.excerpt,
  };
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <Link href="/blog" className="text-sm text-[#2D5F7A] hover:underline inline-flex items-center gap-1">
            <svg aria-hidden="true" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
            </svg>
            All Posts
          </Link>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <span key={tag} className="text-xs font-semibold bg-[#2D5F7A]/10 text-[#2D5F7A] px-2.5 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-4xl font-bold text-[#1E4057] mb-4 leading-tight">{post.title}</h1>
        <div className="text-sm text-gray-400 mb-10">
          {post.author} &middot;{" "}
          {new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </div>

        <article className="prose prose-lg prose-slate max-w-none
          prose-headings:text-[#1E4057] prose-headings:font-bold
          prose-a:text-[#2D5F7A] prose-a:no-underline hover:prose-a:underline
          prose-strong:text-[#1E4057]
          prose-li:text-gray-600
          prose-p:text-gray-600 prose-p:leading-relaxed
          prose-hr:border-gray-200">
          <MDXRemote source={post.content} />
        </article>

        <div className="mt-16 p-8 bg-[#2D5F7A] rounded-2xl text-white text-center">
          <h2 className="text-2xl font-bold mb-3">Ready to strengthen your security?</h2>
          <p className="text-gray-300 mb-6">Schedule a free consultation and let&rsquo;s talk about your specific needs.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-[#F5C022] text-[#1E4057] font-bold px-6 py-3 rounded-lg hover:bg-[#FDD96A] transition-colors">
            Get a Free Consultation
          </Link>
        </div>
      </div>
    </div>
  );
}
