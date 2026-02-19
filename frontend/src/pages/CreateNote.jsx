import axios from "axios";
import React, { useState, useEffect } from "react";

const CreateNote = ({ closeModal, note, refreshNotes }) => {
  const [title, setTitle] = useState(note?.title || "");
  const [description, setDescription] = useState(note?.content || "");

  useEffect(() => {
    if (note) {
      setTitle(note.title);
      setDescription(note.content);
    } else {
      setTitle("");
      setDescription("");
    }
  }, [note]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    if (note) {
      console.log("NOTE:", note);
      console.log(typeof refreshNotes);

      await axios.put(
        `http://localhost:1100/api/notes/${note._id}`,
        { title, content: description },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
    } else {
      await axios.post(
        "http://localhost:1100/api/notes",
        { title, content: description },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        },
      );
    }
    refreshNotes();
    closeModal();
  };

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className="bg-white p-6 rounded-xl w-96 shadow-xl"
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div>
          <label htmlFor="title">Title</label>
          <input
            value={title}
            className="border w-full p-2 rounded"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="description">Description</label>
          <input
            value={description}
            className="border w-full p-2 rounded"
            id="description"
            type="text"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <button type="submit" className="bg-purple-500 text-white p-2 rounded">
          Save
        </button>
      </form>
    </div>
  );
};

export default CreateNote;
