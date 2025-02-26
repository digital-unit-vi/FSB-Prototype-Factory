import {
  Button,
  ButtonGroup,
  GridContainer,
  GridItem,
  Price,
  Typography,
} from "@vorwerk/fibre-react";
import styles from "./productBlock.module.scss";

interface ProductBlockProps {
  darkMode?: boolean;
  headline?: string;
  price?: string;
  ctaText?: string;
  image: string;
  imageAlt: string;
}

const ProductBlock = ({
  darkMode,
  headline,
  price,
  ctaText,
  image,
  imageAlt,
}: ProductBlockProps) => {
  return (
    <div
      className={`${styles.productBlockWrap} ${darkMode ? styles.darkMode : ""}`}
    >
      <article className={styles.productBlockWrap__container}>
        <div className={styles.productBlockWrap__inner}>
          <GridContainer>
            <GridItem startXL={3} endXL={7}>
              <div className={styles.productBlockWrap__image}>
                <img src={image} alt={imageAlt} />
              </div>
            </GridItem>
            <GridItem columnsXL={4}>
              <div className={styles.productBlockWrap__content}>
                <Typography component="p" variant="h4" fontWeight="bold">
                  {headline}
                </Typography>
                <div className={styles.productBlockWrap__shippingWrapper}>
                  <Price size="large" price={price || ""} />
                  <Typography
                    component="p"
                    variant="paragraph10"
                    fontWeight="regular"
                  >
                    Shipping starts 7 April 2025. Longer delivery times
                    expected.
                  </Typography>
                </div>
                <div data-observe="true" className={styles.btnWrap}>
                  <ButtonGroup sizing="fill">
                    <Button size="large" buttonStyle="primary">
                      {ctaText}
                    </Button>
                  </ButtonGroup>
                </div>
              </div>
            </GridItem>
          </GridContainer>
        </div>
      </article>
    </div>
  );
};

export default ProductBlock;
