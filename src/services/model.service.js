import { azureApi } from "./config";

export const translate = async (text) => {
  try {
    const response = await azureApi.post(
      `/score`,
      {
        input_data: text,
      },
      {}
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};
