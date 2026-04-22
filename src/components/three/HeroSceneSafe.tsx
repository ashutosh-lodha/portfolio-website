import { Component, type ReactNode, Suspense, lazy, useEffect, useState } from "react";

const HeroScene = lazy(() =>
  import("./HeroScene").then((m) => ({ default: m.HeroScene })),
);

function detectWebGL(): boolean {
  try {
    const canvas = document.createElement("canvas");
    return !!(
      window.WebGL2RenderingContext &&
      (canvas.getContext("webgl2") || canvas.getContext("webgl"))
    );
  } catch {
    return false;
  }
}

class WebGLBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  { hasError: boolean }
> {
  state = { hasError: false };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch() {}
  render() {
    if (this.state.hasError) return this.props.fallback;
    return this.props.children;
  }
}

function Fallback() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="relative w-64 h-64 md:w-80 md:h-80">
        <div className="absolute inset-0 rounded-full border border-primary/30 animate-[spin_18s_linear_infinite]" />
        <div className="absolute inset-4 rounded-full border border-secondary/30 animate-[spin_22s_linear_infinite_reverse]" />
        <div className="absolute inset-8 rounded-full border border-primary/20 animate-[spin_26s_linear_infinite]" />
        <div className="absolute inset-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full bg-gradient-to-br from-primary/40 to-secondary/40 blur-xl" />
      </div>
    </div>
  );
}

export function HeroSceneSafe() {
  const [supported, setSupported] = useState<boolean | null>(null);
  useEffect(() => {
    setSupported(detectWebGL());
  }, []);
  if (supported === null) return <Fallback />;
  if (!supported) return <Fallback />;
  return (
    <WebGLBoundary fallback={<Fallback />}>
      <Suspense fallback={<Fallback />}>
        <HeroScene />
      </Suspense>
    </WebGLBoundary>
  );
}
