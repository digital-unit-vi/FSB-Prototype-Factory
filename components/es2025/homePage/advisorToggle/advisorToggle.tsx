import { Button, ButtonGroup, CloseCircleFilled } from "@vorwerk/fibre-react";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import styles from "./advisorToggle.module.scss";

/**
 * Toggle component that switches between a profile card (Thermomix®)
 * and a find‑advisor form (Kobold). Designed for Next.js 13/14 (app or pages router).
 */
const AdvisorToggle: React.FC = () => {
  type Tab = "thermomix" | "kobold";
  const [activeTab, setActiveTab] = useState<Tab>("thermomix");

  // Handle tab change with animation
  const handleTabChange = (tab: Tab) => {
    if (tab === activeTab) return;
    setActiveTab(tab);
  };

  return (
    <section className={styles.container}>
      {/* Toggle */}
      <div
        className={styles.toggle}
        role="tablist"
        aria-label="Advisor type selector"
      >
        <div className={styles.toggleTrack}>
          <div
            className={`${styles.toggleIndicator} ${activeTab === "thermomix" ? styles.left : styles.right}`}
          />
          <button
            className={
              activeTab === "thermomix" ?
                `${styles.toggleBtn} ${styles.active}`
              : styles.toggleBtn
            }
            onClick={() => handleTabChange("thermomix")}
            role="tab"
            aria-selected={activeTab === "thermomix"}
          >
            Thermomix®
          </button>
          <button
            className={
              activeTab === "kobold" ?
                `${styles.toggleBtn} ${styles.active}`
              : styles.toggleBtn
            }
            onClick={() => handleTabChange("kobold")}
            role="tab"
            aria-selected={activeTab === "kobold"}
          >
            Kobold
          </button>
        </div>
      </div>

      {/* Active panel with animation container */}
      <div className={styles.panelContainer}>
        {activeTab === "thermomix" ?
          <ThermomixPanel />
        : <KoboldPanel />}
      </div>
    </section>
  );
};

/* -------------------------------------------------------------------------- */
/* Sub‑components                              */
/* -------------------------------------------------------------------------- */

const ThermomixPanel: React.FC = () => (
  <div className={styles.panel}>
    <Image
      className={styles.avatar}
      src="/homePage/avatar_button.png" // ⇦ replace with your asset path
      alt="Mary Cook"
      width={80}
      height={80}
    />

    <h4 className={styles.subtitle}>Your Thermomix® Advisor</h4>
    <h2 className={styles.title}>Mary Cook</h2>

    <ButtonGroup alignment="center">
      <Link href="/es-2025/aop">
        <Button size="large" buttonStyle="primary">
          Visit profile
        </Button>
      </Link>
    </ButtonGroup>
  </div>
);

const KoboldPanel: React.FC = () => {
  const [postalCode, setPostalCode] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [number, setNumber] = useState("");

  const handleClearInput = (
    setter: React.Dispatch<React.SetStateAction<string>>
  ) => {
    setter("");
  };

  return (
    <div className={styles.panel}>
      <div className={styles.avatarsRow}>
        {[
          "/homePage/avatar_stack1.png",
          "/homePage/avatar_stack2.png",
          "/homePage/avatar_stack3.png",
        ].map((src) => (
          <Image
            key={src}
            src={src}
            alt="Advisor avatar"
            width={48}
            height={48}
            className={styles.smallAvatar}
          />
        ))}
      </div>

      <h2 className={styles.title}>Find your soon-to-be Vorwerk advisor</h2>

      <form
        className={styles.form}
        onSubmit={(e) => {
          e.preventDefault();
          // TODO: handle real submit
          console.log({ postalCode, city, street, number });
        }}
      >
        <label>
          <span>Postal code *</span>
          <div className={styles.inputContainer}>
            <input
              type="text"
              inputMode="numeric"
              name="postal"
              autoComplete="postal-code"
              required
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            />
            {postalCode && (
              <button
                type="button"
                className={styles.clearButton}
                onClick={() => handleClearInput(setPostalCode)}
                aria-label="Clear postal code"
              >
                <CloseCircleFilled />
              </button>
            )}
          </div>
        </label>

        <label>
          <span>City *</span>
          <div className={styles.inputContainer}>
            <input
              type="text"
              name="city"
              autoComplete="address-level2"
              required
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            {city && (
              <button
                type="button"
                className={styles.clearButton}
                onClick={() => handleClearInput(setCity)}
                aria-label="Clear city"
              >
                <CloseCircleFilled />
              </button>
            )}
          </div>
        </label>

        <label>
          <span>Street</span>
          <div className={styles.inputContainer}>
            <input
              type="text"
              name="street"
              autoComplete="street-address"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
            {street && (
              <button
                type="button"
                className={styles.clearButton}
                onClick={() => handleClearInput(setStreet)}
                aria-label="Clear street"
              >
                <CloseCircleFilled />
              </button>
            )}
          </div>
        </label>

        <label>
          <span>Number</span>
          <div className={styles.inputContainer}>
            <input
              type="text"
              name="number"
              inputMode="numeric"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            {number && (
              <button
                type="button"
                className={styles.clearButton}
                onClick={() => handleClearInput(setNumber)}
                aria-label="Clear number"
              >
                <CloseCircleFilled />
              </button>
            )}
          </div>
        </label>

        <button type="submit" className={styles.primaryBtn}>
          Find an advisor now!
        </button>
      </form>
    </div>
  );
};

export default AdvisorToggle;
