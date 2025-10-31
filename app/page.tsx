import { MAIN } from "@/lib/constants";
import { NavLink } from "./components/ui/link";
import qwe from "./assets/image-mockups.png";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="container relative w-full bg-background md:justify-between flex flex-col md:flex-row-reverse overflow-hidden md:h-[500px]">
        <div className="hero relative bg-[url(/bg-intro-mobile.svg)] md:bg-[url(/bg-intro-desktop.svg)] bg-cover bg-no-repeat h-80 w-full md:h-full lg:bg-[position:right_top_80%]">
          <Image src={qwe} alt="Mockup aestethic" className="w-full max-w-[400px] max-md:-top-20 left-1/2 max-md:-translate-x-1/2  md:scale-150 md:left-auto md:right-0 absolute" />
        </div>
        <div className="text-center p-6 flex items-center justify-center flex-col gap-6 md:max-w-[650px]">
          <h1 className="text-4xl font-medium text-primary-blue-950 dark:text-white md:text-6xl md:text-left">{MAIN.HERO.TAGLINE}</h1>
          <p className="text-xs text-center text-neutral-gray-600 md:text-left md:text-sm text-pretty md:max-w-4/5 self-start">{MAIN.HERO.SUBTITLE}</p>
          <NavLink href={"/"} className="w-fit text-white md:self-start transition-all hover:translate-y-1" variant={"pill"}>Request an Invite</NavLink>
        </div>
      </section>
      <section className="bg-neutral-gray-100 py-12 dark:bg-background">
        <div className="container flex  flex-col gap-6 p-6 ">
          <div className="flex flex-col gap-8">
            <h2 className="text-primary-blue-950 font-medium text-3xl text-center md:text-left dark:text-white">{MAIN.MARKETING.TAGLINE}</h2>
            <p className="text-xs text-center text-neutral-gray-600 md:text-left md:text-sm text-pretty md:max-w-2/5 self-start">{MAIN.MARKETING.SUBTITLE}</p>
          </div>
          <div className="flex flex-col gap-6 md:flex-row md:justify-between md:items-center">
            {MAIN.MARKETING.CARDS.map(el => (
              <div key={el.NAME} className={cn("flex flex-col items-center gap-10 md:items-start", el.CLASSNAME)}>
                <div className="size-14">{el.ICON}</div>
                <div className="space-y-6 text-center md:text-left">
                  <h3 className="text-primary-blue-950 font-medium text-xl dark:text-white">{el.TITLE}</h3>
                  <p className="text-neutral-gray-600 text-xs">{el.CONTENT}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-gray-50 dark:bg-background py-12 md:py-20">
        <div className="container flex  flex-col gap-16 p-6">
          <h2 className="text-primary-blue-950 font-medium text-3xl text-center md:text-left dark:text-white">{MAIN.ARTICLES.TAGLINE}</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {MAIN.ARTICLES.CARDS.map((el, i) => (
              <NavLink href="/" key={i} className={cn("group flex flex-col bg-white rounded-md dark:bg-neutral-gray-50", el.CLASSNAME)}>
                <div className="rounded-md overflow-hidden size-full">
                  <Image src={el.IMAGE} width={300} height={300} alt="Article Thumbnail" className="max-h-[250px] transition-all duration-700 ease-in-out group-hover:scale-105 group-hover:blur-[1px] size-full object-center object-cover" />
                </div>
                <div className="p-7 flex flex-col gap-4">
                  <span className="block text-xs text-neutral-gray-600 md:text-xs">{`By ${el.AUTHOR}`}</span>
                  <span className="block text-sm text-primary-blue-950 md:text-base">{el.TITLE}</span>
                  <p className="text-neutral-gray-600 text-xs md:text-sm">{el.CONTENT}</p>
                </div>
              </NavLink>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
