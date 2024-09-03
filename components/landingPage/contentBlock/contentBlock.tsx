import {
  GridContainer,
  GridItem,
} from "@components/build-assets/libraryExport";
import style from "./contentBlock.module.scss";

export interface ContentBlockProps {
  mediaAlignment?: "left" | "right";
  media: JSX.Element;
  headline: JSX.Element;
  paragraph: JSX.Element;
  buttonGroup: JSX.Element;
}

export const ContentBlock = ({
  mediaAlignment = "left",
  media,
  headline,
  paragraph,
  buttonGroup,
}: ContentBlockProps) => {
  return (
    <>
      {mediaAlignment === "right" ? (
        <GridContainer>
          <GridItem columns={6}>
            <div className={style.contentContainerRight}>
              <div>
                {headline}
                {paragraph}
              </div>
              <div>{buttonGroup}</div>
            </div>
          </GridItem>
          <GridItem columns={6}>
            <div className={style.mediaContainer}>{media}</div>
          </GridItem>
        </GridContainer>
      ) : (
        <GridContainer>
          <GridItem columns={6}>
            <div className={style.mediaContainer}>{media}</div>
          </GridItem>
          <GridItem columns={6}>
            <div className={style.contentContainerLeft}>
              <div>
                {headline}
                {paragraph}
              </div>
              <div>{buttonGroup}</div>
            </div>
          </GridItem>
        </GridContainer>
      )}
    </>
  );
};
