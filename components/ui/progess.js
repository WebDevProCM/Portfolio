import React from "react";
import { Progress } from "@nextui-org/react";

export default function Progess({skill}) {
  return (
    <Progress
      size="lg"
      radius="lg"
      classNames={{
        base: "max-w-lg my-[30px] ",
        track: "drop-shadow-lg border border-default",
        indicator: "violet",
        label: "tracking-wider font-medium text-white font-bebas",
        value: "text-white",
      }}
      label={skill}
      value={99}
      showValueLabel={true}
    />
  );
}
