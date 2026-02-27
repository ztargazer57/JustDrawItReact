import { Plus } from "lucide-react";
import { useState } from "react";

interface MultiImageUploadProps {
  label?: string;
  maxImages?: number; // optional limit
}

export default function MultiImageUpload({ label, maxImages = 10 }: MultiImageUploadProps) {
  const [images, setImages] = useState<string[]>([]);

  // Add a new image
  function handleAdd(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const url = URL.createObjectURL(file);

    if (images.length < maxImages) {
      setImages((prev) => [...prev, url]);
    }
  }

  // Remove image by index
  function handleRemove(index: number) {
    setImages((prev) => prev.filter((_, i) => i !== index));
  }

  return (
    <div className="w-full">
      {label && <p className="mb-2 font-medium">{label}</p>}

      <div className="flex gap-4 overflow-x-auto drop-shadow-md/50">
        {images.map((img, idx) => (
          <div key={idx} className="relative w-30 h-30 shrink-0 rounded-lg overflow-hidden ">
            <img src={img} alt={`upload-${idx}`} className="w-full h-full object-cover " />
            <button
              onClick={() => handleRemove(idx)}
              className="absolute top-1 right-1 bg-jddanger text-white w-6 h-6 rounded-full flex items-center justify-center text-xs drop-shadow-sm/100 hover:bg-red-900"
            >
              <p className="text-shadow-md/100 bh-none">X</p>
            </button>
          </div>
        ))}

        {images.length < maxImages && (
          <label className="h-30 w-30 flex items-center shrink-0 justify-center rounded-lg border-2 border-dashed border-neutral-400  cursor-pointer  hover:bg-jdwhite transition-all duration-100" >
            <div className="text-5xl text-neutral-400 select-none"><Plus className="h-12 w-12"/></div>
            <input
              type="file"
              accept="image/*"
              onChange={handleAdd}
              className="hidden"
            />
          </label>
        )}
      </div>
    </div>
  );
}