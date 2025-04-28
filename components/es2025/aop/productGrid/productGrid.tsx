"use client";

import {
  Button,
  ButtonGroup,
  GridContainer,
  GridItem,
  ShoppingCart,
  Typography,
} from "@vorwerk/fibre-react";
import Image from "next/image";
import styles from "./productGrid.module.scss";

export interface Product {
  image: string;
  imageAlt?: string;
  title: string;
  price: string;
  originalPrice?: string;
  discount?: string;
}

export interface ProductGridProps {
  products: Product[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  return (
    <GridContainer>
      <GridItem columns={12}>
        <div className={styles.productGridContainer}>
          {products.map((product, index) => (
            <div
              key={`${product.title}-${index.toString()}`}
              className={
                index === 0 ?
                  `${styles.productCard} ${styles.spanTwoColumns}`
                : styles.productCard
              }
            >
              <div className={styles.imageContainer}>
                {product.discount && (
                  <div className={styles.discountBadge}>
                    <span className={styles.discountBadgeText}>Save</span>
                    <span className={styles.discountBadgeValue}>
                      {product.discount}
                    </span>
                  </div>
                )}
                <Image
                  src={product.image}
                  alt={product.imageAlt ?? product.title}
                  width={200}
                  height={200}
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className={styles.contentContainer}>
                <Typography
                  component="p"
                  variant="paragraph14"
                  fontWeight="bold"
                  className={styles.title}
                >
                  {product.title}
                </Typography>
                <div className={styles.priceAndCartContainer}>
                  <div className={styles.priceContainer}>
                    <div className={styles.priceContainerTopRow}>
                      <Typography
                        component="p"
                        variant="paragraph14"
                        fontWeight="regular"
                        className={
                          product.originalPrice ?
                            `${styles.price} ${styles.newPrice}`
                          : styles.price
                        }
                      >
                        {product.price}
                      </Typography>
                      {product.originalPrice && (
                        <Typography
                          component="p"
                          variant="paragraph12"
                          fontWeight="regular"
                          className={styles.originalPrice}
                        >
                          {product.originalPrice}
                        </Typography>
                      )}
                    </div>
                    <Typography
                      component="p"
                      variant="paragraph10"
                      fontWeight="regular"
                      className={styles.shippingInfo}
                    >
                      incl. VAT & shipping
                    </Typography>
                  </div>
                  <Button
                    buttonStyle="primary"
                    icon={<ShoppingCart />}
                    aria-label={`Add ${product.title} to cart`}
                    style={{ width: "32px", height: "32px" }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <ButtonGroup alignment="center">
          <Button buttonStyle="tertiary" size="medium">
            Show more
          </Button>
        </ButtonGroup>
      </GridItem>
    </GridContainer>
  );
};

export default ProductGrid;
