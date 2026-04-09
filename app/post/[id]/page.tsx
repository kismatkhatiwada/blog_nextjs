import { prisma } from "@/app/utils/db";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

async function getData(id: string) {
  const data = await prisma.blogPost.findUnique({
    where: {
      id: id,
    },
  });

  if (!data) {
    return notFound();
  }

  return data;
}

type Params = Promise<{ id: string }>;

export default async function IdPage({ params }: { params: Params }) {
  const { id } = await params;
  const data = await getData(id);

  return (
    <div className="max-w-3xl mx-auto py-8 px-4">
      <Link href={"/"} className="btn btn-neutral">
        Back to post
      </Link>
      <div className="mb-8 mt-6">
        <h1 className="text-3xl font-bold tracking-tight mb-4">{data.title}</h1>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="relative size-10 overflow-hidden rounded-full">
              <Image
                src={data.authorImage}
                alt="author"
                fill
                className="object-cover"
              />
            </div>
            <p className="font-medium">{data.authorName}</p>
          </div>
          <p className="text-sm text-gray-500">
            {data.createdAt.toDateString()}
          </p>
        </div>
      </div>
      <div className="relative h-[400px] w-full mb-8 overflow-hidden rounded-lg">
        <Image src={data.imageUrl} alt="image" fill className="object-cover" priority />
      </div>
      <p className="card w-full bg-base-100 card-md shadow-sm border border-gray-200 p-3">{data.content}</p>
    </div>
  );
}
