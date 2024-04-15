import Image from "next/image";

const mockUrls = [
  "https://utfs.io/f/f0776595-858c-49ee-bf2e-ec71417d0a63-1ut46m.avif",
  "https://utfs.io/f/181c618d-eaba-460c-9001-ad7ed6a50788-1w0bg.webp",
  "https://utfs.io/f/32852e1e-a915-436f-b292-eead69e96b51-2foq.avif",
  "https://utfs.io/f/cce4e339-be41-4785-9d9d-b90ea087b16f-1szn7.jpg",
  "https://utfs.io/f/e66150c9-b78e-435b-8253-a78c73d157c1-1o28oq.jpg",
  "https://utfs.io/f/60433252-a8c8-4cca-8b5e-cec3ba1e6ea3-nejvh8.avif",
  "https://utfs.io/f/f3632ed6-0607-4a25-a058-102dcffefdc8-kh06h3.avif",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="grid grid-cols-3 grid-rows-2 gap-8">
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id}>
            <Image
              className={`aspect-square object-cover`}
              src={image.url}
              alt="image"
              width={400}
              height={600}
            />
          </div>
        ))}
      </div>
    </main>
  );
}
