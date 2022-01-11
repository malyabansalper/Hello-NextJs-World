/* eslint-disable @next/next/no-img-element */
import React from "react";
import styles from "./Card.module.css";
import { useRouter } from "next/router";

export default function Card({ name, phone, email, image, id }) {
  const router = useRouter();
  return (
    <div className={styles.card} onClick={() => router.push(`/fruits/${id}`)}>
      <div className={styles["card-header"]}>
        <img src={image.url} alt={image.alt} className={styles["card-img"]} />
      </div>
      <div>
        <h3>{name}</h3>
        <h5>{phone}</h5>
        <p>{email}</p>
      </div>
    </div>
  );
}
