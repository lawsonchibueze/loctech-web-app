const Modal = ({ children, isClose }) => {
  return (
    <div className="fixed inset-0 z-50 overflow-auto bg-[#191919] bg-opacity-80 flex items-center justify-center">
      <div className="relative w-full  rounded  sm:px-20">{children}</div>
    </div>
  );
};

export default Modal;
