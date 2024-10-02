import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link'; 

interface CtaProps {
  text: string;
  href: string;
}

const Cta: React.FC<CtaProps> = ({ text, href }) => {
  return (
    <>
      <Link href={href}>
        <div className='relative hero-card border shadow-xl border-[#440910] border-solid  cursor-pointer rounded-lg w-[320px] h-[100px] flex justify-center items-center overflow-hidden group bg-[#31081F]'>
          <p className='poppins text-white font-light text-md pr-4 z-20'>{text}</p>
          <ArrowUpRight className='w-[20px] text-white z-20 transform transition-transform duration-500 ease-out group-hover:translate-x-1 group-hover:-translate-y-1' />
          <div className="halo-on-hover z-10 absolute w-0 h-0 rounded-full  opacity-20 group-hover:w-[400px] group-hover:h-[400px] group-hover:translate-x-[100px] group-hover:opacity-40 transition-all duration-700 ease-out">
          </div>
          <div className='halo-effect z-10 absolute top-0 rounded-full :w-[400px] h-[400px]  opacity-40 '></div>
          <div className='halo-effect absolute w-[400px] h-[400px] rounded-full opacity-40 translate-x-[100px]'></div>
        </div>
      </Link>
    </>
  );
};

export default Cta;
