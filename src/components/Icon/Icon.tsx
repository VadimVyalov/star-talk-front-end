import { type SVGProps } from "react";
import cn from "@/helpers/cn";

const Icon = ({
  name, id,
  className,
  ...props
}: SVGProps<SVGSVGElement> & {
  name: string;
  id: string;
}) => {

  return (

    // <span className={cn("block", className)}>

    <svg
      {...props}

      className={cn("inline-flex w-4 h-4", className)}
    >
      <use href={`${name}#${id}`} />
    </svg>
    //</span >
  );
}

export default Icon