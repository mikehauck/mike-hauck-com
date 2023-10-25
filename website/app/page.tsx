"use client"

import Image from 'next/image'
import { NavMenu } from "@/components/nav-menu";
import { Movie } from "@/components/movie";
import NoSSR from "@/components/no-ssr"
import { Menu } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { useState } from 'react';

export default function IndexPage() {
  const [menuPopoverOpen, setMenuPopoverOpen] = useState(false);

  const handleMenuPopoverOpenUpdate = (menuPopoverOpen: boolean) => {    
    setMenuPopoverOpen(menuPopoverOpen);
  }

  return (

    <>
      <div id="top" data-section />

      <div className="h-[180px] w-full md:h-[320px]">
        <NoSSR>
          <Movie></Movie>
        </NoSSR>
      </div>

      <section className="bg-background sticky top-0 z-20 h-auto w-full p-4 md:flex-[0_0_420px] md:order-1">
        <div className="bg-background  flex">
          <div className="mr-4 min-h-[96] min-w-[75px]">
            <Image
              className="mr-6"
              src="/MH-Developer-Badge.png"
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

      <section className="bg-background z-10 px-4 md:flex-[0_0_420px] md:sticky md:left-0 md:top-0 md:h-auto  md:order-3">
        <h2 className="mt-4 text-xl font-bold dark:text-slate-300">Full Stack Web and Desktop Application Developer</h2>
        <p className="mt-4 dark:text-slate-400">I&apos;m a freelance developer that builds modern, engaging applications hand tailored to meet your needs.</p>
        <div className="in-view hidden md:block">
          <NavMenu onMenuPopoverOpenUpdate={handleMenuPopoverOpenUpdate}></NavMenu>
        </div>
      </section>

      <main className="bg-background z-10 flex-1 px-4 dark:text-slate-400  md:order-2">
        <section id="about" className="scroll-mt-32" data-section>
          <p>I am a software developer that has over 20 years of experience working with web and desktop application technologies. My work history has primarily focused on ASP.Net, C#, and Microsoft SQL Server projects. However, recently I have spent time working with .Net Core and Angular 2+.</p>
          <p className="mt-4">In addition, I have experience with Javascript and JQuery. I am a bit of a jack-of-all-trades and enjoy tackling technology problems, using code and third-party libraries/software to create solutions.</p>
          <p className="mt-4"> Whether your need is for a new interactive web site, data integration between systems, or feature enhancements to an existing application, I know I will find the project engaging and be productive in getting the job done.</p>
        </section>
        <section id="projects" className="mt-4 h-[600px] scroll-mt-32" data-section>
          Projects
        </section>

        <section id="experience" className="mt-4 h-[600px] scroll-mt-32" data-section>
          Experience
        </section>

        <section id="contact" className="mt-4 min-h-[calc(100vh-128px)] scroll-mt-32" data-section>
          Contact Me
        </section>
      </main>
    </>
  )
}
