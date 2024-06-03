import Spacer from "@components/shared/spacer/spacer";
import styles from "./textBlock.module.scss";

export default function TextBlock({
  headline,
  p1,
  p2,
  dark,
}: Readonly<{
  headline: string;
  p1: string;
  p2?: string;
  dark?: boolean;
}>) {
  const processedText = headline.replace(/\\n/g, "\n");
  return (
    <div className={`${dark ? styles.dark : ""} ${styles.container}`}>
      <div className={styles.headline}>
        {processedText.split("\n").map((line, index) => (
          <span key={index}>
            {line}
            <br />
          </span>
        ))}
      </div>
      <Spacer size={16} />
      <p className={styles.text}>{p1}</p>
      {p2 && (
        <>
          <br />
          <p className={styles.text}>{p2}</p>
        </>
      )}
    </div>
  );
}
