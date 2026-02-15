import Image from "next/image";

export default function TourDayCard() {
  return (
    <section className="flex items-center justify-center py-20 bg-white">
      <div className="w-full max-w-sm border border-green-500 p-4">
        {/* Image */}
        <div className="relative w-full h-64">
          <Image
            src="/WhatsApp Image 2026-02-15 at 13.14.22.jpeg"
            alt="Colombo City Centre Shopping Mall"
            fill
            className="object-cover"
          />
        </div>

        {/* Caption */}
        <p className="mt-3 text-center text-sm text-gray-700">
          Colombo City Centre Shopping Mall
        </p>

        {/* Day Title */}
        <h2 className="mt-6 text-center text-lg font-semibold tracking-wide">
          DAY 1 - Colombo
        </h2>

        {/* Shopping line */}
        <div className="mt-4 flex items-center justify-center gap-2 text-sm">
          <span className="text-lg">🛍️</span>
          <span>Shopping And Sightseeing In Colombo</span>
        </div>

        {/* Places */}
        <div className="mt-6 text-center text-sm text-gray-700 leading-6">
          <p>One Galle Face | Colombo City Centre</p>
          <p>Barefoot Gallery | Galle Face Hotel</p>
          <p className="italic mt-2">
            Activities Dependent On Arrival Flight Times
          </p>
        </div>
      </div>
    </section>
  );
}
