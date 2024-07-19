import { localeTranslate } from "@/shared/config/locale-translate";
import { usePathname } from "@/shared/hooks/use-pathname";
import { selectorLocale } from "@/shared/stores/locale-translate";
import { useSelector } from "react-redux";
import cls from "classnames";

const CleanQueryButton = ({ classname }: { classname?: string }) => {
  const { navigate, query } = usePathname();

  const locale = useSelector(selectorLocale);
  const { other: otherTranslate } = localeTranslate[locale];

  const handlerCleanQuery = () => {
    navigate(`?`);
  };

  const disabled = !query.get("ordering") || !query.get("status");

  return (
    <button
      className={cls(classname, "btn-reset")}
      onClick={handlerCleanQuery}
      title={otherTranslate.clean_query}
      disabled={disabled}
    >
      <span>{otherTranslate.clean_query}</span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="23.979"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          fillRule="evenodd"
          d="M7.99 5.33C8.19 3.99 9.35 3 10.7 3h2.57c1.35 0 2.51.99 2.71 2.33l.11.67H19.98v1.5h-1.12l-.83 10.73A3.006 3.006 0 0 1 15.04 21H8.93a3 3 0 0 1-2.99-2.77L5.11 7.5H3.99V6H7.88l.11-.67Zm6.58.67H9.4l.07-.44c.09-.61.61-1.06 1.23-1.06h2.57c.61 0 1.14.45 1.23 1.06l.07.44ZM6.61 7.5l.83 10.61c.06.78.71 1.39 1.49 1.39h6.11c.78 0 1.43-.61 1.49-1.39l.83-10.61H6.61Z"
        />
      </svg>
    </button>
  );
};

export default CleanQueryButton;
