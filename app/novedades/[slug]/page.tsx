import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Calendar, Clock, User, Tag } from "lucide-react";
import { blogPosts } from "@/lib/data";
import { formatDate } from "@/lib/utils";

interface Props {
  params: { slug: string };
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: "No encontrado" };
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return notFound();

  return (
    <>
      <section className="bg-chapa-blue pt-20 pb-32 relative">
        <div className="container-chapa text-white">
          <Link href="/novedades" className="inline-flex items-center text-blue-200 hover:text-white mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver a novedades
          </Link>
          <span className="inline-block bg-chapa-yellow text-chapa-dark text-sm font-bold px-4 py-1 rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="heading-xl max-w-4xl">{post.title}</h1>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      <article className="py-20 bg-white">
        <div className="container-chapa max-w-4xl">
          <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8 pb-8 border-b border-gray-100">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {formatDate(post.date)}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              {post.readTime} de lectura
            </span>
            <span className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              {post.category}
            </span>
          </div>

          <div className="prose prose-lg max-w-none prose-headings:text-chapa-dark prose-headings:font-bold prose-a:text-chapa-blue hover:prose-a:text-chapa-blue-light prose-strong:text-chapa-dark">
            {post.content.split("\n").map((paragraph, i) => {
              if (paragraph.startsWith("## ")) {
                return <h2 key={i} className="text-2xl font-bold mt-8 mb-4">{paragraph.replace("## ", "")}</h2>;
              }
              if (paragraph.startsWith("- ")) {
                return <li key={i} className="ml-6 text-gray-700 mb-2">{paragraph.replace("- ", "")}</li>;
              }
              if (paragraph.trim() === "") return null;
              return <p key={i} className="text-gray-700 leading-relaxed mb-4">{paragraph}</p>;
            })}
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100">
            <Link href="/novedades" className="btn-outline">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Ver más novedades
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
