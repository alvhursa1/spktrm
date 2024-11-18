import React from 'react';
import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <div className="flex flex-col h-screen pt-[2%] z-[100] bg-black">
      {/* Flex 1: Contenido principal con más altura */}
      <div className="flex flex-[3] w-full pr-5">
        {/* Columna izquierda */}
        <div className="flex-1 flex flex-col justify-center pl-8">

        </div>

        {/* Columna derecha: Menú */}
        <div className="flex-1 relative pb-[2%]">
          {/* Borde superior izquierda */}
          <div className="absolute top-0 left-0 space-y-0 text-left pr-2">
            <a href="/" className="block">Home</a>
            <a href="/contact" className="block">Contact</a>
            <a href="/work" className="block">Work</a>
            <a href="/about-us" className="block">About</a>
          </div>
          {/* Borde superior central */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 space-y-0 text-left">
            <a href="/artists" className="block">Artists</a>
            <a href="#" className="block">Artifact</a>
            <a href="https://www.instagram.com/spektrum.agency/" className="block">Instagram</a>
            <a href="https://www.linkedin.com/company/spektrumagency/" className="block">Linkedin</a>
          </div>
          {/* Borde superior derecha */}
          <div className="absolute top-0 right-0 space-y-0 pl-4 text-right">
            <a href="mailto:andymoraw@spektrumagency.com" className="block">andymoraw@spektrumagency.com</a>
            <a href="/faqs" className="block">FAQs</a>
          </div>

          {/* Borde inferior derecha */}
          <div className="absolute bottom-0 right-0 space-y-0 pl-4">

          </div>
          {/* Borde inferior central */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 space-y-2 text-left">

          </div>
          {/* Borde inferior izquierda */}
          <div className="absolute bottom-0 left-0 space-y-0 pr-4">

          </div>
        </div>
      </div>

      {/* Flex 2: Logo ajustado con margen superior del 1% y tamaño al 95% */}
      <div className="flex justify-end items-end flex-[1] mt-[1%]">
        <Image
          src="/LgoFterSpektrum.svg"
          alt="Spektrum Logo"
          width={680}
          height={170}
          className="max-h-full object-contain object-right-bottom"
        />
      </div>

      {/* Flex 3: Footer */}
      <div className="w-full px-[0.2%] relative z-10">
        <p className="font-satoshi-light text-[0.625rem] text-left">
          All content on this website is protected by international copyright laws: images are copyright © the named artists, logos are copyright © the respective companies, other content is copyright © 2021- Spektrum; no content may be reproduced without prior written consent from the copyright holder.
        </p>
        <p className="font-satoshi-light text-[0.625rem] text-left">
          Spektrum is the trading name of Spektrum Agency ING., a brand registered in United States of America. Registered office: 123 William Street, New York, NY 10038-3804. Brand id: 10-6295703.
        </p>
      </div>
    </div>
  );
};

export default Footer;