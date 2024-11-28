// src/components/CamperForm/CamperForm.jsx
import { useState } from "react";
import css from "./CamperForm.module.css";
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

export default function CamperForm() {
  const [comment, setComment] = useState("");
  const [isOverLimit, setIsOverLimit] = useState(false);
  const maxLength = 225;

  const handleCommentChange = (e) => {
    const value = e.target.value;
    setComment(value);

    if (value.length > maxLength) {
      setIsOverLimit(true);
    } else {
      setIsOverLimit(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isOverLimit) {
      iziToast.error({
        title: "Error",
        message: "Your comment exceeds the character limit!",
        position: "topRight",
      });
      return;
    }
    iziToast.success({
      title: "Success",
      message: "Form submitted successfully!",
      position: "topRight",
    });

    setComment("");
    e.target.reset();
  };

  return (
    <div className={css.formContainer}>
      <h3>Book your campervan now</h3>
      <p className={css.formText}>
        Stay connected! We are always ready to help you.
      </p>
      <form className={css.form} onSubmit={handleSubmit}>
        <label className={css.label}>
          <input
            type="text"
            name="name"
            placeholder="Name*"
            required
            className={css.input}
          />
        </label>
        <label className={css.label}>
          <input
            type="email"
            name="email"
            placeholder="Email*"
            required
            className={css.input}
          />
        </label>
        <label className={css.label}>
          <input
            type="text"
            name="date"
            placeholder="Booking date*"
            required
            className={css.input}
          />
        </label>
        <label className={css.label}>
          <textarea
            name="comment"
            placeholder="Comment"
            className={css.textarea}
            value={comment}
            onChange={handleCommentChange}
          ></textarea>
          <div className={`${css.charCount} ${isOverLimit ? css.error : ""}`}>
            {comment.length}/{maxLength}
          </div>
        </label>
        <div className={css.sendButtonContainer}>
          <button
            className={css.sendButton}
            type="submit"
            disabled={isOverLimit}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
