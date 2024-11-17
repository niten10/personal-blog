import {
  Instagram,
  Dribbble,
  DribbbleIcon as Behance,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="w-full md:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-center">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-16">
          Let's talk
        </h1>

        <div className="space-y-6 mb-16">
          <Link
            href="https://www.instagram.com/niten.exe?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            className="flex items-center gap-4 text-xl hover:text-neutral-600 transition-colors"
          >
            <div className="w-8 h-8 bg-red-400 rounded-full flex items-center justify-center">
              <Instagram className="w-5 h-5 text-white" />
            </div>
            Instagram
          </Link>

          <Link
            href="#"
            className="flex items-center gap-4 text-xl hover:text-neutral-600 transition-colors"
          >
            <div className="w-8 h-8 bg-red-400 rounded-full flex items-center justify-center">
              <Dribbble className="w-5 h-5 text-white" />
            </div>
            Dribbble
          </Link>

          <Link
            href="#"
            className="flex items-center gap-4 text-xl hover:text-neutral-600 transition-colors"
          >
            <div className="w-8 h-8 bg-red-400 rounded-full flex items-center justify-center">
              <Behance className="w-5 h-5 text-white" />
            </div>
            Behance
          </Link>
        </div>

        <div className="space-y-4 mb-16">
          <Link
            href="mailto:sendatniten@gmail.com"
            className="block text-lg hover:text-neutral-600 transition-colors"
          >
            @sendatniten@gmail.com
          </Link>
          <Link
            href="tel:+977-9864461563"
            className="block text-lg hover:text-neutral-600 transition-colors"
          >
            +977 9864461563
          </Link>
        </div>

        <div className="space-y-1">
          <p className="text-lg"> Bhangal Budhanilkantha</p>
          <p className="text-lg">Kathmandu, Nepal</p>
        </div>
      </div>

      <div className="w-full md:w-1/2 h-[400px] md:h-auto relative">
        <Image
          src="/Asset3.png"
          alt="icon"
          width={1000}
          height={1000}
          className="w-full md:w-1/2  "
        ></Image>
      </div>
    </div>
  );
}
