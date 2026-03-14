import { useState } from "react";

const postsData = [
{
id: 1,
title: "The Future of Autonomous AI",
category: "AI Research",
image: "/blog/blog1.jpg",
excerpt:
"Autonomous AI systems will transform how applications, research and content are built."
},
{
id: 2,
title: "Building infinall.ai",
category: "Product",
image: "/blog/blog2.jpg",
excerpt:
"Inside the architecture of infinall.ai — the autonomous execution engine."
},
{
id: 3,
title: "How Multi-Agent AI Systems Work",
category: "Engineering",
image: "/blog/blog3.jpg",
excerpt:
"Understanding how coordinated AI agents collaborate to execute complex workflows."
}
];

export default function Blog() {

const [posts] = useState(postsData);

return ( <div className="min-h-screen bg-black text-white px-6 py-24">

  <div className="max-w-6xl mx-auto">

    <div className="mb-16">
      <p className="text-sm text-gray-500 uppercase tracking-widest mb-3">
        Insights & Updates
      </p>

      <h1 className="text-6xl font-bold mb-6">
        Blog
      </h1>

      <p className="text-gray-400 max-w-xl">
        Thoughts on autonomous intelligence, AI research, product updates,
        and the future of execution.
      </p>
    </div>


    <div className="grid md:grid-cols-3 gap-10">

      {posts.map((post) => (

        <div
          key={post.id}
          className="bg-zinc-900 rounded-xl overflow-hidden border border-zinc-800 hover:border-zinc-600 transition"
        >

          <img
            src={post.image}
            alt={post.title}
            className="w-full h-48 object-cover"
          />
          <div className="p-6">

            <span className="text-xs text-cyan-400 uppercase tracking-wide">
              {post.category}
            </span>

            <h2 className="text-xl font-semibold mt-2 mb-3">
              {post.title}
            </h2>

            <p className="text-gray-400 text-sm">
              {post.excerpt}
            </p>

          </div>

        </div>

      ))}

    </div>

  </div>

</div>

);
}
