// <Gallery photos={object.photos} photoWidth="250" photoHeight="210" style={{flex: "0 1 250px"}}/>
"use client";
import Image from "next/image";
import { register } from "swiper/element/bundle";
import { useEffect } from "react";
import clsx from "clsx";
import "./Gallery.css";


export default function Gallery(props) {
  const { photos, photoWidth, photoHeight, thumbs } = props;
  const { className, style } = props;

  useEffect(() => {
    register();
  }, [])

  return (
    <div className={clsx("gallery", className)} style={style}>
      <swiper-container thumbs-swiper=".thumbs" navigation="true" loop="true" space-between="10" pagination="true" pagination-type="fraction" speed="250">
        {photos.map((photo, i) => (
          <swiper-slide key={i}>
            <Image src={"/photos/"+photo.name} width={photoWidth} height={photoHeight} style={{display: "block", objectFit: "cover", inlineSize: "100%"}} alt="" loading="lazy"/>
          </swiper-slide>
        ))}
      </swiper-container>
      {thumbs
        ? <swiper-container class="thumbs" slides-per-view="auto" free-mode="true" center-insufficient-slides={true} space-between="5">
            {photos.map((photo, i) => (
              <swiper-slide key={i} style={{inlineSize: "60px", blockSize: "40px", cursor: "pointer"}}>
                <Image src={"/photos/"+photo.name} width="60" height="40" alt="" loading="lazy"/>
              </swiper-slide>
            ))}
          </swiper-container>
        : null
      }
    </div>
  )
}
