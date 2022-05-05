import Image from "next/image";
import Link from "next/dist/client/link";
import styles from "../styles/PizzaCard.module.css";

const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/img/pizza.png" alt="" width="500" height="500" />
      <Link href="/product/:id">
      <a >
      <h1 className={styles.title}>BBQ Chicken Pizza</h1></a>
      </Link>
      <span className={styles.price}>Rs.548</span>
      <p className={styles.desc}>
      A topping of spicy barbecue sauce, diced chicken, cilantro, peppers, and onion all covered with cheese and baked to bubbly goodness! 
      </p>
    </div>
  );
};

export default PizzaCard;
