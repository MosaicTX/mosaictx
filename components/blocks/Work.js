import styles from './Work.module.css';
import { TinaMarkdown } from 'tinacms/dist/rich-text';
import { tinaField } from 'tinacms/dist/react';
import { CldImage, getCldVideoUrl } from 'next-cloudinary';
import { WorkNews } from './WorkNews';
import { Button } from '../Button';
import { MyVideo } from '../MyVideo';
import { popupthe } from '../forms/popupthe';
import { useEffect } from 'react';

export const Work = (props) => {
  useEffect(() => {
    
    const allValues = Array.from(document.querySelectorAll('.work__value'));
    allValues.forEach((value, index) => {
      value.style.setProperty('--mobile-animation-height', value.querySelector('.work__value__body').offsetHeight + 'px');
      value.addEventListener('click', () => {
        value.toggleAttribute('data-active');
      })
      window.addEventListener('resize', () => {
        value.style.setProperty('--mobile-animation-height', value.querySelector('.work__value__body').offsetHeight + 'px');
      })
    })

  })
  const work = props.data || {};
  return (
    <section className={styles.work} id={work.anchor}>

      <div className={styles.work__intro}>
        <h2 className={styles.work__intro__title} data-tina-field={tinaField(work.intro , 'title')}>
          {work.intro.title}
        </h2>
        <div className={styles.work__intro__body} data-tina-field={tinaField(work.intro, 'body')}>
          <TinaMarkdown content={work.intro.body} />
        </div>
        <div className={styles.work__intro__buttonWrapper}>
          <Button
            type="submit"
            onClick={() => popupthe('joinForm')}
            className={styles.work__intro__button} 
            text={work.intro.button.text}
            data-tina-field={tinaField(work.intro, 'button')}
            backgroundColor="orange"
          />
        </div>
      </div>
      <div className={styles.work__values}>
        { work.values?.collaboration && (
          <div className={`${styles.work__value} ${styles.work__values__collaboration} work__value`}>
            <CldImage
              src={work.values?.collaboration.image || ''}
              alt={work.values?.collaboration.imageAlt ? work.values?.collaboration.imageAlt : 'This image is lacking an alt description'}
              width="787"
              height="885"
              sizes='(max-width: 768px) 73vw, 34vw'
              data-tina-field={tinaField(work.values?.collaboration, 'image')}
            />
            <h3 className={styles.work__value__title} data-tina-field={tinaField(work.values?.collaboration, 'title')}>
              {work.values?.collaboration.title}
            </h3>
            <div className={`${styles.work__value__body} work__value__body`} data-tina-field={tinaField(work.values?.collaboration, 'body')}>
              <TinaMarkdown content={work.values?.collaboration.body} />
            </div>
          </div>
        ) }
        { work.values?.ambition && (
          <div className={`${styles.work__value} ${styles.work__values__ambition} work__value`}>
            <CldImage
              src={work.values?.ambition.image || ''}
              alt={work.values?.ambition.imageAlt ? work.values?.ambition.imageAlt : 'This image is lacking an alt description'}
              width="787"
              height="885"
              sizes='(max-width: 768px) 73vw, 34vw'
              data-tina-field={tinaField(work.values?.ambition, 'image')}
            />
            <h3 className={styles.work__value__title} data-tina-field={tinaField(work.values?.ambition, 'title')}>
              {work.values?.ambition.title}
            </h3>
            <div className={`${styles.work__value__body} work__value__body`} data-tina-field={tinaField(work.values?.ambition, 'body')}>
              <TinaMarkdown content={work.values?.ambition.body} />
            </div>
          </div>
        ) }
        { work.values?.resilience && (
          <div className={`${styles.work__value} ${styles.work__values__resilience} work__value`}>
            <CldImage
              src={work.values?.resilience.image || ''}
              alt={work.values?.resilience.imageAlt ? work.values?.resilience.imageAlt : 'This image is lacking an alt description'}
              width="787"
              height="885"
              sizes='(max-width: 768px) 73vw, 34vw'
              data-tina-field={tinaField(work.values?.resilience, 'image')}
            />
            <h3 className={styles.work__value__title} data-tina-field={tinaField(work.values?.resilience, 'title')}>
              {work.values?.resilience.title}
            </h3>
            <div className={`${styles.work__value__body} work__value__body`} data-tina-field={tinaField(work.values?.resilience, 'body')}>
              <TinaMarkdown content={work.values?.resilience.body} />
            </div>
          </div>
        ) }
        { work.values?.excellence && (
          <div className={`${styles.work__value} ${styles.work__values__excellence} work__value`}>
            <CldImage
              src={work.values?.excellence.image || ''}
              alt={work.values?.excellence.imageAlt ? work.values?.excellence.imageAlt : 'This image is lacking an alt description'}
              width="787"
              height="885"
              sizes='(max-width: 768px) 73vw, 34vw'
              data-tina-field={tinaField(work.values?.excellence, 'image')}
            />
            <h3 className={styles.work__value__title} data-tina-field={tinaField(work.values?.excellence, 'title')}>
              {work.values?.excellence.title}
            </h3>
            <div className={`${styles.work__value__body} work__value__body`} data-tina-field={tinaField(work.values?.excellence, 'body')}>
              <TinaMarkdown content={work.values?.excellence.body} />
            </div>
          </div>
        ) }
          <figure className={styles.work__values__video}>
            <MyVideo
              src={getCldVideoUrl({
                src: work.values?.video || '',
                width: 275,
                height: 275,
                format: 'mp4',
                crop: 'fill',
                gravity: 'center',
                dpr: 'auto'
              })}
              loop
              muted
              autoPlay
              className={styles.work__values__video__video}
            />
          </figure>
      </div>
      { work.news.displayNews && (
        <div className={styles.work__news}>
          <div className={styles.work__news__header}>
            <h2 className={styles.work__news__header__title} 
                data-tina-field={tinaField(work.news, 'title')}
            >
              {work.news?.title}
            </h2>
            <div className={styles.work__news__header__text} data-tina-field={tinaField(work.news, 'body')}>
              <TinaMarkdown content={work.news?.body} />
            </div>
          </div>
          <section id={ work.news?.anchor ? work.news.anchor : 'news'} data-slider >
            <WorkNews data={work.news?.newsItems} />
          </section>
        </div>
        )}
    </section>
  )
}