import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const About = () => {
  return (
    <div className={`${poppins.className} flex flex-col items-center  min-h-[88vh] gap-2 w-[55%] mx-auto my-[2em] bg-white p-4 rounded-lg shadow-lg shadow-gray-600 max-770px:w-[90%]`}>

      <div className="text-center text-2xl font-bold">About Us</div>
      <div className="font-semibold text-[17px] self-start">Description</div>
      <p className="text-[15px] text-slate-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, officia
        debitis necessitatibus, itaque accusamus sed perspiciatis tenetur ipsum
        eligendi sunt odit fugiat vel corrupti amet error, qui laudantium maxime
        nam! Architecto, quaerat. Voluptatem inventore delectus obcaecati
        asperiores veritatis, id dicta quaerat provident ad officiis, enim
        voluptas illo voluptates, eaque iure dolor itaque nesciunt facilis
        pariatur facere! Facilis perspiciatis maiores repudiandae aspernatur
        quod dolorum labore repellat rerum accusamus velit.
      </p>

      <div className="font-semibold text-[17px] self-start">Our Mission</div>
      <p className="text-[15px] text-slate-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, officia
        debitis necessitatibus, itaque accusamus sed perspiciatis tenetur ipsum
        eligendi sunt odit fugiat vel corrupti amet error, qui laudantium maxime
        nam! Architecto, quaerat. Voluptatem inventore delectus obcaecati
        asperiores veritatis.
      </p>

      <div className="font-semibold text-[17px] self-start">
        How our site works
      </div>
      <p className="text-[15px] text-slate-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, officia
        debitis necessitatibus, itaque accusamus sed perspiciatis tenetur ipsum
        eligendi sunt odit fugiat vel corrupti amet error, qui laudantium maxime
        nam! Architecto, quaerat. Voluptatem inventore delectus obcaecati
        asperiores veritatis, id dicta quaerat provident ad officiis, enim
        voluptas illo voluptates.
      </p>

      <div className="font-semibold text-[17px] self-start">
        What you will learn
      </div>
      <p className="text-[15px] text-slate-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, officia
        debitis necessitatibus, itaque accusamus sed perspiciatis tenetur ipsum
        eligendi sunt odit fugiat vel corrupti amet error, qui laudantium maxime
        nam! Architecto, quaerat.
      </p>

      <div className="font-semibold text-[17px] self-start">Compatibility</div>
      <p className="text-[15px] text-slate-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, officia
        debitis necessitatibus, itaque accusamus sed perspiciatis tenetur ipsum
        eligendi sunt odit fugiat vel corrupti amet error, qui laudantium maxime
        nam! Architecto, quaerat. <br /> Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Saepe placeat dicta accusamus esse eius quisquam,
        consequuntur dolorem earum ipsum non adipisci fugit qui laborum labore
        veritatis corrupti nobis expedita libero quia delectus soluta ab
        repellat cupiditate? Illo corrupti blanditiis ipsum.
      </p>
    </div>
  );
};

export default About;
