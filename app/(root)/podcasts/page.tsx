"use client";
import Background from "@/components/layout/background";
import {
  mdiAlphabetCyrillic,
  mdiCodeJson,
  mdiHiking,
  mdiPlaneTrain,
} from "@mdi/js";
import Icon from "@mdi/react";
import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";

const Podcasts = () => {
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
      label: "Life style",
      icon: <Icon className="h-5 w-5" path={mdiHiking} />,
    },
    {
      label: "Technology",
      icon: <Icon className="h-5 w-5" path={mdiCodeJson} />,
    },
    {
      label: "Language",
      icon: <Icon className="h-5 w-5" path={mdiAlphabetCyrillic} />,
    },
    {
      label: "Travel",
      icon: <Icon className="h-5 w-5" path={mdiPlaneTrain} />,
    },
  ];

  return (
    <div
      className={`min-h-screen bg-gradient-to-tl from-black to-stone-700 transition-opacity ${
        mounted ? "opacity-100" : "opacity-30"
      }`}
    >
      <div className="fixed bottom-0 left-0 z-0 h-full w-full items-center gap-12 overflow-hidden opacity-10 md:top-0">
        <Background />
      </div>
      <div className="container space-y-8 pt-24">
        <div>
          <p className="text-3xl font-bold">Podcasts</p>
          <p className="text-sm">
            From Code to Conversation: Tech Podcasts changed My life
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
              } flex transform items-center gap-1 rounded-lg px-4 py-1 transition-all duration-300 ease-in-out hover:scale-105 hover:text-neutral-700 active:scale-95 md:hover:bg-white`}
            >
              {filter.label} {filter.icon}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Podcasts;
