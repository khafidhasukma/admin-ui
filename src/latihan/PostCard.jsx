import React, { useState } from "react";

function PostCard(props) {
  const { id, userId, title, body } = props;
  const [clicked, setClicked] = useState(false);

  return (
    <div className="bg-white p-6 flex justify-between flex-col rounded-lg shadow hover:shadow-md hover:bg-special-red/10 hover:border hover:scale-105 transition-all duration-300">
      <div className="text-center">
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
        <p className="text-gray-600">{body}</p>
      </div>

      <button
        onClick={() => setClicked(true)}
        className={`${
          clicked ? "bg-special-red-02 hover:bg-special-red" : "bg-gray-01"
        } text-white p-2 mt-3 rounded-md`}>
        {clicked ? "Tombol sudah diklik" : "Silakan Klik"}
      </button>
    </div>
  );
}

export default PostCard;
