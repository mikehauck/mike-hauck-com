"use client"

import { LegacyRef, useRef } from 'react';
import { OnProgressProps } from 'react-player/base';
import ReactPlayer from 'react-player/youtube'
export function Movie() {
  const playerRef = useRef<ReactPlayer>(null);

  const progressHandler = (props: OnProgressProps) => {
    if (props.played > 0.94)
      (playerRef.current as unknown as ReactPlayer).seekTo(0);
  };

  return (
    <>
      <div id="movie" className="flex justify-center dark:opacity-60">
        <div className="mt-[-280px] h-[720px] flex-1 md:mt-[-180px]">
        <ReactPlayer ref={playerRef} url='https://www.youtube.com/watch?v=3z6hP1_uSVk' playing={true} volume={0} muted={true} loop={true} controls={false}
            onProgress={progressHandler} height="100%" width="100%" config={{  playerVars: { origin: 'https://www.youtube.com' } } }/>
        </div>
      </div>
    </>
  )
}
