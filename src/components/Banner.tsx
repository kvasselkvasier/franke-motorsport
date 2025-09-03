import Image from "next/image";

export default function Banner() {
  return (
    <div className="w-full flex justify-center mb-8">
      <Image
        src="/franke-motorsport-banner.PNG"
        alt="Franke Motorsport Banner"
        width={1200}
        height={350}
        className="rounded-xl shadow-lg border-4 border-red-600 bg-white max-w-[900px] w-full h-auto object-contain"
        priority
      />
    </div>
  );
}
