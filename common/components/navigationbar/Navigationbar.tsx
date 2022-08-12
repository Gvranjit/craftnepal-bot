import Image from 'next/image';
import React, { useEffect } from 'react';
import CnLogo from '../../../assets/cnlogo2.png';
import { FaMoon as DarkIcon, FaSun as LightIcon } from 'react-icons/fa';
import { useNavigationBar } from './navigationbar.bloc';
type NavigationBarProps = { title?: string };

const NavigationBar = (props: NavigationBarProps) => {
  const { onThemeSwitchHandler, theme } = useNavigationBar();

  return (
    <div
      className="fixed t-0 w-full bg-gradient-to-b from-background-tertiary  to-transparent h-14"
      id="main-box"
    >
      <div className="h-full align-middle">
        <div className="float-left h-14 w-14 p-2 ">
          <Image src={CnLogo} alt="CraftNepal Logo" />
        </div>
        <div className="float-left grid h-full place-content-center w-fit font-bold ">
          CraftNepal Bot
        </div>

        <div className="float-right h-full grid place-items-center w-fit pl-2 pr-2 hover:text-xl transition-all">
          {props.title}
        </div>
        <div className="grid float-right h-full place-content-center">
          <div
            className="rounded-xl p-1 hover:bg-slate-100 dark:hover:bg-slate-500"
            onClick={onThemeSwitchHandler}
          >
            {theme === 'light' ? <DarkIcon /> : <LightIcon />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavigationBar;
