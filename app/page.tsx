import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "30px",
        justifyContent: "center",
        alignItems: "center",
        padding: "30px",
        maxWidth: "600px",
        margin: "0 auto",
      }}
    >
      <div>EMAIL TEMPLATES</div>
      <div>
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "30px",
            textWrap: "pretty",
          }}
        >
          <Link href="/email/light/tm6/var-a">TM6 Light Variant A</Link>
          <Link href="/email/light/tm6/var-b">TM6 Light Variant B</Link>
          <Link href="/email/dark/tm6/var-a">TM6 Dark Variant A</Link>
          <Link href="/email/dark/tm6/var-b">TM6 Dark Variant B</Link>
          <Link href="/email/light/sensor/var-a">Sensor Light Variant A</Link>
          <Link href="/email/light/sensor/var-b">Sensor Light Variant B</Link>
          <Link href="/email/dark/sensor/var-a">Sensor Dark Variant A</Link>
          <Link href="/email/dark/sensor/var-b">Sensor Dark Variant B</Link>
          <Link href="/email/light/blade">Blade Light</Link>
          <Link href="/email/dark/blade">Blade Dark</Link>
        </section>
        <hr />
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "30px",
            textWrap: "pretty",
          }}
        >
          <Link href="/email/light/cutter-stressed-compromiser">
            Cutter Stressed Compromiser Light
          </Link>
          <Link href="/email/light/cutter-devoted-perfectionist">
            Cutter Devoted Perfectionist Light
          </Link>
          <Link href="/email/light/cutter-health-seeker">
            Cutter Health Seeker Light
          </Link>
          <Link href="/email/dark/cutter">Cutter Dark</Link>
        </section>
        <hr />
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "30px",
            textWrap: "pretty",
          }}
        >
          <Link href="/templates/email/light/tm6/var-a/index.html">
            Storybook TM6 Light Variant A
          </Link>
          <Link href="/templates/email/light/tm6/var-b/index.html">
            Storybook TM6 Light Variant B
          </Link>
          <Link href="/templates/email/dark/tm6/var-a/index.html">
            Storybook TM6 Dark Variant A
          </Link>
          <Link href="/templates/email/dark/tm6/var-b/index.html">
            Storybook TM6 Dark Variant B
          </Link>
          <Link href="/templates/email/light/sensor/var-a/index.html">
            Storybook Sensor Light Variant A
          </Link>
          <Link href="/templates/email/light/sensor/var-b/index.html">
            Storybook Sensor Light Variant B
          </Link>
          <Link href="/templates/email/dark/sensor/var-a/index.html">
            Storybook Sensor Dark Variant A
          </Link>
          <Link href="/templates/email/dark/sensor/var-b/index.html">
            Storybook Sensor Dark Variant B
          </Link>
          <Link href="/templates/email/light/blade/index.html">
            Storybook Blade Light
          </Link>
          <Link href="/templates/email/dark/blade/index.html">
            Storybook Blade Dark
          </Link>
        </section>
      </div>
      <div>LANDING PAGE TEMPLATES</div>
      <div>
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "30px",
            textWrap: "pretty",
          }}
        >
          <Link href="/landing-page/light/tm6/var-a">TM6 Light Variant A</Link>
          <Link href="/landing-page/light/tm6/var-b">TM6 Light Variant B</Link>
          <Link href="/landing-page/light/tm6/var-c">TM6 Light Variant C</Link>
          <Link href="/landing-page/dark/tm6/var-a">TM6 Dark Variant A</Link>
          <Link href="/landing-page/dark/tm6/var-b">TM6 Dark Variant B</Link>
          <Link href="/landing-page/dark/tm6/var-c">TM6 Dark Variant C</Link>
          <Link href="/landing-page/light/sensor">Sensor Light</Link>
          <Link href="/landing-page/dark/sensor">Sensor Dark</Link>
        </section>
        <hr />
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "30px",
            textWrap: "pretty",
          }}
        >
          <Link href="/landing-page/fsb/sensor">Sensor FSB Light</Link>
        </section>
      </div>
    </div>
  );
}
