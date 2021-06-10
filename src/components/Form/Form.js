import React from 'react';
import styles from './Form.module.css';

const Form = () => {
  return (
    <div className={styles.form}>
      <h3 className={styles.formTitle}>Name</h3>
      <input
        className={styles.formInput}
        type="text"
        placeholder="Enter name"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
      />
      <h3 className={styles.formTitle}>Number</h3>
      <input
        className={styles.formInput}
        type="tel"
        placeholder="Enter number"
        name="number"
        pattern="(\+?( |-|\.)?\d{1,2}( |-|\.)?)?(\(?\d{3}\)?|\d{3})( |-|\.)?(\d{3}( |-|\.)?\d{4})"
        title="Номер телефона должен состоять из 11-12 цифр и может содержать цифры, пробелы, тире, пузатые скобки и может начинаться с +"
        required
      />
      <button
        className="button"
        name="add"
        type="button"
        // onClick={onLeaveFeedback}
      >
        Add contact
      </button>
    </div>
  );
};

export default Form;
