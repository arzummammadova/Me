import { LoadingImage } from "@/components/loading-image";
export function Asset({
  name,
  className = "",
  alt = "",
  priority = false,
  sizes = "50vw",
}: {
  name: string;
  className?: string;
  alt?: string;
  priority?: boolean;
  sizes?: string;
}) {
  return (
    <div className={`asset ${className}`}>
      <LoadingImage
        src={`/assets/${name}`}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        unoptimized={name.endsWith(".svg") || name === "macbook.png" || name.startsWith("laptop-") || name.endsWith("-screen.png")}
        draggable={false}
      />
    </div>
  );
}
