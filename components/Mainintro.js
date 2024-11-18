"use client";
import { MaskContainer } from "./ui/svg-mask-effect";

export function Mainintro() {
  return (
    <div className="h-full w-full  flex items-center justify-center  overflow-hidden">
      <MaskContainer
        revealText={
          <p className="max-w-4xl mx-auto text-slate-800 text-center  text-4xl font-bold">
            I’m Niten Pandit Chhetri, an Information Management student
            passionate about web development and digital marketing. I build
            seamless user experiences using the MERN stack, React, and Next.js,
            blending tech with Digital Marketing.
          </p>
        }
        className="h-[] w-full"
      >
        I’m Niten Pandit Chhetri,an{" "}
        <span className="text-red-500">Information Management </span> student
        passionate about web development and digital marketing. I build seamless
        user experiences using the{" "}
        <span className="text-red-500">MERN stack</span>,React, and Next.js,
        blending tech with{" "}
        <span className="text-red-500">Digital Marketing</span>.
      </MaskContainer>
    </div>
  );
}
