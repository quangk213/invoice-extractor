"use client";
import { useState } from "react";
import InvoiceForm from "./_component/InvoiceForm";
import UploadedImage from "./_component/UploadedImage";

export default function Home() {
  const [imageUrl, setImageUrl] = useState<string>();

  const chooseImage = (url: string) => {
    setImageUrl(url);
  };

  return (
    <div className="h-screen p-2">
      <div className="h-full grid grid-cols-[1fr_1px_1fr]">
        <InvoiceForm image={imageUrl} />
        <div className="h-full border border-dashed border-gray-500"></div>
        <UploadedImage image={imageUrl} chooseImage={chooseImage} />
      </div>
    </div>
  );
}
