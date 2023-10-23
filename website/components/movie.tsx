
export function Movie() {
  return (
    <>

      <div id="movie" className="flex h-36 min-w-full justify-center overflow-clip dark:opacity-60 md:h-72">
        <div>
          <video className="mt-[-16%]"  autoPlay muted loop>
            <source src="/movie.mp4" type="video/mp4" />
          </video>
        </div>
      </div>
    </>
  )
}



//<div id="movie" className="flex h-80 min-w-full justify-center overflow-hidden opacity-60">
//  <div className="relative flex h-0 w-[99%] justify-center pb-[56%]">
