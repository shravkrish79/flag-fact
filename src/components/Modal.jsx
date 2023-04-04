// Node modules
import { createPortal } from "react-dom";
import { useModal } from "../state/useModal";

export default function Modal() {
    // Global state
    const { modal, setModal } = useModal();

    // Properties
    const HTMLElement = document.getElementById("portal");

    // Safegurards
    if (modal === null) return null;
    if (HTMLElement === null) throw new Error("Create div#portal in index.html");

    return createPortal(
        <div id="modal" >
            <div className="background" >
                <button className="modal-close-btn" onClick={() => setModal(null)}>X</button>
                <div className="content">{modal}</div>
            </div>
        </div>,
        HTMLElement
    );
}