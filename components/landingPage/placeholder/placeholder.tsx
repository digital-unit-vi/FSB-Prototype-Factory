import styles from "./placeholder.module.scss";

const Placeholder = ({ text, dark }: { text: string; dark?: boolean }) => {
  return (
    <div className={`${styles.placeholder} ${dark ? styles.dark : ""}`}>
      {text}
    </div>
  );
};

export default Placeholder;
