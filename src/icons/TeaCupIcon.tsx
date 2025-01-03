import Image from "next/image";
import Logo from "../../public/Logo.png";
import Link from "next/link";

interface TeaCupIconProps {
  size?: number;
  className?: string;
}

const TeaCupIcon = ({ size = 24, className = "" }: TeaCupIconProps) => {
  return (
    <Link href="/">
      <Image
        className={className}
        src={Logo}
        alt="Digital Brew Logo"
        width={size}
        height={size}
      />
    </Link>
  );
};

export default TeaCupIcon;
