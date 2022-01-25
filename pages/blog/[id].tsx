import type { NextPage } from "next";
import Head from "next/head";

const BlogPostPage: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Demorga | Blog Post </title>
        <meta name="description" content="Demorga's Website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Website for Demorga will launch here 🚀</h1>

        <p>Blog Post</p>
      </main>
    </div>
  );
};

export default BlogPostPage;
