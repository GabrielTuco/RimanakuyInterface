import { azureApi } from "./config";

export const translate = async (text) => {
  try {
    const response = await azureApi.post(
      `/translate`,
      {
        text,
      },
      {}
    );

    return response.data;
  } catch (error) {
    throw error;
  }
};
