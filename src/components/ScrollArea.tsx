"use client";

import type { ComponentPropsWithoutRef } from "react";
import type { EventListeners, OverlayScrollbars, PartialOptions } from "overlayscrollbars";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import "overlayscrollbars/styles/overlayscrollbars.css";

const SCROLLBAR_OPTIONS: PartialOptions = {
  overflow: {
    x: "hidden",
    y: "scroll",
  },
  scrollbars: {
    theme: "os-theme-dark",
    autoHide: "leave",
    autoHideDelay: 250,
    clickScroll: true,
  },
};

let bodyScrollViewport: HTMLElement | null = null;

export function getBodyScrollViewport() {
  return bodyScrollViewport;
}

const BODY_SCROLL_EVENTS: EventListeners = {
  initialized: (instance: OverlayScrollbars) => {
    bodyScrollViewport = instance.elements().viewport;
  },
  destroyed: () => {
    bodyScrollViewport = null;
  },
};

type ScrollAreaProps = ComponentPropsWithoutRef<"div">;

export function ScrollArea({
  className,
  children,
  ...props
}: ScrollAreaProps) {
  return (
    <OverlayScrollbarsComponent
      {...props}
      options={SCROLLBAR_OPTIONS}
      className={`scroll-area ${className ?? ""}`.trim()}
    >
      {children}
    </OverlayScrollbarsComponent>
  );
}

export function BodyScrollArea({
  className,
  children,
  ...props
}: ComponentPropsWithoutRef<"body">) {
  return (
    <OverlayScrollbarsComponent
      {...props}
      element="body"
      options={SCROLLBAR_OPTIONS}
      events={BODY_SCROLL_EVENTS}
      className={`scroll-area scroll-area-body ${className ?? ""}`.trim()}
    >
      {children}
    </OverlayScrollbarsComponent>
  );
}
