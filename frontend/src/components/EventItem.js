import { useEffect } from 'react';
import classes from './EventItem.module.css';

function EventItem({ events }) {
  function startDeleteHandler() {
    // ...
  }
  useEffect(() => {
    console.log("allEvents---", events)
  }, [])
  const event = events.event
  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <a href="edit">Edit</a>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;
