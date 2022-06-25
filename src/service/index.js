import axios from "axios";
import { BASE_URL } from "./global";

export const getData = async (url) => {
  try {
    const response = await axios.get(`${BASE_URL}${url}`);
    return response.data;
  } catch (error) {
    console.log("error", error);
    return error;
  }
};

export const storeData = async (url, data, blank = false) => {
  try {
    const baseUrl = blank ? `${BASE_URL}${url}` : `${url}`;
    const response = await axios.post(baseUrl, data);
    return response;
  } catch (error) {
    return error;
  }
};

export const updateData = async (url, data) => {
  try {
    const response = await axios.put(`${BASE_URL}${url}`, data);
    return response.data;
  } catch (error) {
    return error;
  }
};

export const deleteData = async (url) => {
  try {
    const response = await axios.delete(`${BASE_URL}${url}`);
    return response.data;
  } catch (error) {
    return error;
  }
};
