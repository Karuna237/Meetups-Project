import Card from '../UI/Card';
import classes from './NewMeetupForm.module.css';
import {useRef} from 'react';


function NewMeetupForm(props) {
   const UserInputTitle= useRef();
   const UserInputUrl= useRef();
   const UserInputAddress= useRef();
   const UserInputDescription= useRef();

  function submitHandler(event) {
    event.preventDefault();  
    const title=UserInputTitle.current.value;
    const Url=UserInputUrl.current.value;
    const Address=UserInputAddress.current.value;
    const Description=UserInputDescription.current.value;
    const meetupData={title:title,image:Url,address:Address,description:Description};
    
    props.onAddmeetup(meetupData);
  }
  

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='title'>Meetup Title</label>
          <input type='text' required id='title' ref={UserInputTitle} />
        </div>
        <div className={classes.control}>
          <label htmlFor='image'>Meetup Image</label>
          <input type='url' required id='image' ref={UserInputUrl}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='address'>Address</label>
          <input type='text' required id='address'ref={UserInputAddress} />
        </div>
        <div className={classes.control}>
          <label htmlFor='description'>Description</label>
          <textarea id='description' required rows='5' ref={UserInputDescription}></textarea>
        </div>
        <div className={classes.actions}>
          <button>Add Meetup</button>
        </div>
      </form>
    </Card>
  );
}

export default NewMeetupForm;