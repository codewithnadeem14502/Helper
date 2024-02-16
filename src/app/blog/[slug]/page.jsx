import Image from "next/image";
import styles from "./singlePost.module.css";

const SinglePage = () => {
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
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>value</span>
          </div>
        </div>
        <div className={styles.content}>decx</div>
      </div>
    </div>
  );
};
export default SinglePage;
