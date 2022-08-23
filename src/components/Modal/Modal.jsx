import React from "react";
import styles from "./modal.module.css";

export const Modal = () => {
	return (
		<div className={styles.modalBack}>
			<div className={styles.modalContainer}>
				<div>
					<h2>Modal</h2>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, nisi. Dolorem est
						esse iste perferendis.
					</p>
				</div>
				<button className={styles.modal__closeBtn}>Close Modal</button>
			</div>
		</div>
	);
};
