import React, { useContext, useState } from 'react'
import { NoteContext } from '../../../context/notesContext/NotesContext';
import './FormNote.css';

function FormNote() {
    const {
        addNote,
        note,
        setNote,
        isEditing,
        setEditing,
        idEdit,
        setIdEdit,
        editNote,
    } = useContext(NoteContext);

    const SendNote = (e) => {
        e.preventDefault(); 
        if (isEditing == true) {
            editNote(idEdit);
        } else {
            addNote(note.title, note.description);
        }
        setEditing(false);
        setIdEdit("");
        setNote({ title: "", description: "" });
    };

    return (
        <aside className="aside-notes">
            <h2>Adicione seu comentário sobre o site aqui</h2>
            <form id="formNote" onSubmit={SendNote}>
                <label htmlFor="titleNote" className="margin-form">
                    {" "}
                    Seu nome
                </label>
                <input
                    type="text"
                    value={note.title}
                    onChange={(e) => setNote({ ...note, title: e.target.value })}
                    id="titleNote"
                    placeholder="seu nome"
                />
                <label htmlFor="descriptionNote" className="margin-form">
                    {" "}
                    Seu comentário
                </label>
                <input
                    type="text"
                    value={note.description}
                    onChange={(e) => setNote({ ...note, description: e.target.value })}
                    id="descriptionNote"
                    placeholder="seu comentário"
                />
                <button type="submit" id="buttonForm" className="margin-form">
                    {isEditing ? "Editar Comentário" : "Adicionar Comentário"}
                </button>
            </form>
        </aside>
    );
}

export default FormNote;
  
