"use client"
import { useEffect, useRef, useState } from "react";

import { ThemeToggle } from "./theme-toggle";
import NoSSR from "@/components/no-ssr"
import { Github, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import Link from "next/link";

export function NavMenu(props: any) {

  const [activeSection, setActiveSection] = useState('top');
  const sections = useRef([]);

  const handleScroll = () => {
    const pageYOffset = window.pageYOffset;
    let newActiveSection: string = "";

    sections.current.forEach((section: any) => {

      const sectionOffsetTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (section.id != "" && pageYOffset >= sectionOffsetTop && pageYOffset < sectionOffsetTop + sectionHeight) {
        newActiveSection = section.id;
        setActiveSection(newActiveSection);        
      }
    });   
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
    <div className="flex md:mt-8">
      <nav className="mr-8 flex-1 text-sm font-bold uppercase leading-8">
        <ul>
          <li className={(activeSection === 'top' || activeSection === 'about') ? 'active group' : ''}>
            <a href="/#top" className="hover:text-slate-600 dark:hover:text-slate-200  md:group-[&.active]:text-slate-600 md:dark:group-[&.active]:text-slate-200" onClick={smoothScroll}>About</a>
          </li>
          <li className={activeSection === 'projects' ? 'active group' : ''} >
            <a href="/#projects" className="hover:text-slate-600 dark:hover:text-slate-200 md:group-[&.active]:text-slate-600 md:dark:group-[&.active]:text-slate-200" onClick={smoothScroll}>Projects</a>
          </li>
          <li className={activeSection === 'experience' ? 'active group' : ''}>
            <a href="/#experience" className="hover:text-slate-600 dark:hover:text-slate-200 md:group-[&.active]:text-slate-600 md:dark:group-[&.active]:text-slate-200" onClick={smoothScroll}>Experience</a>
          </li>
          <li className={activeSection === 'contact' ? 'active group' : ''}>
            <a href="/#contact" className="hover:text-slate-600 dark:hover:text-slate-200 md:group-[&.active]:text-slate-600 md:dark:group-[&.active]:text-slate-200" onClick={smoothScroll}>Contact Me</a>
          </li>
        </ul>
      </nav>

      <div className="relative">
        <ThemeToggle onMenuPopoverOpenUpdate={props.onMenuPopoverOpenUpdate}></ThemeToggle>
        <div className="absolute bottom-0 right-0 flex">
          <Button variant="outline" className="mr-1 mt-2 px-2" aria-label="My Github profile." asChild>
            <Link href="https://github.com/mikehauck" target="_blank"> <Github className="h-4 w-4" /></Link>
          </Button>
          <Button name="LinkedIn" variant="outline" className="ml-1 mt-2 px-2" aria-label="My LinkedIn profile." asChild>
            <Link href="https://www.linkedin.com/in/mike-hauck" target="_blank"> <Linkedin className="h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
