import { ComponentProps, FC, useState, useEffect } from 'react'
import CategoryTile from '@components/landingPage/categoryTile/categoryTile'
import { GridContainer, GridItem } from '@vorwerk/fibre-react'

const MAX_NUM_GRID_COL = 12

interface CategoryTilesProps {
  categoryTilesData: ComponentProps<typeof CategoryTile>[]
}

const CategoryTiles: FC<CategoryTilesProps> = ({ categoryTilesData }) => {
  const [columnsConfig, setColumnsConfig] = useState<
    { start: number; end: number; columns: number }[]
  >([])

  useEffect(() => {
    const numberOfTiles = categoryTilesData.length
    const columnsPerTile = MAX_NUM_GRID_COL / numberOfTiles

    const newColumnsConfig = categoryTilesData.map((_, index) => {
      const start = index * columnsPerTile + 1 // Calculate start column based on index
      const end = Math.min(start + columnsPerTile, MAX_NUM_GRID_COL) // Calculate end column based on start and span
      return { start, end, columns: columnsPerTile }
    })

    setColumnsConfig(newColumnsConfig)
  }, [categoryTilesData])

  return (
    <GridContainer>
      {columnsConfig.map((config, index) => (
        <GridItem key={index} columns={config.columns}>
          <CategoryTile {...categoryTilesData[index]} />
        </GridItem>
      ))}
    </GridContainer>
  )
}

export default CategoryTiles
