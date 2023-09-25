import React, { useState, useEffect, useReducer } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import ModalEditInfo from "@/components/common/ModalEditInfo";
import ModalEditImageProfile from "@/components/common/ModalEditImageProfile";

const Profile = ({ onEditProfile }) => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [user, setUser] = useState({});
  const [editedUser, dispatch] = useReducer(
    (state, action) => ({ ...state, ...action }),
    {}
  );

  useEffect(() => {
    const userFromLocalStorage = JSON.parse(localStorage.getItem("user"));
    setUser(userFromLocalStorage);
  }, []);

  const handleEditClick = () => {
    setIsEditModalOpen(true);
  };

  const handleSaveChanges = () => {
    const updatedUser = { ...user, ...editedUser };
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setIsEditModalOpen(false);
  };

  const handleCancelChanges = () => {
    dispatch(user);
    setIsEditModalOpen(false);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    dispatch({ [name]: value });
  };

  const handleEditImageClick = () => {
    setIsImageModalOpen(true);
  };

  const handleImageDrop = (acceptedFiles) => {
    const file = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      dispatch({ image: event.target.result });
    };
    reader.readAsDataURL(file);
  };

  const handleSaveImage = () => {
    const updatedUser = { ...user, ...editedUser };
    setUser(updatedUser);
    localStorage.setItem("user", JSON.stringify(updatedUser));
    setIsImageModalOpen(false);
  };

  return (
    <div className="container mx-auto px-4 text-black mt-5 ">
      <div className=" flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div
              className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="border-2 border-black rounded-full mt-5 relative">
                <Image
                  alt="..."
                  src={user.image}
                  className="shadow-xl rounded-full h-auto align-middle border-none max-w-150-px"
                  width={150}
                  height={150}
                />
                {isHovered && (
                  <div
                    className="absolute top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full"
                    onClick={handleEditImageClick}
                  >
                    <FontAwesomeIcon
                      icon={faPencilAlt}
                      className="text-white text-lg cursor-pointer"
                    />
                  </div>
                )}
              </div>
            </div>
            <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center"></div>
            <div className="w-full lg:w-4/12 px-4 lg:order-1">
              <div className="flex justify-center py-4 lg:pt-4 pt-8">
                {/* Add your user stats here */}
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <div className="flex justify-center items-center gap-3">
              <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700">
                {user.name || "Unknown Name"}
              </h3>
              <FontAwesomeIcon
                icon={faPencilAlt}
                className="text-black text-lg cursor-pointer"
                onClick={handleEditClick}
              />
            </div>

            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 uppercase text-center">
              <FontAwesomeIcon
                icon={faMapMarkerAlt}
                className="mr-2 text-lg text-blueGray-400"
              />
              <b>Direccion:</b> {user.address || "Unknown Address"}
            </div>
            <div className="mb-2 text-blueGray-600">
              <b>Posicion laboral:</b> {user.jobPosition || "Unknown Position"}
            </div>
            <div className="mb-2 text-blueGray-600">
              <b> Descripcion:</b> {user.description || "Unknown Description"}
            </div>
          </div>
        </div>
      </div>

      <ModalEditInfo
        isOpen={isEditModalOpen}
        onClose={handleCancelChanges}
        onSave={handleSaveChanges}
        user={user}
        editedUser={editedUser}
        dispatch={dispatch}
        onInputChange={handleInputChange}
      />
      <ModalEditImageProfile
        isOpen={isImageModalOpen}
        onClose={() => setIsImageModalOpen(false)}
        onImageDrop={handleImageDrop}
        onSaveImage={handleSaveImage}
      />
    </div>
  );
};

export default Profile;
