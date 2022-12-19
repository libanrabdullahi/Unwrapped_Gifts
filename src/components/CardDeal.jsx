import { card, ronbook } from "../assets";
import styles, { layout } from "../style";


const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Unwrapped Gifts <br className="sm:block hidden" /> Ron "Buster" Cunningham
      
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      Have you ever asked yourself, “What can I give to make this world a better place?” Your answer may lie within the talent or gift you possess.
      </p>

      
    </div>

    <div className={layout.sectionImg}>
      <img src={ronbook} alt="book" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;