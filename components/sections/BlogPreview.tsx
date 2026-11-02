"use client";

import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { blogPosts } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { formatDate } from "@/lib/utils";

export function BlogPreview() {
  const posts = blogPosts.slice(0, 3);

  return (
    <section className="py-20 bg-white">
      <div className="container-chapa">
        <SectionHeader
          title="Novedades y Consejos"
          subtitle="Mantenete informado sobre el cuidado de tu vehículo, novedades del taller y consejos útiles para conductores."
        />

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article key={post.slug} className="card group overflow-hidden p-0">
              <div className="h-48 bg-gradient-to-br from-chapa-blue/20 to-chapa-blue/5 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-6xl font-black text-chapa-blue/10">CZ</span>
                </div>
                <span className="absolute top-4 left-4 bg-chapa-yellow text-chapa-dark text-xs font-bold px-3 py-1 rounded-full">
                  {post.category}
                </span>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    {formatDate(post.date)}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {post.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-chapa-dark mb-2 group-hover:text-chapa-blue transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <Link
                  href={`/novedades/${post.slug}`}
                  className="inline-flex items-center text-chapa-blue font-semibold text-sm hover:underline"
                >
                  Leer más
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link href="/novedades" className="btn-outline">
            Ver todas las novedades
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
