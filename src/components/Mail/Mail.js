import React from 'react';
import styles from './Mail.module.css';

// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.

const Mail = ({ to, from, body }) => {
  const mailType = from ? 'from' : 'to';

  return (
    <div className={styles.container}>
      <p className={`t-mail-${mailType}`}>
        {mailType === 'from' ? 'From: ' : 'To: '}
        <b>{from || to}</b>
      </p>
      <p className="t-mail-body">{body}</p>
    </div>
  );
};

export default Mail;
