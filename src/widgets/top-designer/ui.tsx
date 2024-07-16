import { localeTranslate } from "@/shared/config/locale-translate";
import { selectorLocale } from "@/shared/stores/locale-translate";

import { useSelector } from "react-redux";

const TopDesigner = () => {
  const locale = useSelector(selectorLocale);
  return (
    <section>
      <h2> {localeTranslate[locale].titles.top_10_designers} </h2>

      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
        <li>5</li>
        <li>6</li>
        <li>7</li>
        <li>8</li>
        <li>9</li>
        <li>10</li>
      </ul>
    </section>
  );
};

export default TopDesigner;
