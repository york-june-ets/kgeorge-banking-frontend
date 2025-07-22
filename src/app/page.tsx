import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
     <div className={styles.homepage}>
        <div className={styles.slide1}>
          <div className={styles.header}>
            <div className={styles.logo}>
              <img className={styles.logo_img} src="/pb_logo_icon.png" alt="piggy bank logo"></img>
              <h1 className={styles.logo_text}><span className={styles.piggy}>piggy</span><span className={styles.bank}>bank</span></h1>
            </div>
            <div className={styles.buttons}>
              <button className={styles.loginButton}>Login</button>
              <button className={styles.signupButton}>Sign Up</button>
            </div>
          </div>
          <div className={styles.main_content}>
            <div className={styles.intro_text}>
              <h1 className={styles.title}>Oink if You Love Saving!</h1>
              <p className={styles.body}>With Piggy Bank, each savings goal is brought to life through your very own piggie. Watch them grow happier 
                                        as you save more — from grumpy to grinning. Your finances, your goals, your herd of happy little pigs.</p>
            </div>
            <img className={styles.piggy_bank_lady} src="/lady_holding_piggy_bank.png"></img>
          </div>
        </div>
     </div>
  );
}
