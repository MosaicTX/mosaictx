import styles from './WorkNews.module.css';
import { tinaField } from "tinacms/dist/react";
import { CldImage } from 'next-cloudinary';
import { nextSlide, prevSlide} from './workNewsSlider';

export const WorkNews = (props) => {

  if (!props.data) {
    return null;
  }

  const news = props.data || {};

  const dates = news.map(item => item.date);
  const formattedDates = dates.map(date => {
    const dateObj = new Date(date);
    const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
    return dateObj.toISOString().replace(/T.*/,'').split('-').reverse().join('-');
  })

  return (
    <div className={styles.work__newsWrapper}>
      <div className={styles.work__newsItems}>
        {news?.map((item, i) => (
          <div 
            className={`${styles.work__news__item} work__news__item`} 
            data-current-news={i == 0 ? 'true' : 'false'}
            key={i} 
            data-tina-field={tinaField(news[i])}
          >
            <figure className={styles.work__news__image}>
              <CldImage
                src={item.image || ''}
                alt={item.imageAlt ? item.imageAlt : 'This image is lacking an alt description'}
                width="780"
                height="620"
                sizes='(max-width: 768px) 73vw, 34vw'
                data-tina-field={tinaField(news[i], 'image')}
              />
            </figure>
            <div className={styles.work__news__text}>
              <div className={`${styles.work__news__text__inner} work__news__text__inner`}>
                <h3 className={styles.work__news__title} data-tina-field={tinaField(news[i], 'title')}>
                  {item.title}
                </h3>
                { item.link && (
                  <a className={styles.work__news__link} href={item.link}>Read it <span className={styles.arrowspan}>
                    <svg className={styles.arrow} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5.58871 1.84035L6.58871 0.840352L11.2287 5.48035V7.26035L6.58871 11.9204L5.56871 10.9004L9.42871 7.06035H0.288711V5.66035H9.44871L5.58871 1.84035Z" fill="#101313"/>
                    </svg>
                  </span> </a>
                )}
                <p className={styles.work__news__item__meta}>
                  <span className={styles.work__news__item__meta__cat}>{item.category}</span>
                  <span className={styles.work__news__item__meta__date}>{formattedDates[i]}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className={styles.work__news__controls}>
        <button className={styles.work__news__controls__prev} onClick={prevSlide}>
          <svg className={styles.nav__item__arrow} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.58871 1.84035L6.58871 0.840352L11.2287 5.48035V7.26035L6.58871 11.9204L5.56871 10.9004L9.42871 7.06035H0.288711V5.66035H9.44871L5.58871 1.84035Z" fill="currentColor"/></svg>
        </button>
        <button className={styles.work__news__controls__next} onClick={nextSlide}>
          <svg className={styles.nav__item__arrow} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.58871 1.84035L6.58871 0.840352L11.2287 5.48035V7.26035L6.58871 11.9204L5.56871 10.9004L9.42871 7.06035H0.288711V5.66035H9.44871L5.58871 1.84035Z" fill="currentColor"/></svg>
        </button>
      </div>
    </div>
  )
}