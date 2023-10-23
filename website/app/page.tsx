import Image from 'next/image'
import { NavMenu } from "@/components/nav-menu";
import { Movie } from "@/components/movie";

export default function IndexPage() {

  return (
    <>
      <div id="top" data-section />

      <Movie></Movie>

      <section className="bg-background  z-10 px-16  pt-0 md:sticky md:top-0 md:h-48 md:flex-[0_0_420px] md:pt-8">
        <div className="bg-background flex h-[96] w-[75px] pt-8 ">
          <Image
            className="mr-6"
            src="/MH-Developer-Badge.png"
            width={75}
            height={96}
            alt="MikeHauck.com developer badge"
          />
          <h1 className="text-5xl font-bold dark:text-slate-300">Mike Hauck</h1>
        </div>

        <h2 className="mt-4 text-xl font-bold dark:text-slate-300">Full Stack Web and Desktop Application Developer</h2>
        <p className="mt-4 dark:text-slate-400">I&apos;m a freelance developer that builds modern, engaging applications hand tailored to meet your needs.</p>
        <NavMenu></NavMenu>
      </section>
      <main className="bg-background z-10 flex-1 px-16 dark:text-slate-400 md:pl-0">
        <section id="about" className="pt-16" data-section>
          <p>I am a software developer that has over 20 years of experience working with web and desktop application technologies. My work history has primarily focused on ASP.Net, C#, and Microsoft SQL Server projects. However, recently I have spent time working with .Net Core and Angular 2+.</p>
          <p className="mt-4">In addition, I have experience with Javascript and JQuery. I am a bit of a jack-of-all-trades and enjoy tackling technology problems, using code and third-party libraries/software to create solutions.</p>
          <p className="mt-4"> Whether your need is for a new interactive web site, data integration between systems, or feature enhancements to an existing application, I know I will find the project engaging and be productive in getting the job done.</p>
        </section>
        <section id="projects" className="bg-red-800 pt-16" data-section>
          Projects
          <div className="h-96" />
          <div className="h-96" />
          <div className="h-96" />
          <div className="h-96" />
        </section>

        <section id="experience" className="bg-green-800 pt-16" data-section>
          Experience
          <div className="h-96" />
          <div className="h-96" />
          <div className="h-96" />
          <div className="h-96" />
        </section>

        <section id="contact" className="bg-blue-800 pt-16" data-section>
          Contact Me
          <div className="h-96" />
          <div className="h-96" />
        </section>
      </main>
    </>
  )
}
