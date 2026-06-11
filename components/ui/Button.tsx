import Link from "next/link";

type ButtonProps = {
  href: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
};

export function Button({
  href,
  variant = "primary",
  children,
  className = "",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center px-6 py-3 text-label-caps transition-colors duration-200 rounded";

  const variants = {
    primary: "bg-primary text-on-primary hover:bg-primary-container",
    secondary:
      "border border-primary/20 text-primary hover:border-primary/40 hover:bg-surface-container",
  };

  return (
    <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
