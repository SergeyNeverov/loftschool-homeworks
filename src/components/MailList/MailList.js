import React from 'react';
import { Link } from 'react-router-dom';
import styles from './MailList.module.css';

const MailList = ({ mailData, match }) => {
  return mailData.map(mail => {
    return (
      <Link
        key={mail.id}
        className={styles.link}
        to={`${match.url}/${mail.id}`}
      >
        {`${mail.body}`}
      </Link>
    );
  });
};

export default MailList;
