import Image from 'next/image';
import React, { useEffect } from 'react';
import CnLogo from '../assets/cnlogo.png';
type NavigationBarProps = { title?: string };

const Navigationbar = (props: NavigationBarProps) => {
  useEffect(() => {
    window.addEventListener('scroll', onScrollHandler);
  });

  //handlers
  function onScrollHandler() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop;
    console.log('SCROLL DETECTED', distanceY);
  }
  return (
    <div className="fixed t-0 w-full bg-gradient-to-b from-teal-500  to-transparent h-14 dark:bg-red-500">
      <div className="h-full align-middle">
        <div className="float-left h-14 w-14 ">
          <Image src={CnLogo} height="100%" width="100%" alt="CraftNepal Logo" />
        </div>
        <div className="float-left grid h-full place-content-center w-fit font-bold ">
          CraftNepal Bot
        </div>

        <div className="float-right h-full grid place-items-center w-fit pl-2 pr-2 hover:text-xl transition-all">
          {props.title}
        </div>
      </div>
    </div>
  );
};

export default Navigationbar;
