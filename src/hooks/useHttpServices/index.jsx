import axios from "axios";
import { useState } from "react";
import { useCookies } from "react-cookie";
import baseURL from "../../config/baseURL";
export const useHttpServices = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [payload, setPayload] = useState({});
  const [cookies, setCookie] = useCookies(["token"]);
  const postData = async (path, body) => {
    try {
      setIsLoading(true);
      const { data } = await axios.post(`${baseURL}${path}`, body);

      return data;
    } catch (error) {
      //  error?.response
      console.log(error?.response?.data?.error?.message);
      return error?.response?.data;
    } finally {
      setIsLoading(false);
    }
  };
  const postProtectedData = async (path, body) => {
    try {
      const token = "123334";
      const { data } = await axios.post(`${baseURL}/${path}`, body, {
        authorization: `Bearer ${token}`
      });
      console.log(data.status);
    } catch (error) {
      console.log(error?.response?.status);
      console.log(error?.response?.data?.error?.message);
    }
  };
  const getProtectedData = async (path) => {
    try {
      const token = cookies?.token;
      console.log(token);
      const { data } = await axios.get(`${baseURL}/${path}`, {
        headers: {
          authorization: `Bearer ${token}`
        }
      });
      return data;
    } catch (error) {
      // console.log(error?.response?.status);
      // console.log(error?.response?.data?.error?.message);
      return error?.response?.data;
    } finally {
      setIsLoading(false);
    }
  };

  return { isLoading, postData, postProtectedData, getProtectedData, payload };
};
