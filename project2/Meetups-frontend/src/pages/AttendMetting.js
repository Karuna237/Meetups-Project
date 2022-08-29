import { useState,useEffect } from "react";
import MeetupList from "../components/Meetups/Meetuplist";



function AttendMetting(){
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(false);
    fetch(
      '/meetupdata/get'
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];
        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key]
          };

          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }

    return(
        <div>
            <MeetupList meetups={loadedMeetups}/>
        </div>
    );
}
export default AttendMetting;
