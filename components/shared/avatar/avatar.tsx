export interface AvatarProps {
  image?: string;
  size?: number;
  text?: string;
}

export const Avatar = ({ image, size = 48, text }: AvatarProps) => {
  return (
    <div style={{ width: size, height: size }}>
      {image ?
        <img src={image} alt={text} />
      : <span>{text}</span>}
    </div>
  );
};
