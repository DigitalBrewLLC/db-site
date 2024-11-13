import Image from "next/image";
import teaCupIcon from "../../public/TeaCup.png";

interface TeaCupIconProps {
  size?: number;
}

const TeaCupIcon = ({ size = 8 }: TeaCupIconProps) => {
  return (
    <Image
      src={teaCupIcon}
      alt="Digital Brew Logo"
      width={size}
      height={size}
    />
  );
};

export default TeaCupIcon;
