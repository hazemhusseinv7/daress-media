"use client";

import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";

import { useTransitionRouter } from "next-view-transitions";

interface TransitionLinkProps extends LinkProps {
  children: React.ReactNode;
  href: string;
  target?: string;
  className: string;
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

const TransitionLink = ({
  children,
  href,
  target,
  className,
  onClick,
  ...props
}: TransitionLinkProps) => {
  const router = useTransitionRouter();
  const pathname = usePathname();

  const isRoot = pathname === "/";

  const handleTransition = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    if (target === "_blank") return;

    e.preventDefault();

    if (onClick) onClick(e);

    if ((href.startsWith("#") || href.startsWith("/#")) && isRoot) {
      router.push(href);
      return;
    }

    router.push(href, { onTransitionReady: pageAnimation });
  };

  return (
    <Link
      onClick={handleTransition}
      href={href}
      target={target}
      className={className}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      {...props}
    >
      {children}
    </Link>
  );
};

const pageAnimation = () => {
  document.documentElement.animate(
    [
      {
        opacity: 1,
        scale: 1,
        transform: "translateY(0)",
      },
      {
        opacity: 0.5,
        scale: 0.9,
        transform: "translateY(-100px)",
      },
    ],
    {
      duration: 1000,
      easing: "cubic-bezier(0.76, 0, 0.24, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)",
    }
  );

  document.documentElement.animate(
    [
      {
        transform: "translateY(100%)",
      },
      {
        transform: "translateY(0)",
      },
    ],
    {
      duration: 1000,
      easing: "cubic-bezier(0.76, 0, 0.24, 1)",
      fill: "forwards",
      pseudoElement: "::view-transition-new(root)",
    }
  );
};

export default TransitionLink;
