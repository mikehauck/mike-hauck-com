"use client"
import { useEffect, useRef, useState } from "react";
import { ThemeToggle } from "./theme-toggle";
import dynamic from "next/dynamic";
import NoSSR from "@/components/no-ssr"
export function NavMenu() {

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
    var anchorTarget = document.querySelector(event.target.hash);
    console.log("anchortarget", anchorTarget);
    anchorTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="flex mt-8 items-start">
      <nav className="text-sm font-bold uppercase leading-8 flex-1 mr-8">
        <ul>
          <li className={(activeSection === 'top' || activeSection === 'about') ? 'active group' : ''}>
            <a href="/#top" className="hover:text-slate-600 group-[&.active]:text-slate-600 dark:hover:text-slate-200 dark:group-[&.active]:text-slate-200" onClick={smoothScroll}>About</a>
          </li>
          <li className={activeSection === 'projects' ? 'active group' : ''} >
            <a href="/#projects" className="hover:text-slate-600 group-[&.active]:text-slate-600 dark:hover:text-slate-200 dark:group-[&.active]:text-slate-200" onClick={smoothScroll}>Projects</a>
          </li>
          <li className={activeSection === 'experience' ? 'active group' : ''}>
            <a href="/#experience" className="hover:text-slate-600 group-[&.active]:text-slate-600 dark:hover:text-slate-200 dark:group-[&.active]:text-slate-200" onClick={smoothScroll}>Experience</a>
          </li>
          <li className={activeSection === 'contact' ? 'active group' : ''}>
            <a href="/#contact" className="hover:text-slate-600 group-[&.active]:text-slate-600 dark:hover:text-slate-200 dark:group-[&.active]:text-slate-200" onClick={smoothScroll}>Contact Me</a>
          </li>
        </ul>
      </nav>
      <div className="h-5 w-5">
        <NoSSR>
          <ThemeToggle></ThemeToggle>
        </NoSSR>
      </div>

    </div>
  )
}

// document.querySelector("#about").scrollIntoView({ behavior: 'smooth', block: 'start' });


//     

