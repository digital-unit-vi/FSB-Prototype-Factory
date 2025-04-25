import Image from "next/image";

export interface AvatarProps {
  image?: string;
  size?: number;
  text?: string;
}

export const Avatar = ({ image, size = 48, text = "" }: AvatarProps) => {
  return (
    <div style={{ width: size, height: size }}>
      {image ?
        <Image src={image} alt={text} width={size} height={size} priority />
      : <span>{text}</span>}
    </div>
  );
};
