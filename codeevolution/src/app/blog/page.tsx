import { Metadata } from "next";
import { Suspense } from "react";
import Loading from "./loading";

export const metadata: Metadata = {
  title: {
    absolute: "Blog",
  },
};

const BlogContent = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000)); // Delay 1 detik
  return <div>Blog Content</div>;
};

const BlogPage = async () => {
  return (
    <div>
      <h1>Blog Page</h1>

      <Suspense fallback={<Loading />}>
        <BlogContent />
      </Suspense>
    </div>
  );
};

export default BlogPage;
