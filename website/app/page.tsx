"use client"

import { useState } from 'react';
import Image from 'next/image'

import { Menu } from 'lucide-react';
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"


import { NavMenu } from "@/components/nav-menu";
import { Experience } from '@/components/experience';
import { Projects } from '@/components/projects';
import { Contact } from '@/components/contact';

export default function IndexPage() {
  const [menuPopoverOpen, setMenuPopoverOpen] = useState(false);

  const handleMenuPopoverOpenUpdate = (menuPopoverOpen: boolean) => {
    setMenuPopoverOpen(menuPopoverOpen);
  }

  const smoothScroll = (event: any) => {
    event.preventDefault();

    var anchorTarget = document.querySelector(event.target.hash);
    anchorTarget.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <section className="bg-background sticky top-0 z-20 h-32 p-4  md:col-start-1 md:row-start-2 md:p-16  md:pr-8">
        <div className="bg-background  flex">
          <div className="mr-4 min-h-[96] min-w-[75px]">
            <Image
              className="mr-6"
              src="/mh-developer-badge.png"
              width={75}
              height={96}
              alt="MikeHauck.com developer badge"
            />
          </div>

          <h1 className="justify-start text-5xl font-bold dark:text-slate-300">Mike Hauck</h1>

          <div className="flex w-full items-start justify-end md:hidden">
            <Popover open={menuPopoverOpen} onOpenChange={setMenuPopoverOpen}>
              <PopoverTrigger><Menu /></PopoverTrigger>
              <PopoverContent>
                <NavMenu onMenuPopoverOpenUpdate={handleMenuPopoverOpenUpdate} ></NavMenu>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </section>

      <section className="bg-background z-10 h-40 px-4 md:sticky md:top-32 md:col-start-1 md:row-start-2 md:mt-32 md:p-16 md:pr-8">
        <h2 className="mt-4 text-xl font-bold dark:text-slate-300">Full Stack Web and Desktop Application Developer</h2>
        <p className="mt-4 dark:text-slate-400">I&apos;m a freelance developer that builds modern, engaging applications hand tailored to meet your needs.</p>
        <div id="nav-on-page" className="hidden md:block">
          <NavMenu onMenuPopoverOpenUpdate={handleMenuPopoverOpenUpdate}></NavMenu>
        </div>
      </section>

      <main className="bg-background z-10  px-4 dark:text-slate-400 md:col-start-2 md:row-start-2 md:row-end-3 md:p-16 md:pl-8">
        <section id="about" className="bg-background mt-4 scroll-mt-32 md:mt-0 md:px-4" data-section>
          <p>
            Hi, I am Mike Hauck, a developer from Denver, Colorado that has over 20 years of experience working with web and desktop application technologies.
            My work history has primarily focused on ASP.Net, C#, and Microsoft SQL Server projects.
            However, over the last few years, I have spent time working with .Net Core (3.1, 5 - 7), Angular, React, NextJS, MySql and MongoDB, all on Linux servers.
          </p>
          <p className="mt-4">
            I am a bit of a jack-of-all-trades and enjoy tackling technology problems, using code along with third-party libraries amd software to create solutions.
            Whether your need is for a new interactive web site, data integration between systems, or feature enhancements to an existing application,
            I know I will find the project engaging and be productive in getting the job done.  If you have a project you would like to discuss,
            <a href="#contact" onClick={smoothScroll}> contact me!</a>
          </p>
        </section>
        <section id="projects" className="scroll-mt-32 border border-transparent md:scroll-mt-0" data-section>
          <div className="mt-4 md:mt-16">
            <Projects></Projects>
          </div>
        </section>

        <section id="experience" className="scroll-mt-32 border border-transparent md:scroll-mt-0" data-section>
          <div className="mt-4 md:mt-16">
            <Experience></Experience>
          </div>
        </section>

        <section id="contact" className="min-h-[calc(100vh-128px)] scroll-mt-32 border border-transparent md:min-h-screen  md:scroll-mt-0" data-section>
          <div className="mt-4 md:mt-16">
            <Contact></Contact>
          </div>          
        </section>
      </main>

    </>
  )
}
