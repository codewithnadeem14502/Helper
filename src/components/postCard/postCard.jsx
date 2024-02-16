import Image from "next/image";
import styles from "./postCard.module.css";
import Link from "next/link";

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/792326/pexels-photo-792326.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            fill
            className={styles.img}
          />
        </div>

        <span className={styles.date}>
          {/* {post.createdAt?.toString().slice(4, 16)} */} 110:23434
        </span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>body</p>
        <Link className={styles.link} href={`/blog/post`}>
          READ MORE
        </Link>
      </div>
    </div>
  );
};

export default PostCard;