import React, { useState } from "react";

function UserCard(props) {
  const { name, email, street, city, ...rest } = props;
  const [clicked, setClicked] = useState(false);

  return (
    <div className="bg-white p-6 flex justify-between flex-col rounded-lg shadow hover:shadow-md transition-shadow">
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">{name}</h2>
        <p className="text-gray-600">
          <span className="font-medium">Email:</span> {email}
        </p>
        <p className="text-gray-600">
          <span className="font-medium">Address:</span> {street}, {city}
        </p>

        {/* Menampilkan data tambahan dari rest */}
        {Object.entries(rest).map(([key, value]) => (
          <p key={key} className="text-gray-600">
            <span className="font-medium capitalize">{key}:</span> {value}
          </p>
        ))}
      </div>

      <button
        onClick={() => setClicked(true)}
        className={`${clicked ? "bg-special-green" : "bg-gray-01"} text-white p-2 mt-3 rounded-md`}>
        {clicked ? "Tombol sudah diklik" : "Silakan Klik"}
      </button>
    </div>
  );
}

export default UserCard;
