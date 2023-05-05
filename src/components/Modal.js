import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Modal = ({ isOpen, onClose, addLayer }) => {
  const [chooseLayer, setChooseLayer] = useState(true);
  const [isConv2d, setIsConv2d] = useState(false);
  const [isMaxPool, setIsMaxPool] = useState(false);
  const [isAvgPool, setIsAvgPool] = useState(false);
  const [title, setTitle] = useState("Choose Layer");

  const closeModal = () => {
    setChooseLayer(true);
    setIsConv2d(false);
    setIsMaxPool(false);
    setIsAvgPool(false);
    setTitle("Choose Layer");
    onClose();
  };

  return (
    <>
      {isOpen ? (
        <div
          onClick={(e) => {
            if (e.target.id === "background") {
              closeModal();
            }
          }}
        >
          <div className="fixed inset-0 bg-gray-800 opacity-50 z-50"></div>
          <div
            id="background"
            className="fixed inset-0 z-50 flex justify-center items-center"
          >
            <div className="bg-white rounded-lg shadow-lg p-6 w-full sm:max-w-md relative">
              <div className="absolute top-0 left-0 flex flex-row justify-between items-center w-full h-10 rounded-t-lg bg-purple-900">
                <h2 className="absolute top-0 left-0 p-2 text-lg text-white">
                  {title}
                </h2>
                <button
                  className="text-white absolute top-0 right-0 p-2"
                  onClick={closeModal}
                >
                  <AiOutlineClose size={24} />
                </button>
              </div>

              {chooseLayer ? (
                <div className="flex flex-col items-center justify-center">
                  <button
                    onClick={() => {
                      addLayer();
                      closeModal();
                    }}
                    className="w-5/6 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-2 mt-8"
                  >
                    Dense Layer
                  </button>
                  <button
                    onClick={() => {
                      setIsConv2d(true);
                      setIsMaxPool(false);
                      setIsAvgPool(false);
                      setChooseLayer(false);
                      setTitle("Convolutional Layer");
                    }}
                    className="w-5/6 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mb-2 mt-2"
                  >
                    Convolutional Layer
                  </button>
                  <button
                    onClick={() => {
                      setIsConv2d(false);
                      setIsMaxPool(true);
                      setIsAvgPool(false);
                      setChooseLayer(false);
                      setTitle("Max Pool Layer");
                    }}
                    className="w-5/6 bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded mb-2 mt-2"
                  >
                    Max Pool Layer
                  </button>
                  <button
                    onClick={() => {
                      setIsConv2d(false);
                      setIsMaxPool(false);
                      setIsAvgPool(true);
                      setChooseLayer(false);
                      setTitle("Avg Pool Layer");
                    }}
                    className="w-5/6 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mb-2 mt-2"
                  >
                    Avg Pool Layer
                  </button>
                </div>
              ) : isConv2d ? (
                <div className="mt-10 flex flex-col items-center justify-center">
                  <div className="flex flex-row w-11/12 items-center justify-between mb-2 bt-2">
                    <label className="block font-bold mr-2">Kernel Size:</label>
                    <input
                      className="border border-gray-400 p-2 w-6/12 rounded"
                      type="text"
                      // value={firstName}
                      // onChange={handleFirstNameChange}
                    />
                  </div>
                  <div className="flex flex-row w-11/12 items-center justify-between mb-2 bt-2">
                    <label className="block font-bold mr-2">
                      Num of Kernels:
                    </label>
                    <input
                      className="border border-gray-400 p-2 w-6/12 rounded"
                      type="text"
                      // value={firstName}
                      // onChange={handleFirstNameChange}
                    />
                  </div>
                  <div className="flex flex-row w-11/12 items-center justify-between mb-2 bt-2">
                    <label className="block font-bold mr-2">Stride:</label>
                    <input
                      className="border border-gray-400 p-2 w-6/12 rounded"
                      type="text"
                      // value={firstName}
                      // onChange={handleFirstNameChange}
                    />
                  </div>
                  <div className="flex flex-row w-11/12 items-center justify-between mb-2 bt-2">
                    <label className="block font-bold mr-2">Padding:</label>
                    <input
                      className="border border-gray-400 p-2 w-6/12 rounded"
                      type="text"
                      // value={firstName}
                      // onChange={handleFirstNameChange}
                    />
                  </div>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    // onClick={toggleModal}
                  >
                    Save
                  </button>
                </div>
              ) : isMaxPool ? (
                <div className="mt-10 flex flex-col items-center justify-center">
                  <div className="flex flex-row w-11/12 items-center justify-between mb-2 bt-2">
                    <label className="block font-bold mr-2">Kernel Size:</label>
                    <input
                      className="border border-gray-400 p-2 w-6/12 rounded"
                      type="text"
                      // value={firstName}
                      // onChange={handleFirstNameChange}
                    />
                  </div>
                  <div className="flex flex-row w-11/12 items-center justify-between mb-2 bt-2">
                    <label className="block font-bold mr-2">Stride:</label>
                    <input
                      className="border border-gray-400 p-2 w-6/12 rounded"
                      type="text"
                      // value={firstName}
                      // onChange={handleFirstNameChange}
                    />
                  </div>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    // onClick={toggleModal}
                  >
                    Save
                  </button>
                </div>
              ) : isAvgPool ? (
                <div className="mt-10 flex flex-col items-center justify-center">
                  <div className="flex flex-row w-11/12 items-center justify-between mb-2 bt-2">
                    <label className="block font-bold mr-2">Kernel Size:</label>
                    <input
                      className="border border-gray-400 p-2 w-6/12 rounded"
                      type="text"
                      // value={firstName}
                      // onChange={handleFirstNameChange}
                    />
                  </div>
                  <div className="flex flex-row w-11/12 items-center justify-between mb-2 bt-2">
                    <label className="block font-bold mr-2">Stride:</label>
                    <input
                      className="border border-gray-400 p-2 w-6/12 rounded"
                      type="text"
                      // value={firstName}
                      // onChange={handleFirstNameChange}
                    />
                  </div>
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    // onClick={toggleModal}
                  >
                    Save
                  </button>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
