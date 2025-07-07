import {
  CaretDown,
  CaretUp,
  Checkmark,
  Info,
  Typography,
} from "@vorwerk/fibre-react";
import { useEffect, useRef, useState } from "react";
import styles from "./financingSelect.module.scss";

interface FinancingSelectProps {
  primaryButtonLabel: {
    label: string;
    subLine: string;
  };
  items: {
    label: string;
    description?: string;
    descriptionInColor?: string;
    info?: boolean;
    slot?: string;
  }[];
  onToggle?: (isOpen: boolean) => void;
  onScroll?: (scrollTarget: number) => void;
}
const FinancingSelect = ({
  primaryButtonLabel,
  items,
  onToggle,
  onScroll,
}: FinancingSelectProps) => {
  const [isOpen, setOpen] = useState(false);
  const [animationState, setAnimationState] = useState<
    "fadeIn" | "fadeOut" | null
  >(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const selectRef = useRef<HTMLDivElement | null>(null);

  const handleToggle = () => {
    const newState = !isOpen;
    setOpen(newState);
    setAnimationState(newState ? "fadeIn" : "fadeOut");
    if (onToggle) onToggle(newState);
  };

  const handleSelectOption = (optionTitle: string) => {
    setSelectedOption(optionTitle);
    setAnimationState("fadeOut");
    setOpen(false);
    if (onToggle) onToggle(false);
  };

  useEffect(() => {
    if (isOpen && selectRef.current) {
      const financingSelectElement = selectRef.current;
      const addCartButton = selectRef.current
        .nextElementSibling as HTMLElement | null;
      if (addCartButton) {
        const financingSelectRect =
          financingSelectElement.getBoundingClientRect();
        const buttonRect = addCartButton.getBoundingClientRect();

        const viewportHeight = window.innerHeight;

        // Determine if FinancingSelect or Add to Cart button is out of view
        const isFinancingSelectTopOutOfView = financingSelectRect.top < 0;
        const isFinancingSelectBottomOutOfView =
          financingSelectRect.bottom > viewportHeight;
        const isButtonOutOfView = buttonRect.bottom > viewportHeight;
        if (
          isFinancingSelectTopOutOfView ||
          isFinancingSelectBottomOutOfView ||
          isButtonOutOfView
        ) {
          const scrollTarget =
            isFinancingSelectTopOutOfView ?
              financingSelectRect.top - 16 // Add a margin of 16px
            : (financingSelectRect.height > viewportHeight ?
                financingSelectRect.bottom
              : buttonRect.bottom) -
              viewportHeight +
              16;
          window.scrollBy({
            top: scrollTarget,
            behavior: "smooth",
          });
          if (onScroll) onScroll(scrollTarget);
        }
      }
    }
  }, [isOpen, onScroll]);

  return (
    <div className={styles.financingContainer} ref={selectRef}>
      <button
        type="button"
        className={`${styles.financingSelect} ${isOpen ? styles.isClicked : ""}`}
        onClick={handleToggle}
        id="dropdown-button"
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-controls="dropdown-menu"
      >
        <div className={styles.buttonLabelWithIcon}>
          {selectedOption && (
            <div className={styles.checkMakerIcon}>
              <Checkmark />
            </div>
          )}
          <div className={styles.buttonLabel}>
            <Typography variant="paragraph16" fontWeight="bold">
              <span>{selectedOption ?? primaryButtonLabel.label}</span>
            </Typography>
            {!selectedOption && (
              <Typography variant="paragraph16" fontWeight="regular">
                {primaryButtonLabel.subLine}
              </Typography>
            )}
          </div>
        </div>
        <span className={styles.financingCaret}>
          {isOpen ?
            <CaretUp />
          : <CaretDown />}
        </span>
      </button>
      <ul
        className={`${styles.dropdownMenu} ${
          animationState === "fadeIn" ? styles.fadeIn : styles.fadeOut
        }`}
        id="dropdown-menu"
      >
        {items.map((item) => (
          <li key={item.label} className={styles.dropdownMenuItem}>
            <label className={styles.radioLabel}>
              <input
                type="radio"
                name="financingOption"
                value={item.label}
                checked={selectedOption === item.label}
                onChange={() => {
                  handleSelectOption(item.label);
                }}
                className={styles.radioInput}
              />
              <span className={styles.radioCustom}></span>
              <div className={styles.labelWrapper}>
                <div className={styles.textInfoContainer}>
                  <div>
                    <Typography variant="paragraph16" fontWeight="medium">
                      {item.label}
                    </Typography>
                    {item.description && (
                      <Typography variant="paragraph12" fontWeight="regular">
                        {item.description}{" "}
                        {item.descriptionInColor && (
                          <span style={{ color: "#00ac46" }}>
                            {item.descriptionInColor}
                          </span>
                        )}
                      </Typography>
                    )}
                  </div>
                  {item.info && (
                    <div className={styles.infoIcon}>
                      <Info />
                    </div>
                  )}
                </div>
                {item.slot && (
                  <div className={styles.badge}>
                    <Typography variant="paragraph14" fontWeight="medium">
                      {item.slot}
                    </Typography>
                  </div>
                )}
              </div>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FinancingSelect;
