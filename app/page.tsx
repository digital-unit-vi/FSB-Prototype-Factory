import Link from "next/link";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "40px",
        height: "100vh",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>EMAIL TEMPLATES</div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "30px",
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
        <Link href="/email/light/cutter">Cutter Light</Link>
        <Link href="/email/dark/cutter">Cutter Dark</Link>
      </div>
      <div>LANDING PAGE TEMPLATES (WIP)</div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "30px",
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
      </div>
    </div>
  );
}
