import Image from 'next/image';
import React from 'react';
import CnLogo from '../assets/cnlogo.png';
type NavigationBarProps = { title: string };

const Navigationbar = (props: NavigationBarProps) => {
  return (
    <div className="fixed t-0 w-full bg-gradient-to-b from-teal-500  to-transparent h-14 grid grid-cols-2 place-content-left ">
      <div className="grid-cols-2">
        <div className="grid">
          <div className="grid h-14 w-14">
            <Image
              src={CnLogo}
              height="100%"
              width="100%"
              alt="CraftNepal Logo"
              className="inline-block"
            />
          </div>
        </div>
        <div className="grid">CraftNepal Discordbot</div>
      </div>

      <div className="grid place-items-center w-fit">{props.title || '%TITLE_HERE%'}</div>
    </div>
  );
};

export default Navigationbar;
