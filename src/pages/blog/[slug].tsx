import { Avatar } from "@/src/components/avatar";
import { AvatarContent } from "@/src/components/avatar/avatar-content";
import { AvatarImage } from "@/src/components/avatar/avatar-image";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from "@/src/components/ui/breadcrumb";
import { allPosts } from "contentlayer/generated";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

export default function PostPage() {
  const router = useRouter();
  const slug = router.query.slug as string;
  const post = allPosts.find(
    (post) => post.slug.toLowerCase() === slug.toLowerCase()
  )!;
  const publishedDate = new Date(post?.date).toLocaleDateString('pt-BR')
  return (
    <main className="mt-32">
      <Breadcrumb >
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild className="text-action-sm">
              <Link href="/blog">Blog</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <span className="text-blue-200 text-action-sm">{post?.title}</span>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 lg:gap-12">
        <article className="bg-gray-600 rounded-lg overflow-hidden border-gray-400 border-[1px]">
          <figure className="relative aspect-[16/10] w-full overflow-hidden rounded-lg">
            <Image
              src={post?.image}
              alt={post?.title ?? 'Post image'}
              fill
              className="object-cover"
            />
            <figcaption className="text-center text-body-sm text-muted-foreground mt-2">
              {post?.title}
            </figcaption>
          </figure>

          <header className="p-4 md:p-6 lg:p-12 pb-0">
            <h1 className="mb-6 text-balance text-heading-lg md:text-heading-xl lg:text-heading-xl">
              {post?.title}
            </h1>
            <Avatar.Container>
              <AvatarImage src={post?.author.avatar} alt={post?.title}></AvatarImage>
              <AvatarContent>
                <Avatar.Title>{post?.author.name}</Avatar.Title>
                <Avatar.Description>
                  Publicado em {" "}
                  <time dateTime={post?.date}>{publishedDate}</time>
                </Avatar.Description>
              </AvatarContent>
            </Avatar.Container>
          </header>
        </article>
      </div>
    </main >
  )
}