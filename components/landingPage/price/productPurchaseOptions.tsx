import {
  Price,
  Button,
  ShoppingCart,
} from '@components/build-assets/libraryExport'
import { FC } from 'react'
import FinancingSelect from '../financingSelect/financingSelect'
import styles from './productPurchaseOptions.module.scss'

interface ProductPurchaseOptionsProps {
  price: string
  delivery: JSX.Element
  onToggle: (isOpen: boolean) => void
  onScroll: (scrollTarget: number) => void
}

const ProductPurchaseOptions: FC<ProductPurchaseOptionsProps> = ({
  price,
  delivery,
  onToggle,
  onScroll,
}) => {
  return (
    <div className={styles.priceContainer}>
      <div className={styles.priceAndDelivery}>
        <div className={styles.price}>
          <Price size="medium" price={price} vat="incl. VAT & shipping" />
        </div>
        {delivery}
      </div>
      <FinancingSelect
        primaryButtonLabel={{
          label: 'Payment plans available',
          subLine: 'starting from 37,75 € per month',
        }}
        items={[
          {
            label: 'Pay in full',
          },
          {
            label: 'Klarna Pay in 3',
            description: 'Pay over 3 installments of 466,34 € with Klarna.',
            info: true,
          },
          {
            label: '0% Financing',
            description: 'Pay in interest-free monthly installments.',
            descriptionInColor: 'Simulate payments',
            info: true,
            slot: 'Hurry! Only until 31.12.21',
          },
          {
            label: 'Leasing',
            description: 'Lease with Option Thermomix for up to 36 months.',
            descriptionInColor: 'Simulate payments',
            info: true,
          },
        ]}
        onToggle={onToggle}
        onScroll={onScroll}
      ></FinancingSelect>
      <Button
        type="primary"
        size="large"
        iconPosition="left"
        icon={<ShoppingCart />}
      >
        Add to cart
      </Button>
    </div>
  )
}

export default ProductPurchaseOptions
