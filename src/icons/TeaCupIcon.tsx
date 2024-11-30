import Image from "next/image";
import Logo from "../../public/Logo.png";

interface TeaCupIconProps {
  size?: number;
}

const TeaCupIcon = ({ size = 8 }: TeaCupIconProps) => {
  return (
    <Image src={Logo} alt="Digital Brew Logo" width={size} height={size} />
  );
};

export default TeaCupIcon;
