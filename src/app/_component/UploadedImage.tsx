"use client";
import { useRef, useState } from "react";

type Props = {
  image: string | undefined;
  chooseImage: (url: string) => void;
};

export default function UploadedImage({ image, chooseImage }: Props) {
  const [file, setFile] = useState<File | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target?.files) {
      const chosenFile = e.target.files[0];
      if (!chosenFile) {
        return;
      }

      const blobUrl = URL.createObjectURL(chosenFile);
      setFile(chosenFile);
      chooseImage(blobUrl);
    }
  };

  return (
    <div className="bg-white flex justify-center items-center">
      {!file ? (
        <div>
          <input
            ref={inputRef}
            onChange={handleFileChange}
            type="file"
            className="hidden p-2"
          />
          <div
            onClick={handleClick}
            className="px-6 py-4 cursor-pointer text-gray-500 text-xl rounded-md border border-dashed border-gray-500"
          >
            Chọn ảnh
          </div>
        </div>
      ) : (
        <div className="h-full flex items-center">
          <img className="w-full max-h-full" src={image} />
        </div>
      )}
    </div>
  );
}
