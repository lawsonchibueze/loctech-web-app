
const Modal = ({children }) => {
    return (
      <>

          <div className="fixed z-10 inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-screen">
              <div
                className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
          
              ></div>
              <div className="bg-white rounded-lg p-4">{children}</div>
            </div>
          </div>
      </>
    );
  };
  
  export default Modal;