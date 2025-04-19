import React, { useEffect, useState } from 'react';

const SuccessMsg = ({ message, onClose }) => {
  // State to track the progress of the progress bar
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    let width = 100;
    // Set up an interval to reduce the width over time
    const timer = setInterval(() => {
      width -= 1;
      setProgress(width);
      if (width <= 0) {
        clearInterval(timer);
        onClose();
      }
    }, 30);
// Cleanup the interval
    return () => clearInterval(timer);
  }, [onClose]);

  return (
    <div className="fixed top-10 right-5 bg-gradient-to-br from-[#E0F7FA] to-[#FFFFFF] border border-gray-400 shadow-lg rounded-md p-3 flex items-start gap-2 w-80 z-50">
      <div className="text-green-500 text-xl">✔</div>
      <div className="flex-1 text-gray-700 font-medium">
        {/* Display the success message */}
        {message}
      </div>
      <button className="text-gray-400 hover:text-black" onClick={onClose}>×</button>
      <div className="absolute bottom-0 left-0 h-1 bg-green-500" style={{ width: `${progress}%` }}></div>
    </div>
  );
};

export default SuccessMsg;
