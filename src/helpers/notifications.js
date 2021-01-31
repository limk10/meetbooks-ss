import { toast } from "react-toastify";

const toastifyNotification = async (
  type = "info",
  message = "Ops...",
  position = "top-right",
  timingClose = 5000
) => {
  switch (type) {
    case "info":
      toast.info(message, {
        position,
        autoClose: timingClose,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        pauseOnFocusLoss: false,
      });
      break;

    case "warn":
      toast.warn(message, {
        position,
        autoClose: timingClose,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        pauseOnFocusLoss: false,
      });
      break;

    default:
      toast.success(message, {
        position,
        autoClose: timingClose,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        pauseOnFocusLoss: false,
      });
      break;
  }
};

export { toastifyNotification };
