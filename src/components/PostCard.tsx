import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { Post } from "@/data/posts";

export function PostCard({ post, large = false }: { post: Post; large?: boolean }) {
  return (
    <article className={`group overflow-hidden rounded-2xl border border-border bg-card transition duration-300 hover:-translate-y-1 hover:border-primary/70 ${large ? "md:grid md:grid-cols-[1.05fr_0.95fr]" : ""}`}>
      {/* @section: article-card-image */}
      <Link to={`/writing/${post.slug}`} className="block overflow-hidden bg-muted">
        <img
          src={post.image}
          alt="Dark editorial abstract visual"
          className={`w-full object-cover transition duration-500 group-hover:scale-105 ${large ? "h-72 md:h-full" : "h-52"}`}
          loading={large ? "eager" : "lazy"}
        />
      </Link>
      <div className={large ? "flex flex-col justify-between p-6 md:p-10" : "p-6"}>
        <div>
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.22em] text-muted-foreground">{post.date}</p>
          <h3 className={`${large ? "text-3xl md:text-5xl" : "text-2xl"} font-serif-display leading-tight text-card-foreground`}>
            <Link to={`/writing/${post.slug}`} className="transition hover:text-primary">
              {post.title}
            </Link>
          </h3>
          <p className="mt-4 text-sm leading-7 text-muted-foreground md:text-base">{post.excerpt}</p>
        </div>
        <Link to={`/writing/${post.slug}`} className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
          Read article <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>
    </article>
  );
}
