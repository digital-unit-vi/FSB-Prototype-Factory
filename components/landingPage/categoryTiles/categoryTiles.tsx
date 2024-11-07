import { ComponentProps, FC, useState, useEffect } from 'react'
import CategoryTile from '@components/landingPage/categoryTile/categoryTile'
import { GridContainer, GridItem } from '@components/build-assets/libraryExport'

interface CategoryTilesProps {
  categoryTilesData: ComponentProps<typeof CategoryTile>[]
}

const CategoryTiles: FC<CategoryTilesProps> = ({ categoryTilesData }) => {
  const [columnsConfig, setColumnsConfig] = useState<
    { start: number; end: number; columns: number }[]
  >([])

  useEffect(() => {
    const numberOfTiles = categoryTilesData.length
    const columnsPerTile = 12 / numberOfTiles

    const newColumnsConfig = categoryTilesData.map((_, index) => {
      const start = index * columnsPerTile + 1 // Calculate start column based on index
      const end = start + columnsPerTile // Calculate end column based on start and span
      return { start, end, columns: columnsPerTile }
    })

    setColumnsConfig(newColumnsConfig)
  }, [categoryTilesData])

  return (
    <div>
      <GridContainer>
        {columnsConfig.map((config, index) => (
          <GridItem key={index} columns={config.columns}>
            <CategoryTile {...categoryTilesData[index]} />
          </GridItem>
        ))}
      </GridContainer>
    </div>
  )
}

export default CategoryTiles
