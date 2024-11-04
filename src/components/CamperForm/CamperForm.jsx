// src/components/CamperForm/CamperForm.jsx

import css from "./CamperForm.module.css";

export default function CamperForm() {
  return (
    <div className={css.formContainer}>
      <h3>Book your campervan now</h3>
      <p>Stay connected! We are always ready to help you.</p>
      <form className={css.form}>
        <label className={css.label}>
          Name*
          <input type="text" required className={css.input} />
        </label>
        <label className={css.label}>
          Email*
          <input type="email" required className={css.input} />
        </label>
        <label className={css.label}>
          Booking date*
          <input type="date" required className={css.input} />
        </label>
        <label className={css.label}>
          Comment
          <textarea className={css.textarea}></textarea>
        </label>
        <div className={css.sendButtonContainer}>
            <button type="submit" className={css.sendButton}>Send</button>
        </div>
      </form>
    </div>
  );
}