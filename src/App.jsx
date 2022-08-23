import { useState } from "react";
import "./App.css";
import { Modal } from "./components/Modal/Modal";

function App() {
	const [showModal, setShowModal] = useState(false);
	return (
		<div className="container">
			<button onClick={() => setShowModal(true)}>Open Modal</button>

			{showModal && <Modal closeModal={() => setShowModal(false)} />}
		</div>
	);
}

export default App;
