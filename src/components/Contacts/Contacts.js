import React from 'react';
import styles from './Contacts.module.css';

const Contacts = ({ contacts, onRemoveContact }) => {
  return (
    <div>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            {contact.name + ' : ' + contact.number}
            {
              <div className={styles.divRelativeButton}>
                <button
                  className={styles.TaskList_button}
                  type="button"
                  name="delte"
                  onClick={() => {
                    onRemoveContact(contact.id);
                  }}
                >
                  delete
                </button>
              </div>
            }
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Contacts;
