import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="m-auto max-w-[1915px]">
        <section className={`relative w-full overflow-hidden pt-[12.91%]`}>
          <Image
            src="/projects.png"
            alt="Welcome"
            fill
            className="object-contain"
            priority
          />
        </section>
      </div>
    </>
  );
}
