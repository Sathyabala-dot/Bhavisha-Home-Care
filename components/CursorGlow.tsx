"use client";

import { useEffect } from "react";

export default function CursorGlow() {

useEffect(()=>{

const glow=document.querySelector(".cursor-glow") as HTMLDivElement;

const move=(e:MouseEvent)=>{

glow.style.left=e.clientX+"px";
glow.style.top=e.clientY+"px";

}

window.addEventListener("mousemove",move);

return()=>window.removeEventListener("mousemove",move);

},[]);

return <div className="cursor-glow"/>

}