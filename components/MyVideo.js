import { useEffect } from "react";
import { useInView } from 'react-intersection-observer';

export const MyVideo = ({ src, autoPlay, width, height, loop, muted, style, className, onPlay, onEnded, controls, playsInline, preload, poster }) => {

  const { ref, inView, entry } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {

      let ap = entry.target.autoplay;
      if (!ap) {
        return
      } else {
        entry?.target?.style.display !== 'none' && entry?.target?.play();
      }

    } else {
      entry?.target?.pause();
    }
  }, [inView]);

  return (
    <video 
      src={src}
      ref={ref}
      autoPlay={autoPlay}
      width={width}
      height={height}
      loop={loop}
      muted={muted}
      style={style}
      className={className}
      onPlay={onPlay}
      preload={preload || 'auto'}
      onEnded={onEnded}
      playsInline={playsInline || true }
      controls={controls || false}
      poster={poster || ''}
    />
  )
}