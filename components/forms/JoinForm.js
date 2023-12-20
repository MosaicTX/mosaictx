import styles from './JoinForm.module.css'
import { Button } from '../Button'
import { Popup } from './Popup'

const upDateLabel = (e) => {
  var label	 = e.target.nextElementSibling,
  labelVal = label.innerHTML;
  console.log(e.target, labelVal)
  var fileName = '';
  if( e.target.files && e.target.files.length > 1 )
    fileName = ( this.getAttribute( 'data-multiple-caption' ) || '' ).replace( '{count}', this.files.length );
  else
    fileName = e.target.value.split( '\\' ).pop();

  if( fileName )
    label.innerHTML = fileName;
  else
    label.innerHTML = labelVal;
}

export const JoinForm = (props) => {
  return (
    <Popup popupname="joinForm">
      <div className={styles.joinForm}>
        <div className={styles.joinForm__header}>
          <h1 className={styles.joinForm__title} >
            Join The Team
          </h1>
          <p style={{ flexBasis: '60%', margin: '0'}}>Join our team and harness your skills to make a meaningful impact on the well-being of cancer patients. If you're motivated by the opportunity to transform lives through groundbreaking innovation, we'd love to connect with you.</p>
        </div>
        <form name="join" method="POST" data-netlify="true">
          <div className={styles.joinForm__field__row}>
            <input type="text" name="name" placeholder='Name' />
            <input type="email" name="email" placeholder='Email' required/>
          </div>
          <div className={styles.joinForm__field__row}>
            <textarea name="message" placeholder='Message' rows="4" required></textarea>
          </div>
          <div className={`${styles.joinForm__field__row} ${styles.joinForm__field__row__resume}`}>
            <div>
              <input type="file" name="resume" id="resume" placeholder='Attach CV' onChange={upDateLabel} />
              <label htmlFor="resume">Attach CV</label>
            </div>
            <label className={styles.joinForm__field__row__ppcheck}>Agree to our privacy policy <input type="checkbox" name="agree" required /></label>
          </div>
          <div className={styles.joinForm__field__row__buttonrow}>
            <Button 
              type="submit" 
              text="Send"
              backgroundColor="yellow"
            />
          </div>
        </form>
      </div>
    </Popup>
  )
}