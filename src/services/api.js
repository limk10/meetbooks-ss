import axios from "axios";
import { toast } from "react-toastify";
import { toastifyNotification } from "~/helpers/notifications";

toast.configure();

const api = axios.create({
  baseURL: process.env.REACT_APP_GOOGLE_BOOKS_API,
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    const { response = {} } = error;
    const { data } = response;

    if (data?.error) {
      toastifyNotification(
        "warn",
        `Opss... ${data?.error?.code} - ${data?.error?.message}`,
        "top-right",
        5000
      );
    }
    return Promise.reject(error);
  }
);

export default api;
