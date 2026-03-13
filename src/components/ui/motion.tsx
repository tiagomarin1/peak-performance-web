"use client";

import React from "react";
import {
  LazyMotion,
  domAnimation,
  m,
  useReducedMotion,
  type Variants,
} from "framer-motion";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
  amount?: number;
};

export function MotionProvider({ children }: { children: React.ReactNode }) {
  // Mantiene Framer liviano (mejor performance)
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}

export function Reveal({
  children,
  className,
  delay = 0,
  y = 12,
  once = true,
  amount = 0.22,
}: RevealProps) {
  const reduce = useReducedMotion();

  return (
    <m.div
      className={className}
      initial={
        reduce
          ? { opacity: 1 }
          : { opacity: 0, y, filter: "blur(6px)" }
      }
      whileInView={
        reduce
          ? { opacity: 1 }
          : { opacity: 1, y: 0, filter: "blur(0px)" }
      }
      viewport={{ once, amount }}
      transition={{
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1],
        delay,
      }}
    >
      {children}
    </m.div>
  );
}

type StaggerProps = {
  children: React.ReactNode;
  className?: string;
  once?: boolean;
  amount?: number;
  stagger?: number;
  delayChildren?: number;
};

export function Stagger({
  children,
  className,
  once = true,
  amount = 0.22,
  stagger = 0.07,
  delayChildren = 0.02,
}: StaggerProps) {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: {
      transition: reduce
        ? {}
        : {
            staggerChildren: stagger,
            delayChildren,
          },
    },
  };

  return (
    <m.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
    >
      {children}
    </m.div>
  );
}

type StaggerItemProps = {
  children: React.ReactNode;
  className?: string;
};

export function StaggerItem({ children, className }: StaggerItemProps) {
  const reduce = useReducedMotion();

  const item: Variants = {
    hidden: reduce ? { opacity: 1 } : { opacity: 0, y: 10, filter: "blur(6px)" },
    show: reduce ? { opacity: 1 } : { opacity: 1, y: 0, filter: "blur(0px)" },
  };

  return (
    <m.div
      className={className}
      variants={item}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </m.div>
  );
}

type HoverLiftProps = {
  children: React.ReactNode;
  className?: string;
  scale?: number;
};

export function HoverLift({
  children,
  className,
  scale = 1.01,
}: HoverLiftProps) {
  const reduce = useReducedMotion();

  return (
    <m.div
      className={className}
      whileHover={
        reduce
          ? undefined
          : {
              y: -2,
              scale,
            }
      }
      transition={{
        duration: 0.25,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </m.div>
  );
}
