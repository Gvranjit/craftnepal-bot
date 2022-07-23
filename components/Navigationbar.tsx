import Image from 'next/image';
import React from 'react';
import CnLogo from '../assets/cnlogo.png';
type NavigationBarProps = { title: string };

const Navigationbar = (props: NavigationBarProps) => {
  return (
    <div className="fixed t-0 w-full bg-gradient-to-b from-teal-500  to-transparent h-14 ">
      <div className="h-full align-middle">
        <div className="float-left h-14 w-14 ">
          <Image src={CnLogo} height="100%" width="100%" alt="CraftNepal Logo" />
        </div>
        <div className="float-left grid h-full place-content-center w-fit">
          <p className="align-middle">CraftNepal Bot</p>
        </div>

        <div className="float-right h-full grid place-items-center w-fit pl-2 pr-2 hover:text-xl transition-all">
          {props.title || '%TITLE_HERE%'}
        </div>
      </div>
    </div>
  );
};

export default Navigationbar;
