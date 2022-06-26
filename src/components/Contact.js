// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';
import style from "./contact.css";

const Contact = ({data}) => {
    return (
      <div className={style.contact}>
      <img className={style.contact_photo} src={data.photo} alt={data.name} />
      <div className={style.contact_detail}>
        <h5 className={style.contact_phone}>{data.phone}</h5>
        <div className={style.contact_box}>
          <h2 className={style.contact_title}>{data.name}</h2>
          <p className={style.contact_email}>{data.email}</p>
        </div>
      </div>
    </div>
    );
};

export default Contact;