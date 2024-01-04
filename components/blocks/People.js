import styles from './People.module.css'
import { tinaField } from "tinacms/dist/react";
import { CldImage } from 'next-cloudinary';
import { useEffect } from 'react';
import { sliderInit, nextSlide, prevSlide, sliderScrollHandler, touchMoveHandler, popupSlide, closeSlide, filterSlides, mouseWheelHandler } from './peopleSlider';

export const People = (props) => {

  useEffect(() => {
    const slider = document.querySelector('.slider');
    slider.addEventListener('wheel', (e) => mouseWheelHandler(e), { passive: false });
    touchMoveHandler(slider);
  })

  const hasAdvisors = props.data.teamProfile.some(person => person.department === 'advisors');
  const hasLeadership = props.data.teamProfile.some(person => person.department === 'leadership');
  const hasBoard = props.data.teamProfile.some(person => person.department === 'board');

  return(
    <section className={styles.people} id={props.data.anchor}>
      <div className={styles.people__header}>
        <figure className={styles.people__titleImage}>
          <CldImage 
            src={props.data.titleImage}
            alt="A graphic representing the concept of 'Team'"
            width="88"
            height="88"
            style={{ width: '100%', height: 'auto'}}
            format='svg'
          />
        </figure>
        <h2 className={styles.people__title} data-tina-field={tinaField(props.data, "peopleheadline")}>
          <span className={styles.people__titlespan} data-tina-field={tinaField(props.data, "title")}>
            {props.data.title}
          </span>
          {props.data.peopleheadline}
        </h2>
      </div>
      <div 
        className={`${styles.people__slider} slider`}
        data-slider-x="0"
        
      >
        <div className={styles.people__slider__filter}>
          { hasLeadership && <button data-filter="leadership" onClick={filterSlides}>Leadership</button> }
          { hasBoard && <button data-filter="board" onClick={filterSlides}>Board</button> }
          { hasAdvisors && <button data-filter="advisors" onClick={filterSlides}>Advisors</button> }
        </div>
        <div 
          className={`${styles.people__slider__rail} rail`} 
        >
          {props.data.teamProfile.map((person, i) => (
            <div 
              className={`${styles.people__slider__item} item`} 
              key={i}
              onClick={popupSlide}
              data-department={person.department}
              data-popup-index={i}
              data-hidden-by-filter="false"
            >
              <div className={styles.people__slider__item__image} data-tina-field={tinaField(person, 'image')}>
                <CldImage 
                  src={person.image || ''}
                  alt={person.imageAlt ? person.imageAlt : 'This image is lacking an alt description'}
                  width="787"
                  height="885"
                  sizes='(max-width: 768px) 73vw, 34vw'
                />
              </div>
              <div className={styles.people__slider__item__text}>
                <div className={styles.people__slider__item__nameblock}>
                  <h3 className={styles.people__slider__item__nameblock__name} data-tina-field={tinaField(person, 'name')}>
                    {person.name}
                  </h3>
                  <h3 className={styles.people__slider__item__nameblock__lastname} data-tina-field={tinaField(person, 'lastname')}>
                    {person.lastname}<sup className={styles.people__slider__item__nameblock__title} data-tina-field={tinaField(person, 'academicTitle')}>
                      {person.academicTitle}
                    </sup>
                  </h3>          
                </div>
                <h4 className={styles.people__slider__item__nameblock__jobtitle} data-tina-field={tinaField(person, 'jobtitle')}>{person.jobtitle}</h4>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.people__slider__controls}>
          <button className={styles.people__slider__controls__prev} onClick={prevSlide}>
            <svg className={styles.nav__item__arrow} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.58871 1.84035L6.58871 0.840352L11.2287 5.48035V7.26035L6.58871 11.9204L5.56871 10.9004L9.42871 7.06035H0.288711V5.66035H9.44871L5.58871 1.84035Z" fill="currentColor"/></svg>
          </button>
          <button className={styles.people__slider__controls__next} onClick={nextSlide}>
            <svg className={styles.nav__item__arrow} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.58871 1.84035L6.58871 0.840352L11.2287 5.48035V7.26035L6.58871 11.9204L5.56871 10.9004L9.42871 7.06035H0.288711V5.66035H9.44871L5.58871 1.84035Z" fill="currentColor"/></svg>
          </button>
        </div>
      </div>


      <div className={styles.people__popups} data-element="popups">
        {props.data.teamProfile.map((person, i) => (
            <div 
              className={styles.people__popup__item} 
              key={i} 
              data-popup-index={i}
              data-element="popupitem"
              onClick={closeSlide}
            >
              <div className={`${styles.people__popup__item__box} people__popup__item__box`}>
                <div className={styles.people__popup__item__image}>
                  <CldImage 
                    src={person.image || ''}
                    alt={person.imageAlt ? person.imageAlt : 'This image is lacking an alt description'}
                    width="787"
                    height="885"
                    style={{ width: '100%', height: '100%', objectFit: 'cover'}}
                    sizes='(max-width: 768px) 73vw, 34vw'
                  />
                </div>
                <div className={styles.people__popup__item__text}>
                  <div className={styles.people__popup__item__nameblock}>
                    <h3 data-tina-field={tinaField(person, 'name')}>{person.name}</h3>
                    <h3 data-tina-field={tinaField(person, 'lastname')}>{person.lastname}<sup data-tina-field={tinaField(person, 'academicTitle')}>{person.academicTitle}</sup></h3>
                    <h4 className={styles.people__popup__item__nameblock__jobtitle} data-tina-field={tinaField(person, 'jobtitle')}>{person.jobtitle}</h4>
                  </div>
                  <ul className={styles.credentialsList}>
                    {person.credentials?.map((credential, i) => (
                      <li key={i}>{credential || ''}</li>
                    ))}
                  </ul>
                </div>
                <a href={person.linkedin || ''} target="_blank" className={styles.people__popup__item__linkedin}>
                  <svg width="67" height="61" viewBox="0 0 67 61" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="65.8566" height="60" transform="translate(0.643555 0.504395)" fill="#97FAFA"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M26.274 20.5979C24.8235 20.5979 23.6436 21.7766 23.6436 23.2254C23.6436 24.6749 24.8235 25.8541 26.274 25.8541C27.7232 25.8541 28.9023 24.6748 28.9023 23.2254C28.9023 21.7766 27.7232 20.5979 26.274 20.5979ZM28.2655 26.9641H24.2793C24.1024 26.9641 23.959 27.1075 23.959 27.2844V40.0904C23.959 40.2674 24.1024 40.4107 24.2793 40.4107H28.2655C28.4424 40.4107 28.5858 40.2674 28.5858 40.0904V27.2844C28.5858 27.1075 28.4424 26.9641 28.2655 26.9641ZM34.9024 28.1161C35.6202 27.3341 36.8037 26.6458 38.4047 26.6458C42.8946 26.6458 43.4999 29.8913 43.4999 33.0662V40.0905C43.4999 40.2674 43.3566 40.4108 43.1797 40.4108H39.2007C39.0238 40.4108 38.8804 40.2674 38.8804 40.0905V33.8643C38.8804 32.121 38.7516 30.7875 37.1307 30.7875C35.6423 30.7875 35.0624 31.6193 35.0624 33.7544V40.0904C35.0624 40.2674 34.919 40.4107 34.7421 40.4107H30.7646C30.5877 40.4107 30.4443 40.2674 30.4443 40.0904V27.2844C30.4443 27.1075 30.5877 26.9641 30.7646 26.9641H34.5821C34.759 26.9641 34.9024 27.1075 34.9024 27.2844V28.1161Z" fill="currentColor"/>
                  </svg>
                  <span>Connect on LinkedIn</span>
                </a>
              </div>
            </div>
          ))}
      </div>
    </section>
  )
}