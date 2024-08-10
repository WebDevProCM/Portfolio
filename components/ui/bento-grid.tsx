import Link from "next/link";
import {cn} from "../../utils/cn";

export const BentoGrid = ({children,}: {children?: React.ReactNode}) => {
  return (
    <div
      className={cn(
        "flex flex-col gap-4 mx-auto justify-center items-center",
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  title,
  description,
  header,
  link
}: 
{
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  link?: any
}
) => {
  return (
    <div
      className={cn(
        "flex flex-col max-w-full justify-center items-center rounded-xl mx-auto group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent space-y-4"
      )}
      >
      {header}
      <div className="group-hover/bento:translate-x-2 transition duration-200 mr-auto">
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
        <Link href={link}>
          {title}
          </Link>
        </div>
        <div className="sm:max-w-[620px] max-w-[410px] font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};


// export const BentoGrid = ({
//   className,
//   children,
// }) => {
//   return (
//     <div
//       className={cn(
//         "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-1 gap-4 max-w-7xl mx-auto justify-items-center",
//         className
//       )}
//     >
//       {children}
//     </div>
//   );
// };

// export const BentoGridItem = ({
//   className,
//   title,
//   description,
//   header,
//   link
// }) => {
//   return (
//     <div
//       className={cn(
//         " row-span-1 rounded-xl mx-auto group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
//         className
//       )}
//       >
//       {header}
//       <div className="group-hover/bento:translate-x-2 transition duration-200">
//         <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
//         <Link href={link}>
//           {title}
//           </Link>
//         </div>
//         <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
//           {description}
//         </div>
//       </div>
//     </div>
//   );
// };