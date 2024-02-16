import Image from "next/image";
import styles from "./singlePost.module.css";

import { Suspense } from "react";
import PostUser from "@/components/PostUser/PostUser";

const GetSinglePost = async (slug) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

  if (!res.ok) {
    throw new Error("Something went wrong");
  }
  return res.json();
};
const SinglePage = async ({ params }) => {
  const { slug } = params;
  console.log("aaaaaaaa ", slug);
  const singlePost = await GetSinglePost(slug);
  return (
    <div className={styles.container}>
      {/* {post.img && ( */}
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/792326/pexels-photo-792326.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          fill
          className={styles.img}
        />
      </div>
      {/* )} */}
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{singlePost.title}</h1>
        {/* <div className={styles.detail}>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>value</span>
          </div>
        </div> */}

        <Suspense fallback={<div>Loading...</div>}>
          <PostUser userId={singlePost.userId} />
        </Suspense>
        <div className={styles.content}>{singlePost.body}</div>
      </div>
    </div>
  );
};
export default SinglePage;
