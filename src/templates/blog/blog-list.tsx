import { Search } from "@/src/components/search";
import { useRouter } from "next/router";
import { PostCard } from "./components/post-card";
import { PostGridCard } from "./components/post-grid-card";
import { allPosts } from "contentlayer/generated";
import { Inbox } from "lucide-react";

export function BlogList() {
  const router = useRouter();
  const query = (router.query.q as string) ?? ''
  const pageTitle = query ? `Resultados de busca para "${query}"` : "Transformando seu negócio em uma loja virtual"

  const posts = query
    ? allPosts.filter((post) =>
      post.title.toLocaleLowerCase()?.includes(query.toLocaleLowerCase())
    )
    : allPosts

  // Simulate no posts
  // const posts: Post[] = []
  const hasPost = posts.length > 0

  return (
    <div className="flex flex-col py-24 flex-grow h-full">
      <header className="pb-14">
        <div className="
          container space-y-6 flex flex-col items-start 
          justify-between md:flex-row md:items-end lg:items-end">
          <div className="flex flex-col gap-4 md:px-0">
            {/* Tag */}
            <span className="
              text-body-tag text-cyan-100 w-fit rounded-md 
              text-center md:text-left py-2 px-4 bg-cyan-300">
              BLOG
            </span>

            {/* Título */}
            <h1 className="
              text-balance text-start md:text-left text-heading-lg 
              md:text-heading-xl max-w-2xl text-gray-100">
              {pageTitle}
            </h1>
          </div>

          {/* Insert Search component here */}
          <Search />
        </div>
      </header>

      {/* Listagem de posts */}
      {hasPost && (<PostGridCard>
        {posts.map((post) => (
          <PostCard
            key={post._id}
            slug={post.slug}
            title={post.title}
            description={post.description}
            image={post.image}
            date={new Date(post.date).toLocaleDateString("pt-BR")}
            author={{
              avatar: post.author.avatar,
              name: post.author.name
            }}
          />
        ))}
      </PostGridCard>)}

      {!hasPost && (
        <div className="container px-8">
          <div className="flex flex-col items-center justify-center gap-8 border-dashed border-2 border-gray-300 p-8 md:p-12 rounded-lg">
            <Inbox className="h-12 w-12 text-cyan-100" />
            <h2 className="text-heading-md text-gray-100 mb-4">
              Nenhum post encontrado
            </h2>
            <p className="text-body-sm text-gray-300">
              Parece que ainda não há posts disponíveis. Volte mais tarde!
            </p>
          </div>
        </div>
      )}
    </div>
  )
} 