import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.jpg" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            PizzaMandu, WELL BAKED SLICE OF PIZZA.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            Twenty Fourty
            <br />Baneshor
            <br /> 01-4487596
          </p>
          <p className={styles.text}>
           RoadHouse
            <br /> Jhamsikhel
            <br /> 01-4487456
          </p>
          <p className={styles.text}>
            AT's Burger
            <br /> NewBaneshor
            <br />01-4456596
          </p>
          <p className={styles.text}>
            Burger House
            <br /> Durbarmarg
            <br /> 01-4434596
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00AM – 10:00PM
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 11:00AM – 8:00PM
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
