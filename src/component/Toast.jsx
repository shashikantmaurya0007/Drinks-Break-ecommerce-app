import React from "react";

import { ToastContainer } from "react-toastify";
const Toast = () => {
  return (
    <>
      <ToastContainer
        theme="colored"
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export { Toast };
