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
    description: "This is food recipes sharing full stack web app which is build using nextjs. Its protected with jose session management library.",
    header: "portfolio",
    // className: "md:col-span-2",
    link: "https://github.com/WebDevProCM/Meals-App"
}
];

const Header = ({image}) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black">
    <Image src={`/images/${image}.png`} alt="image" width={800} height={400} />
  </div>
);

export function Projects() {
  return (
    <div className="overflow-x-hidden"> 
    {/* <h1 className='md:text-[50px] text-[40px] text-page-purple font-bebas mx-auto text-center' id="projects">
      SOME OF MY PROJECTS
    </h1> */}
    <ProjectsTitle />
    <hr className='max-w-[60px] h-[10px] bg-page-purple mx-auto mb-[50px]'></hr>
    <BentoGrid className="max-w-2xl mx-auto md:auto-rows-[20rem]">
    {items.map((item, i) => (
        <BentoGridItem
          key={i}
          link={item.link}
          title={item.title}
          description={item.description}
          header={<Header image={item.header} />}
          className={item.className}
        />
      ))}
    </BentoGrid>

    </div>
  );
}
