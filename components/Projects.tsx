import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import Image from "next/image";
import ProjectsTitle from "./ProjectsTitle";


const items = [
  {
    title: "TrueElegance: The Perfume Store",
    description: "TrueElegance is a fully responsive e-commerce project that sells Perfumes.Features include user authentication (register, login), add to cart and APIs authorizations.",
    header: "ecommerce",
    // className: "md:col-span-2",
    link: "https://github.com/WebDevProCM/E-commerce-FrontEnd"
},
{
    title: "Chat App",
    description: "This is a chat app where a user can Create/Join a chat room just using a username and ID of the chat room.",
    header: "chat app",
    // className: "md:col-span-2",
    link: "https://github.com/WebDevProCM/Chat-App"
},
// {
//     title: "ORDERS MANAGEMENT SYSTEM",
//     description: "This is an order management system where the admin can record the daily order details of the shop in this system and update them as necessary.",
//     header: "order management",
//     className: "md:col-span-1",
//     link: "https://github.com/WebDevProCM/Orders-Management-System"
// },
{
    title: "Food recipes sharing web app",
    description: "This is a food recipes sharing full stack web app built using nextjs(app router). Its protected with jose session management library.",
    header: "recipes sharing app",
    // className: "md:col-span-2",
    link: "https://github.com/WebDevProCM/Meals-App"
}
];

const Header:React.FC<{image: string}> = ({image}) => (
  <div className="flex justify-center items-center max-w-[635px] sm:h-[300px] h-[220px] overflow-hidden rounded-xl dark:bg-dot-white/[0.2] bg-dot-black/[0.2]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black">
    <Image className="w-full h-full" width={635} height={200} src={`/images/${image}.png`} alt="image"/>
  </div>
);

export const Projects: React.FC = () =>{
  return (
    <div className="overflow-x-hidden"> 
    {/* <h1 className='md:text-[50px] text-[40px] text-page-purple font-bebas mx-auto text-center' id="projects">
      SOME OF MY PROJECTS
    </h1> */}
    <ProjectsTitle />
    <hr className='max-w-[60px] h-[10px] bg-page-purple mx-auto mb-[50px]'></hr>
    <BentoGrid>
    {items.map((item, i) => (
        <BentoGridItem
          key={i}
          link={item.link}
          title={item.title}
          description={item.description}
          header={<Header image={item.header} />}
        />
      ))}
    </BentoGrid>

    </div>
  );
}


// const Header = ({image}) => (
//   <div className="relative flex flex-1 max-w-[635px] max-h-[250px] min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black">
//     <Image src={`/images/${image}.png`} alt="image" fill/>
//   </div>
// );