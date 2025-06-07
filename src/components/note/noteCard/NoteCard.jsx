import React, { useContext } from "react";
import "./NoteCard.css";
import { BsFillTrashFill } from "react-icons/bs";
import { BiSolidEdit } from "react-icons/bi";
import { NoteContext } from "../../../context/notesContext/NotesContext";


function Note({ title, description, date, id }) {

    const { deleteNote, setEditing, setNote, setIdEdit } = useContext(NoteContext);

    function SubmitToEdit() {
        setEditing(true);
        setNote({ title, description });
        setIdEdit(id);
    }
    
    return (
        <div className="noteContainer">
            <div className="title">{title}</div>
            <div className="description">{description}</div>
            <div className="edit" onClick={() => SubmitToEdit()}>
                <BiSolidEdit fontSize={23} color="yellow" />
            </div>
            <div className="trash" onClick={() => deleteNote(id)}>
                <BsFillTrashFill fontSize={23} color="red" />
            </div>
            <div className="date">{date}</div>
        </div>
    );
}

export default Note;
