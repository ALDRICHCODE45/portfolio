import { type ReactElement } from "react";
import { BentoGrid, BentoGridItem } from "../ui/BentoGrid";
import { gridItems } from "@/data/index";

export interface GridProps {}

export function Grid({}: GridProps): ReactElement {
  return (
    <section id="about">
      <BentoGrid className="w-full py-20">
        {gridItems.map((item) => (
          <BentoGridItem
            key={item.id}
            description={item.description}
            title={item.title}
            id={item.id}
            className={item.className}
            img={item.img}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
            spareImg={item.spareImg}
          />
        ))}
      </BentoGrid>
    </section>
  );
}
