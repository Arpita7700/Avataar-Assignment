import Carousel from "./Carousel";
import DynamicMenu from "./DynamicMenu";

const slides = [
  {
  img:"https://images.unsplash.com/photo-1701122640209-26d07d4f35ed?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  title:"Heading of a Image"
  },
  {
  img:"https://images.unsplash.com/photo-1683427850494-bcf6511c962b?q=80&w=2051&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  title:"Amazing Sunset"
  },
  {
  img:"https://images.unsplash.com/photo-1702561667986-113f3a9e06bc?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  title:"Desk with certain items"
  },
  {
  img:"https://images.unsplash.com/photo-1702422578724-037f13ed7af8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  title:"Amazing Design"
  },
  {
  img:"https://images.unsplash.com/photo-1702474447694-e8c8dc2508e0?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  title:"Mountains in Winter"
  },
  
  
  
  
];

function App() {
  return (
    <div className="h-screen w-screen flex flex-col">
      <DynamicMenu />

      <div className="grow pt-10  space-y-32 px-20">

        <div className="w-full h-28 flex-col justify-start items-center  lg:gap-6 flex">
          <h1 className="text-stone-800 text-3xl lg:text-6xl font-bold  leading-10 whitespace-nowrap ">
            Featured Products
          </h1>
          <h2 className="w-full text-center text-stone-800 text-sm sm:text-lg lg:text-2xl font-normal leading-loose">
            Explore and discover a variety of products
          </h2>
        </div>

        <Carousel slides={slides} />

      </div>
    </div>
  );
}

export default App;
