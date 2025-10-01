"use client";
import React from "react";
import { useIntersection } from "react-use";
import { Title } from "./title";
import { ProductCard } from "./ProductCart";
import { cn } from "@/lib/utils";
import { useCategoryStore } from "@/store/category";

interface Props {
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: any[];
  className?: string;
  categoryId: number;
  listClassname?: string;
}

export const ProductsGroupList: React.FC<Props> = ({
  title,
  items,
  className,
  categoryId,
  listClassname,
}) => {
  const setCategoryID = useCategoryStore((state) => state.setActiveId);
  const intersectionRef = React.useRef(null);
  const intersection = useIntersection(intersectionRef, { threshold: 0.4 });
  React.useEffect(() => {
    if (intersection?.isIntersecting) {
      setCategoryID(categoryId);
    }
  }, [
    categoryId,
    intersection,
    intersection?.isIntersecting,
    setCategoryID,
    title,
  ]);
  return (
    <div className={className} ref={intersectionRef} id={title}>
      <Title text={title} size="lg" className="font-extrabold mb-5" />
      <div className={cn("grid grid-cols-3 gap-[50px]", listClassname)}>
        {items.map((product, i) => (
          <ProductCard
            key={product.id + i}
            name={product.name}
            imageUrl={product.imageUrl}
            price={product.items[0].price}
            count={i % 2}
            description={product.description}
          />
        ))}
      </div>
    </div>
  );
};
