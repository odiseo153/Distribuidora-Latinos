import Image from "next/image";
import { site } from "@/lib/site-config";

export function Logo({
  className = "",
  showText = false,
}: {
  className?: string;
  showText?: boolean;
}) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Image
        src="/images/logo.png"
        alt={`Logotipo de ${site.name} `}
        width={48}
        height={48}
        className="h-11 w-11 rounded-2xl object-cover shadow-sm ring-1 ring-white/70"
        priority
      />
      {showText && (
        <span className="font-heading text-lg font-semibold leading-tight text-foreground sm:text-xl">
          Distribuidora
          <span className="text-primary"> Latinos</span>
        </span>
      )}
    </div>
  );
}
