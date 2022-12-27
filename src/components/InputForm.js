import React, { useState } from 'react'
import { generateImage } from '../helper/helper';

const InputForm = ({ isLoading, setIsLoading }) => {
  const [prompt, setPrompt] = useState("");
  const [size, setSize] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (!prompt) {
      alert("Please enter a value");
      return;
    }
    const imageUrl = generateImage(prompt, size, setIsLoading);
  }
  return (
    <section class="showcase">
      <form id="image-form" onSubmit={onSubmit}>
        <h1>Describe An Image</h1>
        <div class="form-control">
          <input type="text" id="prompt" placeholder="Enter Text"
            onChange={(e) => setPrompt(e.target.value)}
          />
        </div>
        {/* size */}
        <div class="form-control">
          <select name="size" id="size" onChange={(e) => setSize(e.target.value)}>
            <option value="small">Small</option>
            <option value="medium" selected>Medium</option>
            <option value="large">Large</option>
          </select>
        </div>
        <button type="submit" class="btn">Generate</button>
      </form>
    </section>
  )
}

export default InputForm
