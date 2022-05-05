import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>ORDER NOW!</div>
          <div className={styles.text}>+9779812345678</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
        <Link href="/">
         <a >
          <li className={styles.listItem}>Homepage</li>
          </a>
          </Link>
          <Link href="/product/:id">
         <a >
          <li className={styles.listItem}>Products</li>
          </a>
          </Link>
          <li className={styles.listItem}>Menu</li>
         <Link href="/">
         <a >
          <Image src="/img/logo.png" alt="" width="160px" height="150px"  style={{cursor: 'pointer'}}/></a>
          </Link>
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart} >
          <Link href='/cart'>
          <a >
          <Image src="/img/cart.png" alt="" width="30px" height="30px" />
          </a>
          </Link>
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
