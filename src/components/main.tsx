import { getCourses } from "../api";
import { useState, useEffect } from "react";
import style from "../style.module.scss";
import { icourses, tag } from "../constant";

function Main() {
  const [courses, setCourses] = useState([]);
  const [filteredText, setFilteredText] = useState(courses);
  useEffect(() => {
    getCourses().then((data) => setCourses(data));
  }, []);

  const handleClickCourses = (tags: string) => {
    if (tags === "Все темы") {
      setFilteredText(courses);
    } else if (tags === "Путешествия") {
      let filterText = courses.filter((item: icourses) =>
        item.tags.includes("Страны и столицы")
      );
      return setFilteredText(filterText);
    } else {
      let filterText = courses.filter((item: icourses) =>
        item.tags.includes(tags)
      );
      return setFilteredText(filterText);
    }
  };

  return (
    <div className={style.box}>
      <div className={style.box__tag}>
        {tag.map((tags, index) => {
          return (
            <button
              className={style.box__tag_btn}
              key={index}
              onClick={() => handleClickCourses(tags)}
            >
              {tags}
            </button>
          );
        })}
      </div>
      <div className={style.box__card}>
        {filteredText &&
          filteredText.map((cours: icourses) => {
            return (
              <div className={style.box__card_box} key={cours.id}>
                <div
                  className={style.box__card_box_img}
                  style={{ backgroundColor: cours.bgColor }}
                >
                  <img
                    className={style.box__card_img}
                    src={cours.image}
                    alt={cours.name}
                  />
                </div>
                <div className={style.box__card_box_text}>
                  <p className={style.box__card_text}>{cours.name}</p>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
export default Main;
