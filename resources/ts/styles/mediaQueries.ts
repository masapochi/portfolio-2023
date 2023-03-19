export const VIEWPORTS = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400,
};

type ViewportType = keyof typeof VIEWPORTS;

export const mqMore = (size: ViewportType): string => {
    return `@media (min-width: ${VIEWPORTS[size]}px)`;
};
export const mqLess = (size: ViewportType): string => {
    return `@media (max-width: ${VIEWPORTS[size] - 1}px)`;
};
