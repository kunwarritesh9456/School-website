import React from "react";

const Academics = () => {

const courses = [
"STEM Programs",
"Arts & Performing Arts",
"Foreign Languages",
"Theology Studies"
];

return (
<section className="py-20">

<div className="text-center mb-12">
<h2 className="text-3xl font-bold">Academics</h2>
</div>

<div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-6">

{courses.map((course,index)=>(
<div key={index} className="bg-white shadow p-6 text-center">

<h3 className="font-semibold">{course}</h3>

</div>
))}

</div>

</section>
);
};

export default Academics;