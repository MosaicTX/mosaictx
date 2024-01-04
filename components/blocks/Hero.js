import { TinaMarkdown } from "tinacms/dist/rich-text"
import { tinaField } from "tinacms/dist/react";
import { CldImage, getCldVideoUrl } from 'next-cloudinary';
import { MyVideo } from "../MyVideo";
import { Button } from "../Button";
import styles from './Hero.module.css';


export const Hero = (props) => {

  const videoURL = getCldVideoUrl({
    src: props.data.heroVideo || '',
    width: 780,
    height: 885,
    format: 'mp4',
    crop: 'fill',
    gravity: 'center',
    dpr: 'auto'
  });

  return (
    <div className={styles.hero} id={props.data.anchor}>
      <div className={styles.hero__fold}>
        <div className={styles.hero__bg}>
          <div className={styles.hero__image} data-tina-field={tinaField(props.data, "heroImage")}>
            <CldImage
              priority={true}
              src={props.data.heroImage || ''}
              alt={props.data.imageAlt ? props.data.imageAlt : 'This image is lacking an alt description'}
              width="787"
              height="885"
              crop='fill'
              gravity="north"
              style={{objectFit: 'cover', objectPosition: 'top center', width: '100%', height: '100%'}}
            />
          </div>
          <div className={styles.hero__video} data-tina-field={tinaField(props.data, "heroVideo")}> 
            <MyVideo
              src = {videoURL || ''}
              width="780"
              height="885"
              preload={'metadata'}
              autoPlay
              loop
              muted
              style={{objectFit: 'cover', objectPosition: 'center', width: '100%', height: '100%' }}
              onPlay={(e) => {e.target.style.opacity = 1}}
            />
          </div>
        </div>
        <div className={styles.hero__text}>
          <div data-tina-field={tinaField(props.data, "headline")}>
            <TinaMarkdown content={props.data.headline} />
          </div> 
          <div className={styles.hero__buttonrow} data-tina-field={tinaField(props.data, "cta")}>
            <Button 
              href={props.data.cta?.anchor || ''} 
              className={styles.hero__cta} 
              text={props.data.cta?.text}
              backgroundColor='yellow'
            />
          </div>
        </div>
      </div>
      <div className={styles.hero__body} data-tina-field={tinaField(props.data, "body")}>
        <TinaMarkdown content={props.data.body} />
      </div>
    </div>
  )
}