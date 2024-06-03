import styles from "./Table.module.scss";
export default function Table({ dark }: { dark?: boolean }) {
  return (
    <div className={`${styles.container} ${dark ? styles.dark : ""}`}>
      <div className={styles.cell}>
        <div className={styles.dateWrapper}>
          <p>½</p>
          <p>year</p>
        </div>
        <p>You have crushed ice twice per week</p>
      </div>
      <hr />
      <div className={styles.cell}>
        <div className={styles.dateWrapper}>
          <p>1</p>
          <p>year</p>
        </div>
        <p>You have ground cheese three times per week</p>
      </div>
      <hr />
      <div className={styles.cell}>
        <div className={styles.dateWrapper}>
          <p>3.5</p>
          <p>years</p>
        </div>
        <p>You cut hard vegetables four times per week</p>
      </div>
    </div>
  );
}
