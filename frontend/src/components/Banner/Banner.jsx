import styles from "./banner.module.css";

const Banner = () => {
    return (
        <section className={styles.banner}>
            <div className={styles.quote}>
                <div className={styles.row}>
                    <p>No fees.</p>
                    <p>No minimum deposit.</p>
                    <p>High interest rates.</p>
                </div>
                <div className={styles.row}>
                    <p>
                        Open a savings account with <br /> Argent Bank today!
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Banner;
