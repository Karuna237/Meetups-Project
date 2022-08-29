import { useNavigate } from 'react-router-dom';
import NewMeetupForm from "../components/Meetups/NewMeetupForm";
function NewMetting(){
    const navigate = useNavigate();
    function addMeetupHandler(meetupData) {
        fetch(
          '/meetupdata/post',
          {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
              'Content-Type': 'application/json'
            }
          }
        ).then(() => {
            navigate('/', { replace: true });
          });
      }

    return(
        <section>
      <h1>Add New Meetup</h1>
      <NewMeetupForm onAddmeetup={addMeetupHandler}/>
    </section>

    );
}
export default NewMetting;
