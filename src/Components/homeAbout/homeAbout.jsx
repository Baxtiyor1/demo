import Image from "next/image";
import Link from "next/link";

// import images
import Wheat from "../../Assets/images/wheat.jpg";
import { LinkBtn } from "../link-btn/linkBtn";

function HomeAbout() {
  return (
    <section className="homeAbout">
      <div className="container">
        <div className="homeAbout__content">
          <h2
            className="homeAbout__title"
            data-aos="fade-up-right"
            data-aos-duration="1200"
          >
            <span>Turon — </span> maqsadi iste’molchilarga hamyonbop narxlarda
            sifatli mahsulot taqdim etish bo’lgan kompaniya.
          </h2>

          <div className="homeAbout__wrapper">
            <div
              className="homeAbout__box"
              data-aos="zoom-in-right"
              data-aos-duration="1200"
            >
              <Image
                className="homeAbout__img"
                src={Wheat}
                alt="wheat"
                width="443"
                height="650"
              />
            </div>
            <div className="homeAbout__block">
              <h3
                className="homeAbout__subtitle"
                data-aos="zoom-in-left"
                data-aos-duration="1200"
              >
                Kompaniya haqida
              </h3>
              <p
                className="homeAbout__text"
                data-aos="zoom-in-left"
                data-aos-duration="1200"
              >
                O’zbekiston Respublikasida donni tayyorlash, saqlash va qayta
                ishlash bo’yicha eng yirik un ishlab chiqaruvchilardan biri
                bo’lgan Turon kompaniyasi 2015- yildan buyon ichki va tashqi
                bozorda o’z faoliyatini yuritib kelmoqda...
              </p>
              <LinkBtn
                href="/about"
                bgcolor="#CC1C08"
                data-aos="fade-up"
                data-aos-duration="1200"
              >
                Batafsil
              </LinkBtn>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeAbout;
