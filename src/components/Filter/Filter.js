import React from 'react';
import styles from './Filter.module.css';

const Filter = ({ value, onChangeFilter }) => (
  <label className={styles.TaskList_item}>
    Find contacts by name
    <input
      className={styles.TaskEditor_input}
      type="text"
      value={value}
      onChange={e => {
        onChangeFilter(e.target.value);
      }}
    />
  </label>
);

export default Filter;
