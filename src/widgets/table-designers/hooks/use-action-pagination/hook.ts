import { usePathname } from "@/shared/hooks/use-pathname";

export const useActionsPagination = (totalCount: number, limitPage: number) => {
  const { query } = usePathname();

  const page = parseInt(query.get("page") as string, 10);

  const lengthPage = Math.ceil(totalCount / limitPage);

  const createHref = (index: number) => {
    query.set("page", index.toString());
    return `?${query.toString()}`;
  };

  const visibleButton = (value: number) => page && page !== value;

  const disabledDoted = (index: number) =>
    page ? index + 1 < page || index >= page + 2 : true;

  return {
    page,
    lengthPage,
    createHref,
    disabledDoted,
    visibleButton,
  };
};
