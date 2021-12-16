import React from "react";

export default function useVisibilityChecker(ref: any) {
  const [isIntersecting, setIntersecting] = React.useState<boolean>(false);

  const observer = new IntersectionObserver(([entry]) =>
    setIntersecting(entry.isIntersecting)
  );

  React.useEffect(() => {
    ref.current !== undefined && observer.observe(ref.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return isIntersecting;
}
