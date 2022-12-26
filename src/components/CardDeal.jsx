import { card, ronbook } from "../assets";
import styles, { layout } from "../style";


const CardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Unwrapped Gifts  <br className="sm:block hidden" /> 
      
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
      "I hope that as you read you will find the strength of character necessary to bring out what is best in you and share it with others. You are important; the gifts inside you need to be shared if you have not shared them already. I hope that this book finds its way to you if you need it and it brings out the best in you!"
      </p>

      
    </div>

    <div className={layout.sectionImg}>
      <img src={ronbook} alt="book" className="w-[100%] h-[100%]" />
    </div>
  </section>
);

export default CardDeal;