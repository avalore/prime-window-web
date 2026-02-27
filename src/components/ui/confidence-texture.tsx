import { cn } from "@/lib/cn";

type ConfidenceTextureProps = {
  className?: string;
  diffuse?: boolean;
};

export function ConfidenceTexture({ className, diffuse = false }: ConfidenceTextureProps) {
  return (
    <div
      className={cn(
        "h-3 rounded-full",
        diffuse ? "confidence-texture-diffuse" : "confidence-texture",
        className,
      )}
    />
  );
}
