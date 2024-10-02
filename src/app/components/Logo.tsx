import Link from 'next/link'; // Correct import pour Next.js
import Image from 'next/image';
import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="fixed top-[20px] left-[10px] z-50">
      <Link href="/">
        <Image
          src="/logo_frontalier_pro.png"
          alt="logo frontalier pro"
          className="w-28 object-cover"
          width={112}  
          height={112}
        />
      </Link>
    </div>
  );
};

export default Logo;
