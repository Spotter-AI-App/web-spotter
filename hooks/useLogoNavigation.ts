"use client";

import { usePathname, useRouter } from "next/navigation";

/**
 * Hook for handling logo navigation behavior.
 * 
 * - On home page ("/"), scrolls smoothly to top
 * - On any other page, navigates to home
 * 
 * This allows consistent logo behavior across Header, Footer,
 * and any future components that need this navigation pattern.
 */
export function useLogoNavigation() {
  const pathname = usePathname();
  const router = useRouter();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToHome = () => {
    router.push("/");
  };

  const isHomePage = pathname === "/";

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isHomePage) {
      scrollToTop();
    } else {
      navigateToHome();
    }
  };

  return {
    handleLogoClick,
    scrollToTop,
    navigateToHome,
    isHomePage,
    pathname,
  };
}
