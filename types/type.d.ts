declare module "*.png";
declare module "*.svg";
declare module "*.jpg";
declare module "*.avif";
declare module "*.scss" {
  const content: { [className: string]: string };
  export default content;
}
