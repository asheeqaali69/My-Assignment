import Image from "next/image"

export default function Home() {
  return (

    <div> 
      
     <div className="flex justify-center items-center w-full">
  <Image 
    src="/Kiyotaka Ayanokoji.jpg" 
    alt="Ayanokoji 'The manupilator'" 
    width={1920} 
    height={1164} 
   className="object-cover" 
  />
</div>

<div className="flex h-14 w-3"></div>

<div className="flex justify-center w-full">
<div className="flex text-7xl font-semibold font-serif justify-center items-end"> <h2>CLASSROOM OF THE ELITE</h2>
</div>
</div>

<div className="flex justify-center w-full">
<div className="flex justify-center h-56 w-11/12 items-center  font-thin font-serif text-xl">
<p className="flex justify-center text-justify">The Classroom of the Elite" is a psychological thriller anime set in a prestigious Japanese high school where classes compete for rank and privileges. The story follows Ayanokoji Kiyotaka, a quiet and intelligent student in the lowest-ranked Class D, as he navigates complex relationships, alliances, and hidden agendas to rise through the ranks. With themes of social hierarchy, human psychology, and ambition, the anime explores the darker side of high school life, where students must use manipulation and strategy to survive. The tone is dark, suspenseful, and thought-provoking, making it a gripping watch for fans of psychological dramas.</p>
</div>
</div>
<div className="flex h-5 w-5"></div>

<div className="flex justify-center w-full">
<div className="flex h-1 w-5"></div>
<div className="flex justify-center items-center w-4/12">
  <Image 
    src="/classroom_of_the_elite.jpg" 
    alt="classroom of the elite" 
    width={1920} 
    height={1164} 
   className="rounded-xl" 
  />
</div>
<div className="flex h-1 w-4"></div>
<div className="flex justify-center items-center w-4/12 ">
  <Image 
    src="/hori.jpg" 
    alt="Horikita Suzune" 
    width={1920} 
    height={1164} 
   className="rounded-xl" 
  />
</div>
<div className="flex h-1 w-4"></div>
<div className="flex justify-center items-center w-4/12 ">
  <Image 
    src="/hori_manabu.jpg" 
    alt="Horikita Manabu" 
    width={1920} 
    height={1164} 
   className="rounded-xl" 
  />
</div>
<div className="flex h-1 w-5"></div>
</div>
<div className="flex h-9 w-3"></div>


<div className="flex justify w-full">
<div className="flex h-1 w-5"></div>
<div className="flex justify items-center w-6/12">
  <Image 
    src="/sakayanagi.jpg" 
    alt="Ayanokoji" 
    width={1980} 
    height={1200} 
   className="rounded-xl" 
  />
</div>

<div className="flex h-1 w-5"></div>
<div className="flex justify items-center w-6/12">
  <Image 
    src="/Classroom Eliteecho "
    alt="THE MASKED MAN" 
    width={1920} 
    height={1200} 
   className="rounded-xl" 
  />
</div>
<div className="flex h-1 w-5"></div>
</div>
<div className="flex h-7 w-3"></div>





</div>
  );
}