import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ImageLinkProps {
  link: string;
  icon: string;
}

const ImageLink: React.FC<ImageLinkProps> = ({ link, icon }) => {
  return (
    <Link href={link ? link : ""}>
      {icon === "twitter" ?
        <Image src="/x.svg" height={20} width={20} alt={icon} /> :
        icon === "linkedin" ?
          <Image src="/ln.svg" height={20} width={20} alt={icon} /> :
          icon === "dribble" ?
            <Image src="/dr.svg" height={20} width={20} alt={icon} /> :
            <Image src="/git.svg" height={20} width={20} alt={icon} />
      }
    </Link>
  );
}

export default ImageLink;