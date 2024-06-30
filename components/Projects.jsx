import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import Image from "next/image";

export function Projects() {
  return (
    <>
    <h1 className='md:text-[50px] text-[40px] text-page-purple font-bebas mx-auto text-center'>
      SOME OF MY PROJECTS
    </h1>
    <hr className='max-w-[60px] h-[10px] bg-page-purple mx-auto mb-[50px]'></hr>
    <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
    {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={<Header image={item.header} />}
          className={item.className}
        />
      ))}
    </BentoGrid>
    {/* <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem]">
      {projectItems.map((item, i) => (
        <BentoGridItem
        key={i}
        title={item.title}
        description={item.description}
        header={<Header image={item.header} />}
        className={item.className}
        />
      ))}
    </BentoGrid> */}


    </>
  );
}

const Header = ({image}) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black">
    <Image src={`/images/${image}.png`} alt="image" width={800} height={400} />
  </div>

  // <div className="flex flex-1 w-full h-full min-h-[6rem]">
  //   <Image src={`/images/${image}.png`} alt="image" width={800} height={400} />
  // </div>
);

const items = [
  {
    title: "TrueElegance: The Perfume Store",
    description: "TrueElegance is a fully responsive e-commerce project that sells Perfumes.Features include user authentication (register, login), add to cart and APIs authorizations.",
    header: "ecommerce",
    className: "md:col-span-2"
},
{
    title: "Chat App",
    description: "This is a chat app where a user can Create/Join a chat room just using a username and ID of the chat room.",
    header: "chat app",
    className: "md:col-span-1"
},
{
    title: "ORDERS MANAGEMENT SYSTEM",
    description: "This is an order management system where the admin can record the daily order details of the shop in this system and update them as necessary.",
    header: "order management",
    className: "md:col-span-1"
},
{
    title: "Portfolio Website",
    description: "This is a fully responsive portfolio website which shows details about the person in a attractive way.",
    header: "portfolio",
    className: "md:col-span-2"
}
];
