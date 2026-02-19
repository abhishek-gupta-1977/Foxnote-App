import Navbar from "@/components/Navbar";
import { Plus } from "lucide-react";
import React, { useEffect, useState } from "react";
import CreateNote from "./CreateNote";
import axios from "axios";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedNote, setSelectedNote] = useState(null);

  const handleEdit = (note) => {
    setSelectedNote(note);
    setIsOpen(true);
  };

  const fetchNotes = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:1100/api/notes", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      setData(response.data.notes);
    } catch (error) {
      setError("Failed to fetch data");
      console.log(error.response?.status);

      console.error(error);
      if (error.response?.status === 401) {
  localStorage.removeItem("token");
  window.location.href = "/login";
}
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const toggleComplete = async (id, completed) => {
    try {
      await axios.put(
        `http://localhost:1100/api/notes/${id}`,
        { completed: !completed },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        },
      );
      fetchNotes();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:1100/api/notes/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      fetchNotes();
    } catch (error) {
      console.error(error);
    }
  };

  const list = data.map((item, index) => (
    <div
      key={item._id}
      className={`flex flex-col rounded-lg p-4 ${item.completed ? "bg-green-100" : "bg-gray-100"}  border border-gray-300 shadow-sm hover:shadow-md transition-shadow min-h-[200px]`}
    >
      <h1
        className={`text-xl font-semibold mb-2 ${item.completed ? "line-through text-gray-500" : "text-purple-600"}`}
      >
        {item.title}
      </h1>
      <span
        className={`text-base font-mono flex-1 ${item.completed ? "line-through text-gray-500" : "text-blue-500"}`}
      >
        {item.content}
      </span>
      <div className="flex flex-wrap gap-2 mt-auto pt-4 ">
        <button
          onClick={() => handleEdit(item)}
          className="flex-1 text-sm min-w-[80px] px-2 py-1.5 bg-yellow-500 text-white hover:bg-yellow-600 transition-colors rounded-lg"
        >
          Edit
        </button>
        <button
          onClick={() => toggleComplete(item._id, item.completed)}
          className="flex-1 text-sm min-w-[80px] px-2 py-1.5 bg-green-500 text-white hover:bg-green-600 transition-colors rounded-lg"
        >
          {item.completed ? "Undo" : "Complete"}
        </button>
        <button
          onClick={() => handleDelete(item._id)}
          className="flex-1 text-sm min-w-[80px] px-2 py-1.5 bg-red-500 text-white hover:bg-red-600 transition-colors rounded-lg"
        >
          Delete
        </button>
      </div>
    </div>
  ));

  if (loading) return <p className="text-center text-green-500">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-50  flex flex-col items-center pt-20 px-4">
        <div className="max-w-6xl w-full relative bg-white p-6 rounded-xl border border-gray-300 shadow-lg">
          <h1 className="text-gray-700 font-bold text-3xl mb-8">Notes</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-6 ">
            {list}
          </div>

          <div
            onClick={() => setIsOpen(true)}
            className="absolute  bottom-6 right-6  bg-purple-500 hover:bg-purple-600 transition-colors text-white w-12 h-12 flex items-center justify-center shadow-md rounded-full z-50 cursor-pointer"
          >
            <Plus size={24} />
          </div>
        </div>
      </div>

      <div>
        {isOpen && (
          <div
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 flex items-center justify-center bg-black/40 z-50"
          >
            <div onClick={(e) => e.stopPropagation()}>
            <CreateNote
              closeModal={() => {
                setIsOpen(false);
                setSelectedNote(null);
              }}
              note={selectedNote}
              refreshNotes={fetchNotes}
            />
          </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;
