import React from 'react';

const UserProfile = ({ user }) => {
  return (
    <div className="bg-blue-100 p-4 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-blue-800">Perfil de Usuario</h2>
      <p className="text-blue-600">Nombre: {user.firstName} {user.lastName}</p>
      <p className="text-blue-600">Email: {user.email}</p>
      <p className="text-blue-600">Descripción: {user.description}</p>
      {/* Agrega más detalles de perfil si es necesario */}
    </div>
  );
};

export default UserProfile;
