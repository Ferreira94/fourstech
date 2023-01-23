import { GraphQLClient, gql } from 'graphql-request';
import { GetStaticPaths, GetStaticProps } from 'next';
import Image from 'next/image';
import { ParsedUrlQuery } from 'querystring';

const graphcms = new GraphQLClient(
  'https://api-sa-east-1.hygraph.com/v2/cld6rdc1n21tw01t2f9qa1stf/master'
);

const QUERY = gql`
  query Post($slug: String!) {
    post(where: { slug: $slug }) {
      id
      title
      slug
      datePublished
      author {
        id
        name
        avatar {
          url
        }
      }
      content {
        html
      }
      image {
        id
        url
      }
    }
  }
`;

const SLUGLIST = gql`
  {
    posts {
      slug
    }
  }
`;

interface IPostProps {
  id: string;
  title: string;
  slug: string;
  datePublished: Date;
  content: {
    html: string;
  };
  author: {
    name: string;
    avatar: {
      url: string;
    };
  };
  image: {
    url: string;
  };
}

interface IPostsProps {
  posts: IPostProps[];
}

interface IHomeProps {
  post: IPostProps;
}

interface IParams extends ParsedUrlQuery {
  slug: string;
}

export default function Post({ post }: IHomeProps) {
  return (
    <main className="max-w-screen">
      <Image
        src={post.image.url}
        width={400}
        height={200}
        alt=""
        className="w-full h-80"
      />
      <div className="px-40 py-10">
        <h2 className="text-white text-3xl mt-0">{post.title}</h2>
        <div
          className="text-gray-100"
          dangerouslySetInnerHTML={{ __html: post.content.html }}
        />
      </div>
    </main>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const { posts } = await graphcms.request<IPostsProps>(SLUGLIST);

  return {
    paths: posts.map((post) => ({ params: { slug: post.slug } })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { slug } = context.params as IParams;
  const data = await graphcms.request(QUERY, { slug });
  const post = data.post;

  return {
    props: {
      post,
    },
    revalidate: 10,
  };
};
