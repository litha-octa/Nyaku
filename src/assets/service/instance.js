import { BaseUrl } from "./BaseUrl";
import axios from "axios";

export const instance = axios.create({
  baseURL: BaseUrl,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});
