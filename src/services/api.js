import axios from "axios";
import config from "./../../config";

export async function signup(formData) {
  try {
    const resp = await axios.post(`${config.apiBaseUrl()}/signup`, formData);
    console.log(resp);
    return { status: resp.status, message: resp.data.message };
  } catch (error) {
    console.log("catch executed", error);
    if (axios.isAxiosError(error)) {
      const status = error.response?.status;
      const message = error.response?.data?.message || "Some thing went wrong";
      console.log(message);
      return { success: false, message, status };
    }
  }

  return { success: false, message: "Unexpected error", status: 500 };
}
