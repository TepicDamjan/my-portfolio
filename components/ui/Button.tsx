import Link from "next/link";

type ButtonProps = {
  href: string;
  variant?: "primary" | "secondary";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

export function Button({
  href,
  variant = "primary",
  children,
  className = "",
  onClick,
}: ButtonProps) {
  const base =
    "inline-flex min-h-11 items-center justify-center px-5 py-2.5 sm:px-6 sm:py-3 text-label-caps transition-colors duration-200 rounded";

  const variants = {
    primary: "bg-primary text-on-primary hover:bg-primary-container",
    secondary:
      "border border-primary/20 text-primary hover:border-primary/40 hover:bg-surface-container",
  };

  return (
    <Link
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
