import React from "react";
import UserCard from "./UserCard.jsx";

function Exercise() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-700">User Cards</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        <UserCard name="Fidha" email="fidha@example.com" street="Jl. Mawar No. 123" city="Bandung" />
        <UserCard name="Fika" email="fika@example.com" street="Jl. Melati No. 456" city="Jakarta" />
        <UserCard name="Fakhry" email="fakhry@example.com" street="Jl. Kenanga No. 789" city="Surabaya" />
      </div>
    </div>
  );
}

export default Exercise;
