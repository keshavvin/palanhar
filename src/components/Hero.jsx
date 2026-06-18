import { useState } from 'react';
import { Link } from 'react-router-dom';

// Static hero banner (slider hidden) — artwork at public/banner-11.jpeg.
export default function Hero() {
  const [src, setSrc] = useState('/banner-11.jpeg');

  return (
    <section className="bg-black">
      <Link to="/invest/start" className="block" aria-label="गौ सेवा से जुड़ें — अभी निवेश करें">
        <img
          src={src}
          alt="पालनहार — गौ सेवा से समृद्धि"
          onError={() => setSrc('/hero-banner-3.jpg')}
          className="h-auto w-full"
          draggable="false"
        />
      </Link>
    </section>
  );
}
