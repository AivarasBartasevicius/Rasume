import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="m-auto max-w-[1915px]">
        <section className={`relative w-full overflow-hidden pt-[11.69%]`}>
          <Image
            src="/contact.png"
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
