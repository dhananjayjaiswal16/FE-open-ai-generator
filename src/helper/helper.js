import axios from 'axios';
import { backendApi } from '../config';
export async function generateImage(prompt, size, setIsLoading) {
  const backendUrl = backendApi();
  try {
    setIsLoading(true);
    const response = await axios.post(`${backendUrl}/generateImage`, {
      prompt,
      size
    });
    //console.log("response img in helper", response.data?.image);

    // if (!response.ok) {
    //   setIsLoading(false);
    //   throw new Error("Image could not be generated");
    // }
    setIsLoading(false);
    return (response.data?.image);
  } catch (error) {
    console.log(error.message);
  }
}