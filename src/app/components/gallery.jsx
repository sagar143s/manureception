"use client";
import React from "react";
import Image from "next/image";
import Image1 from "../../../public/photo.png";
import Image2 from "../../../public/photo.png";
import Image3 from "../../../public/photo.png";
import Image4 from "../../../public/photo.png";
import Image5 from "../../../public/photo.png";
import Image6 from "../../../public/photo.png";
import Image7 from "../../../public/photo.png";
import Image8 from "../../../public/photo.png";


const FlexMasonryGallery = () => {
  const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7, Image8];

  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "15px",
        justifyContent: "center",
        padding: "20px",
      }}
    >
      {images.map((image, index) => (
        <div
          key={index}
          style={{
            flex: "1 1 calc(33% - 15px)", // Adjusts size for 3 images per row
            maxWidth: "calc(33% - 15px)", // Prevents exceeding 3 images per row
            borderRadius: "10px",
            overflow: "hidden",
            boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
          }}
        >
          <Image
            src={image}
            alt={`Gallery Image ${index + 1}`}
            layout="responsive"
            width={300}
            height={200}
            style={{ objectFit: "cover" }}
          />
        </div>
      ))}
    </div>
  );
};

export default FlexMasonryGallery;
