import Link from 'next/link';
import Image from 'next/image';
import { formatDistance, subDays } from 'date-fns';
import { ptBR } from 'date-fns/locale';

interface IBlogCardProps {
  id: string;
  title: string;
  author: {
    name: string;
    avatar: {
      url: string;
    };
  };
  image: {
    url: string;
  };
  datePublished: Date;
  slug: string;
}

export default function BlogCard({
  id,
  title,
  author,
  image,
  datePublished,
  slug,
}: IBlogCardProps) {
  const formattedDate = formatDistance(
    subDays(new Date(datePublished), 3),
    new Date(),
    {
      addSuffix: true,
      locale: ptBR,
    }
  );

  return (
    <div className="w-80 max-w-[100%]" key={id}>
      <Link href={`/blog/posts/${slug}`} className="hover:opacity-70">
        <div className="">
          <Image
            src={image.url}
            width={400}
            height={200}
            alt=""
            priority
            quality={100}
          />
        </div>

        <div className="border border-t-0 border-gray-100 p-2">
          <h2 className="text-gray-100 text-lg m-0">{title}</h2>
          <div className="flex gap-2 mt-2 items-center">
            <Image
              src={author.avatar.url}
              alt=""
              width={50}
              height={50}
              priority
              quality={100}
              className="rounded-full"
            />
            <div className="text-gray-300 flex flex-col">
              <strong>{author.name}</strong>
              <span className="text-xs">{formattedDate}</span>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
