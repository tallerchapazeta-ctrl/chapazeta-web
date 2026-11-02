import type { Metadata } from "next";
import Link from "next/link";
import { Calendar, Clock, ArrowRight, Tag } from "lucide-react";
import { blogPosts } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { formatDate } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Novedades",
  description: "Consejos prácticos, novedades del taller y noticias del mundo automotriz. Mantenete informado con CHAPA ZETA.",
};

const categories = Array.from(new Set(blogPosts.map((p) => p.category)));

export default function NovedadesPage() {
  return (
    <>
      <section className="bg-chapa-blue pt-20 pb-32 relative">
        <div className="container-chapa text-center text-white">
          <h1 className="heading-xl mb-6">Novedades</h1>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            Consejos prácticos, novedades del taller y todo lo que necesitás saber sobre el cuidado de tu vehículo.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-chapa">
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-chapa-blue text-white rounded-full text-sm font-medium">
              <Tag className="w-4 h-4" />
              Todas
            </span>
            {categories.map((cat) => (
              <span key={cat} className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-medium hover:bg-gray-200 transition-colors cursor-pointer">
                {cat}
              </span>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts.map((post) => (
              <article key={post.slug} className="card group flex flex-col md:flex-row gap-6 overflow-hidden p-0">
                <div className="md:w-48 h-48 md:h-auto bg-gradient-to-br from-chapa-blue/20 to-chapa-blue/5 flex items-center justify-center shrink-0 relative">
                  <span className="text-4xl font-black text-chapa-blue/10">CZ</span>
                  <span className="absolute top-4 left-4 bg-chapa-yellow text-chapa-dark text-xs font-bold px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col justify-center">
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
                  <h3 className="text-xl font-bold text-chapa-dark mb-2 group-hover:text-chapa-blue transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/novedades/${post.slug}`}
                    className="inline-flex items-center text-chapa-blue font-semibold text-sm hover:underline mt-auto"
                  >
                    Leer artículo
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
