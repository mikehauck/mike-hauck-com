export function Projects() {

  return (
    <>
      <h2 className="mb-2 w-48 md:px-4 font-bold text-slate-300">Projects</h2>

      <ul className="grid gap-y-6">
        <li className="flex rounded-xl border-t border-transparent md:px-4 md:py-3 md:hover:border-t md:hover:border-slate-700 md:hover:bg-slate-800">
          <div className="flex-[0_0_10rem] text-sm leading-8">Project Image</div>
          <div>
            <div>Project Title</div>
            <div>Description</div>
            <div>Technologies Used</div>
          </div>
        </li>

        <li className="flex rounded-xl border-t border-transparent md:px-4 md:py-3 md:hover:border-t md:hover:border-slate-700 md:hover:bg-slate-800">
          <div className="flex-[0_0_10rem] text-sm leading-8">Project Image</div>
          <div>
            <div>Project Title</div>
            <div>Description</div>
            <div>Technologies Used</div>
          </div>
        </li>
      </ul> 
    </>
  )
}
