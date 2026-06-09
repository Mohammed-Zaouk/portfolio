import React from "react";
import backgroundImg from "../assets/background/background.png";

interface BackgroundProps {
  children: React.ReactNode;
}

export default function Background({ children }: BackgroundProps) {
  return <div style={styles.background}>{children}</div>;
}

const styles: Record<string, React.CSSProperties> = {
  background: {
    minHeight: "100vh",
    width: "100%",
    backgroundImage: `url(${backgroundImg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
  },
};
