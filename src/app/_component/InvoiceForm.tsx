"use client";
import { useState } from "react";
import { createWorker } from "tesseract.js";

type Props = {
  image: string | undefined;
};

export default function InvoiceForm({ image }: Props) {
  const [text, setText] = useState("");

  const extractImage = async () => {
    if (!image) {
      return;
    }
    const worker = await createWorker("vi");
    const ret = await worker.recognize(image);
    setText(ret.data.text);
    await worker.terminate;
  };

  return (
    <div className="bg-white">
      <button
        onClick={extractImage}
        className="px-2 py-1 text-white bg-blue-500 rounded-sm"
      >
        Extract image
      </button>
      {text && <p>{text}</p>}
    </div>
  );
}
