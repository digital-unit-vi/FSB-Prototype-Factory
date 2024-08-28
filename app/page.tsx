import Link from "next/link";
import styles from "./page.module.scss";

export default function Home() {
  const Button = ({ text }: { text: string }) => {
    return (
      <>
        <span className={styles.text}>{text}</span>
        <svg
          className={styles.arrow}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </>
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px",
        maxWidth: "400px",
        margin: "0 auto",
      }}
    >
      <div>EMAIL TEMPLATES</div>
      <div style={{ width: "100%" }}>
        <section
          style={{
            display: "grid",
            gap: "16px",
          }}
        >
          <Link
            href="/templates/email/light/tm6/var-a/index.html"
            className={styles.button}
          >
            <Button text="Storybook TM6 Light Variant A" />
          </Link>
          <Link
            href="/templates/email/light/tm6/var-b/index.html"
            className={styles.button}
          >
            <Button text="Storybook TM6 Light Variant B" />
          </Link>
          <Link
            href="/templates/email/dark/tm6/var-a/index.html"
            className={styles.button}
          >
            <Button text="Storybook TM6 Dark Variant A" />
          </Link>
          <Link
            href="/templates/email/dark/tm6/var-b/index.html"
            className={styles.button}
          >
            <Button text="Storybook TM6 Dark Variant B" />
          </Link>
          <Link
            href="/templates/email/light/sensor/var-a/index.html"
            className={styles.button}
          >
            <Button text="Storybook Sensor Light Variant A" />
          </Link>
          <Link
            href="/templates/email/light/sensor/var-b/index.html"
            className={styles.button}
          >
            <Button text="Storybook Sensor Light Variant B" />
          </Link>
          <Link
            href="/templates/email/dark/sensor/var-a/index.html"
            className={styles.button}
          >
            <Button text="Storybook Sensor Dark Variant A" />
          </Link>
          <Link
            href="/templates/email/dark/sensor/var-b/index.html"
            className={styles.button}
          >
            <Button text="Storybook Sensor Dark Variant B" />
          </Link>
          <Link
            href="/templates/email/light/blade/index.html"
            className={styles.button}
          >
            <Button text="Storybook Blade Light" />
          </Link>
          <Link
            href="/templates/email/dark/blade/index.html"
            className={styles.button}
          >
            <Button text="Storybook Blade Dark" />
          </Link>
        </section>
        <hr />
        <section
          style={{
            display: "grid",
            gap: "16px",
          }}
        >
          <Link href="/email/light/tm6/var-a" className={styles.button}>
            <Button text="TM6 Light Variant A" />
          </Link>
          <Link href="/email/light/tm6/var-b" className={styles.button}>
            <Button text="TM6 Light Variant B" />
          </Link>
          <Link href="/email/dark/tm6/var-a" className={styles.button}>
            <Button text="TM6 Dark Variant A" />
          </Link>
          <Link href="/email/dark/tm6/var-b" className={styles.button}>
            <Button text="TM6 Dark Variant B" />
          </Link>
          <Link href="/email/light/sensor/var-a" className={styles.button}>
            <Button text="Sensor Light Variant A" />
          </Link>
          <Link href="/email/light/sensor/var-b" className={styles.button}>
            <Button text="Sensor Light Variant B" />
          </Link>
          <Link href="/email/dark/sensor/var-a" className={styles.button}>
            <Button text="Sensor Dark Variant A" />
          </Link>
          <Link href="/email/dark/sensor/var-b" className={styles.button}>
            <Button text="Sensor Dark Variant B" />
          </Link>
          <Link href="/email/light/blade" className={styles.button}>
            <Button text="Blade Light" />
          </Link>
          <Link href="/email/dark/blade" className={styles.button}>
            <Button text="Blade Dark" />
          </Link>
        </section>
        <hr />
        <section
          style={{
            display: "grid",
            gap: "16px",
          }}
        >
          <Link
            href="/email/light/cutter-stressed-compromiser"
            className={styles.button}
          >
            <Button text="Cutter Stressed Compromiser Light" />
          </Link>
          <Link
            href="/email/light/cutter-devoted-perfectionist"
            className={styles.button}
          >
            <Button text="Cutter Devoted Perfectionist Light" />
          </Link>
          <Link
            href="/email/light/cutter-health-seeker"
            className={styles.button}
          >
            <Button text="Cutter Health Seeker Light" />
          </Link>
          <Link href="/email/dark/cutter" className={styles.button}>
            <Button text="Cutter Dark" />
          </Link>
        </section>
      </div>
      <div>LANDING PAGE TEMPLATES</div>
      <div style={{ width: "100%" }}>
        <section
          style={{
            display: "grid",
            gap: "16px",
          }}
        >
          <Link
            href="/landing-page/light/tm6/var-a-sb"
            className={styles.button}
          >
            <Button text="TM6 Light Variant A" />
          </Link>
          <Link
            href="/landing-page/light/tm6/var-b-sb"
            className={styles.button}
          >
            <Button text="TM6 Light Variant B" />
          </Link>
          <Link
            href="/landing-page/light/tm6/var-c-sb"
            className={styles.button}
          >
            <Button text="TM6 Light Variant C" />
          </Link>
          <Link href="/landing-page/dark/tm6/var-a" className={styles.button}>
            <Button text="TM6 Dark Variant A" />
          </Link>
          <Link href="/landing-page/dark/tm6/var-b" className={styles.button}>
            <Button text="TM6 Dark Variant B" />
          </Link>
          <Link href="/landing-page/dark/tm6/var-c" className={styles.button}>
            <Button text="TM6 Dark Variant C" />
          </Link>
          <Link href="/landing-page/light/sensor" className={styles.button}>
            <Button text="Sensor Light" />
          </Link>
          <Link href="/landing-page/dark/sensor" className={styles.button}>
            <Button text="Sensor Dark" />
          </Link>
        </section>
        {/* <hr />
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "30px",
            textWrap: "pretty",
          }}
        >
          <Link href="/landing-page/fsb/sensor">Sensor FSB Light</Link>
        </section> */}
      </div>
    </div>
  );
}
