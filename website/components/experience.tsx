import { ExternalLink } from "lucide-react";
import Link from "next/link";

export function Experience() {
  return (
    <>
      <div className="mb-2 flex w-48 text-slate-300 md:px-4">
        <h2 className="w-48 flex-[0_0_10rem] font-bold">Experience</h2>
        <Link href="/mh-resume.pdf" target="_blank" className="flex items-center">
          <div className="mr-2">Résumé</div>
          <ExternalLink className="mb-1 h-5 w-5"></ExternalLink>
        </Link>
      </div>

      <ul className="grid gap-y-6">
        <li className="flex rounded-xl border-t border-transparent md:px-4 md:py-3 md:hover:border-t md:hover:border-slate-700 md:hover:bg-slate-800">
          <div className="flex-[0_0_10rem] text-sm leading-8">Jan 2019 - Present</div>
          <div>
            <div>Freelance Developer - MikeHauck.com</div>
            <div>What I do at MikeHauck.com</div>
            <div>Technologies Used</div>
          </div>
        </li>

        <li className="flex rounded-xl border-t border-transparent md:px-4 md:py-3 md:hover:border-t md:hover:border-slate-700 md:hover:bg-slate-800">
          <div className="flex-[0_0_10rem] text-sm leading-8">Mar 2017 – Dec 2018</div>
          <div>
            <div>Application Developer - QuantHound LLC</div>
            <div>What I did</div>
            <div>Technologies Used</div>
          </div>
        </li>

        <li className="flex rounded-xl border-t border-transparent md:px-4 md:py-3 md:hover:border-t md:hover:border-slate-700 md:hover:bg-slate-800">
          <div className="flex-[0_0_10rem] text-sm leading-8"> Mar 2007 – Mar 2017</div>
          <div>
            <div>Senior Developer - Association Technology Solutions</div>
            <div>What I did</div>
            <div>Technologies Used</div>
          </div>
        </li>

        <li className="flex rounded-xl border-t border-transparent md:px-4 md:py-3 md:hover:border-t md:hover:border-slate-700 md:hover:bg-slate-800">
          <div className="flex-[0_0_10rem] text-sm leading-8">Jul 2001 – Mar 2007</div>
          <div>
            <div>Web Application Developer - Financial Planning Association</div>
            <div>What I did</div>
            <div>Technologies Used</div>
          </div>
        </li>

        <li className="flex rounded-xl border-t border-transparent md:px-4 md:py-3 md:hover:border-t md:hover:border-slate-700 md:hover:bg-slate-800">
          <div className="flex-[0_0_10rem] text-sm leading-8">Jan 2001 – Jul 2001</div>
          <div>
            <div>Senior Internet Developer - IQdestination.com</div>
            <div>What I did</div>
            <div>Technologies Used</div>
          </div>
        </li>

        <li className="flex rounded-xl border-t border-transparent md:px-4 md:py-3 md:hover:border-t md:hover:border-slate-700 md:hover:bg-slate-800">
          <div className="flex-[0_0_10rem] text-sm leading-8">Sep 1999 – Dec 2000</div>
          <div>
            <div>Senior Internet Developer - CyberLoan.com</div>
            <div>What I did</div>
            <div>Technologies Used</div>
          </div>
        </li>

        <li className="flex rounded-xl border-t border-transparent md:px-4 md:py-3 md:hover:border-t md:hover:border-slate-700 md:hover:bg-slate-800">
          <div className="flex-[0_0_10rem] text-sm leading-8">May 1998 – Sep 1999</div>
          <div>
            <div>Web Developer - Lucent Technologies</div>
            <div>What I did</div>
            <div>Technologies Used</div>
          </div>
        </li>

      </ul>      
    </>
  )
}

