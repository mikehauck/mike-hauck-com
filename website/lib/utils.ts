import tailwindConfig from '@/tailwind.config';
import resolveConfig from 'tailwindcss/resolveConfig';

const fullConfig = resolveConfig(tailwindConfig);

import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { ScreensConfig } from 'tailwindcss/types/config';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type KeyValuePair<K extends keyof any = string, V = string> = Record<K, V>
//export const getBreakpointValue = (value: string): number =>

//  +fullConfig.theme.screens[value].slice(
//    0,
//    fullConfig.theme.screens[value].indexOf('px')
//  );

//const getBreakpointValue = (value: string): number => parseInt(fullConfig.theme!.screens[value].replace('px', '') as string, 10);

export const getCurrentBreakpoint = (): string => {  
  var currentBreakpoint = "xs";
  Object.entries(fullConfig.theme!.screens!)
    .forEach(([key, value]) => {
      var bpWidth = parseInt((value as string).replace("px", ""));
      if (window.innerWidth >= bpWidth)
        currentBreakpoint = key;
    });
  return currentBreakpoint;
};
