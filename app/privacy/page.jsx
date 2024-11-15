import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const Privacy = () => {
  return (
    <div
      className={`${poppins.className} flex flex-col items-center  min-h-[88vh] gap-2 w-[55%] mx-auto my-[2em] bg-white p-4 rounded-lg shadow-lg shadow-gray-600 max-770px:w-[90%]`}
    >
      <div className="text-center text-2xl font-bold">Privacy Policy</div>
      {/* <div className="font-semibold text-[17px] self-start">Description</div> */}
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

      <p className="text-[15px] text-slate-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, officia
        debitis necessitatibus, itaque accusamus sed perspiciatis tenetur ipsum
        eligendi sunt odit fugiat vel corrupti amet error, qui laudantium maxime
        nam! Architecto, quaerat. Voluptatem inventore delectus obcaecati
        asperiores veritatis.
      </p>

      <p className="text-[15px] text-slate-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore
        incidunt nulla asperiores ullam autem! Ipsum dolorum, asperiores
        sapiente maiores iure obcaecati tempore dolore? Ex debitis asperiores
        aliquid provident iusto quos accusamus fugiat facere. Molestiae commodi
        a pariatur doloremque quae natus officia repudiandae vero, quis veniam
        error labore sit. Labore expedita, qui magni delectus suscipit
        obcaecati? Quo, exercitationem. Quae ab distinctio hic perferendis
        cumque ipsa nobis a velit!
      </p>

      <br />
      <p className="text-[15px] text-slate-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, officia
        debitis necessitatibus, itaque accusamus sed perspiciatis tenetur ipsum
        eligendi sunt odit fugiat vel corrupti amet error, qui laudantium maxime
        nam! Architecto, quaerat. Voluptatem inventore delectus obcaecati
        asperiores veritatis, id dicta quaerat provident ad officiis, enim
        voluptas illo voluptates.
      </p>

      <p className="text-[15px] text-slate-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Autem, officia
        debitis necessitatibus, itaque accusamus sed perspiciatis tenetur ipsum
        eligendi sunt odit fugiat vel corrupti amet error, qui laudantium maxime
        nam! Architecto, quaerat.
      </p>

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

      <p className="text-[15px] text-slate-500">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
        accusantium ullam veritatis porro obcaecati aperiam, neque
        necessitatibus culpa. Dolores hic dolore suscipit modi alias fugit porro
        ab quod, eaque nam magnam veniam ea, provident id earum aliquid cum
        mollitia maiores nihil iure dolorem officia! Quisquam, sapiente?
        Incidunt, libero? At qui ipsa labore quae repellat numquam odit amet
        molestiae, eum, harum suscipit mollitia nam incidunt distinctio
        inventore tempore voluptas iure! Minima excepturi velit veritatis, magni
        ut animi veniam dicta!
      </p>
    </div>
  );
};

export default Privacy;
