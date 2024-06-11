"use client";
import Background from "@/components/layout/background";
import {
  mdiApplicationBraces,
  mdiChefHat,
  mdiCompare,
  mdiDevices,
} from "@mdi/js";
import Icon from "@mdi/react";
import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";

const Experiments = () => {
  const [mounted, setMounted] = useState(false);
  const [firstMount, setFirstMount] = useState(true);
  const [activeFilters, setActiveFilters] = useState<any>([]);

  const toggleFilter = (filter: any) => {
    setActiveFilters((prevFilters: any) => {
      if (prevFilters.includes(filter)) {
        return prevFilters.filter((f: any) => f !== filter);
      } else {
        return [...prevFilters, filter];
      }
    });
  };

  useEffect(() => {
    setMounted(true);
    if (firstMount) {
      setTimeout(() => {
        setFirstMount(false);
      }, 1000);
    }
  }, [firstMount]);

  useEffect(() => {
    console.log("Hello world");
  }, [activeFilters]);

  const filters = [
    {
      label: "Technology",
      icon: <Icon className="h-5 w-5" path={mdiDevices} />,
    },
    {
      label: "Performance",
      icon: <Icon className="h-5 w-5" path={mdiCompare} />,
    },
    {
      label: "Software",
      icon: <Icon className="h-5 w-5" path={mdiApplicationBraces} />,
    },

    { label: "Cooking", icon: <Icon className="h-5 w-5" path={mdiChefHat} /> },
  ];

  return (
    <div
      className={`min-h-screen bg-gradient-to-tl from-black to-neutral-700 transition-opacity ${
        mounted ? "opacity-100" : "opacity-30"
      }`}
    >
      <div className="fixed left-0 top-0 z-0 hidden h-full w-full items-center gap-12 overflow-hidden opacity-10 md:flex">
        <Background />
      </div>
      <div className="container space-y-8 pt-24">
        <div>
          <p className="text-3xl font-bold">Experiments</p>
          <p className="text-sm">
            From Ideas to Study: A Glimpse into My Tech Lab
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          {filters.map((filter, index) => (
            <Button
              key={index}
              onClick={() => toggleFilter(filter.label)}
              style={{
                transitionDelay: firstMount ? `${index * 200}ms` : "0ms",
              }}
              className={`${
                mounted
                  ? "translate-y-0 opacity-100"
                  : "translate-y-4 opacity-0"
              } ${
                activeFilters.includes(filter.label)
                  ? "bg-neutral-100 text-neutral-700"
                  : "bg-neutral-700 bg-opacity-30 text-slate-300"
              } flex transform items-center gap-1 rounded-lg px-4 py-1 transition-all duration-300 ease-in-out hover:scale-105 hover:bg-white hover:text-neutral-700 active:scale-95`}
            >
              {filter.label} {filter.icon}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experiments;