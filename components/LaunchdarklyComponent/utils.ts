const findWidgets = (widgetsList: string[]) => {
  if (!widgetsList) {
    return [];
  }

  return widgetsList
    .map((widget) => {
      return document.querySelector(`[data-test='widget-${widget}']`);
    })
    .filter(Boolean);
};

function transformString(str: string) {
  return (
    str.charAt(0).toLowerCase() +
    str.slice(1).replace(/[-\s]([a-z])/g, (_, char) => char.toUpperCase())
  );
}

export const applyFeatureFlags = (
  flags: Record<string, boolean>,
  configs: Record<string, string[]>,
) => {
  let widgetsList: Record<string, string[]> = {};

  try {
    widgetsList = Object.entries(configs).reduce(
      (acc, [key, value]) => {
        const transformedKey = transformString(key);
        acc[transformedKey as keyof typeof acc] = value as string[];

        return acc;
      },
      {} as Record<string, string[]>,
    );
  } catch (error) {
    console.error("Error parsing widgets", error);
  }

  Object.keys(flags).forEach((flag) => {
    const widgets = findWidgets(widgetsList[flag as keyof typeof configs]);
    const transformedFlagName = transformString(flag);
    const flagValue = flags[transformedFlagName as keyof typeof flags];

    widgets.forEach((widget) => {
      (widget as HTMLElement).style.display = flagValue ? "none" : "block";
    });
  });
};

export const manageGlobalOverlay = {
  selector: "[data-testid='global-overlay']",
  remove() {
    const overlay = document.querySelector(this?.selector);
    if (overlay) {
      overlay.remove();
    }
  },
  create() {
    if (typeof window !== "undefined") {
      const overlay = document.createElement("div");
      overlay.setAttribute("data-testid", "global-overlay");
      overlay.style.position = "fixed";
      overlay.style.top = "0";
      overlay.style.left = "0";
      overlay.style.width = "100%";
      overlay.style.height = "100%";
      overlay.style.backgroundColor = "rgba(0, 0, 0, 0.1)";
      overlay.style.backdropFilter = "blur(70px)";
      overlay.style.pointerEvents = "none";
      overlay.style.zIndex = "1000";

      document.body.appendChild(overlay);
    }
  },
};
