import React from 'react'

const Articles = () => {
  return (
    <div className="mt-[120px] w-[800px] h-[208px] mx-auto">
      <div className="leading-normal">
        <p className="text-text mb-6">
          <span className="font-bold">
            Programming languages all have built-in data structures, but these
            often differ from one language to another.
          </span>
          This article attempts to list the built-in data structures available
          in JavaScript and what properties they have. These can be used to
          build other data structures. Wherever possible, comparisons with other
          languages are drawn.
        </p>

        <h2 className="text-blue">
          Dynamic typing
        </h2>

        <p className="text-text mb-6">
          JavaScript is a loosely typed and dynamic language. Variables in
          JavaScript are not directly associated with any particular value type,
          and any variable can be assigned (and re-assigned) values of all
          types:
        </p>
      </div>

      <div className="bg-aboutBg px-6 py-6">
        <p className="text-white">
          <span>let</span> foo = <span className="text-[#6AD445]">42</span>;
          <span className="text-aboutText ml-4">
            {"//"} foo is now a number
          </span>
        </p>

        <p className="text-white">
          foo = <span className="text-[#6AD445]">&apos;bar&apos;</span>;
          <span className="text-aboutText ml-4">
      
            {"//"} foo is now a string
          </span>
        </p>

        <p className="text-white">
          foo = <span className="text-[#6AD445]">true</span>;
          <span className="text-aboutText ml-4">
    
            {"//"} foo is now a boolean
          </span>
        </p>
      </div>
    </div>
  );
}

export default Articles