import { useParams, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";

const BlogPost = () => {
  const { slug } = useParams();

  const { data: post, isLoading } = useQuery({
    queryKey: ["blog-post", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("slug", slug)
        .eq("status", "published")
        .single();
      if (error) throw error;
      return data;
    },
  });

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <div className="pt-32 pb-20 px-6 max-w-3xl mx-auto animate-pulse">
          <div className="h-8 bg-accent rounded w-1/4 mb-6" />
          <div className="h-12 bg-accent rounded w-3/4 mb-4" />
          <div className="h-6 bg-accent rounded w-1/2 mb-12" />
          <div className="space-y-3">
            {[...Array(8)].map((_, i) => <div key={i} className="h-4 bg-accent rounded" />)}
          </div>
        </div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <div className="pt-32 pb-20 px-6 max-w-3xl mx-auto text-center">
          <h1 className="font-display text-4xl font-bold mb-4">Post not found</h1>
          <Link to="/blog" className="text-foreground/60 hover:text-foreground transition-colors inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <SEOHead
        title={post.title}
        description={post.excerpt || `Read ${post.title} on the OriMind blog.`}
        ogType="article"
        ogImage={post.featured_image || undefined}
      />
      <Navbar />

      <article className="pt-32 pb-20 px-6">
        <div className="max-w-3xl mx-auto">
          <Link to="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>

          <div className="flex items-center gap-3 mb-4">
            <span className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground uppercase tracking-wider">
              <Tag className="w-3 h-3" /> {post.category}
            </span>
            <span className="text-muted-foreground/30">·</span>
            <span className="flex items-center gap-1 text-xs text-muted-foreground">
              <Calendar className="w-3 h-3" />
              {new Date(post.created_at).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </span>
          </div>

          <h1 className="font-display text-4xl md:text-5xl font-800 tracking-tight mb-6">{post.title}</h1>
          {post.excerpt && <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{post.excerpt}</p>}

          {post.featured_image && (
            <img src={post.featured_image} alt={post.title} className="w-full rounded-xl mb-10 border border-border" />
          )}

          <div
            className="rich-text-editor prose-invert max-w-none text-foreground/90 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default BlogPost;
