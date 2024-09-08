import React from 'react'
import ProfileImage from "../assets/profile.jpg";

export const Img = ({classExt, src, rounded, alt}) => {
  return (
    <img className={`${rounded ? "rounded-full" : "" } ${classExt}`} src={src} alt={`${alt ? alt : "Work with Tariq"}`} />
  )
}
