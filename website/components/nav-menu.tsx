"use client"
import { useEffect, useRef, useState } from "react";

import { ThemeToggle } from "./theme-toggle";
import NoSSR from "@/components/no-ssr"

export function NavMenu(props: any) {

  const [activeSection, setActiveSection] = useState('top');
  const sections = useRef([]);

  const handleScroll = () => {
    const pageYOffset = window.pageYOffset;
    let newActiveSection: string = "";
    
    sections.current.forEach((section: any) => {
      
      const sectionOffsetTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (pageYOffset >= sectionOffsetTop && pageYOffset < sectionOffsetTop + sectionHeight) {
        newActiveSection = section.id;        
      }
    });
        
    setActiveSection(newActiveSection);
  };

  useEffect(() => {
    sections.current = document.querySelectorAll('[data-section]') as unknown as Array<never>;
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const smoothScroll = (event: any) => {    
    event.preventDefault();
    props.onMenuPopoverOpenUpdate(false);

    var anchorTarget = document.querySelector(event.target.hash);    
    anchorTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="flex h-auto items-start md:mt-8">
      <nav className="mr-8 flex-1 text-sm font-bold uppercase leading-8">
        <ul>
          <li className={(activeSection === 'top' || activeSection === 'about') ? 'active group' : ''}>
            <a href="/#top" className="hover:text-slate-600 dark:hover:text-slate-200 dark:group-[&.active]:text-slate-200 md:group-[&.active]:text-slate-600" onClick={smoothScroll}>About</a>
          </li>
          <li className={activeSection === 'projects' ? 'active group' : ''} >
            <a href="/#projects" className="hover:text-slate-600 dark:hover:text-slate-200 dark:group-[&.active]:text-slate-200 md:group-[&.active]:text-slate-600" onClick={smoothScroll}>Projects</a>
          </li>
          <li className={activeSection === 'experience' ? 'active group' : ''}>
            <a href="/#experience" className="hover:text-slate-600 dark:hover:text-slate-200 dark:group-[&.active]:text-slate-200 md:group-[&.active]:text-slate-600" onClick={smoothScroll}>Experience</a>
          </li>
          <li className={activeSection === 'contact' ? 'active group' : ''}>
            <a href="/#contact" className="hover:text-slate-600 dark:hover:text-slate-200 dark:group-[&.active]:text-slate-200 md:group-[&.active]:text-slate-600" onClick={smoothScroll}>Contact Me</a>
          </li>
        </ul>
      </nav>

      <NoSSR>
        <ThemeToggle onMenuPopoverOpenUpdate={props.onMenuPopoverOpenUpdate}></ThemeToggle>
      </NoSSR>

    </div>
  )
}
