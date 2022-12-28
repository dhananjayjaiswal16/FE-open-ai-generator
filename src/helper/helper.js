import axios from 'axios';

export async function generateImage(prompt, size, setIsLoading) {
  try {
    setIsLoading(true);
    const response = await axios.post("http://localhost:5000/generateImage", {
      prompt,
      size
    });
    console.log("response img in helper", response.data?.image);

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