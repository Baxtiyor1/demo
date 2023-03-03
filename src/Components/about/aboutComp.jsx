import Image from "next/image";
import Link from "next/link";

import aboutImg from "../../Assets/images/about-img.png";
import aboutImg2 from "../../Assets/images/about-imgg.png";

function AboutComp() {
  return (
    <section className="about">
      <div className="container">
        <div className="about__wrapper">
          {/* <div className="about__top">
                        <Image className="about__top-img" src={AboutIntro} alt="single product" width={1112} height={664} />
                    </div> */}
          <div className="about__center">
            <h2
              className="about__center-title"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              Kompaniya haqida ma&lsquo;lumot
            </h2>
            <p
              className="about__center-text"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              O&lsquo;zbekiston Respublikasida donni tayyorlash, saqlash va qayta
              ishlash bo&lsquo;yicha eng yirik un ishlab chiqaruvchilardan biri
              bo&lsquo;lgan Turon kompaniyasi 2015- yildan buyon ichki va tashqi
              bozorda o&lsquo;z faoliyatini yuritib kelmoqda.
            </p>
            <p
              className="about__center-text"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              Turon uni qozoq bug&lsquo;doyidan foydalangan holda hech qanday kimyoviy
              elementlarsiz, zamonaviy, barcha standartlarga javob beruvchi
              <span className="about__center-text--bold"> GENC DEGIRMEN </span>
              uskunasida ishlab chiqariladi, shu bilan birga barcha
              <span className="about__center-text--bold"> GOST </span>
              talablariga javob beradi.
            </p>
            <p
              className="about__center-text"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <span className="about__center-text--bold"> Turon </span> unining
              paket qog'ozlari Italiyadan keltiriladi. Unni mukammal saqlash,
              xaridorlarga sifatli yetkazib berish uchun unning qanday
              qadoqlanishi muhim hisoblanadi. Turli sarafan, havo o'tkazmaydigan
              paketlar unning sifatiga salbiy ta&lsquo;sir o'tkazishi mumkin.
              Italiya qog'ozlari unni turli tashqi ta&lsquo;sirlardan, quyosh
              nurlaridan, o'tkir hidlardan, turli zararkunandalardan mukammal
              himoya qiladi hamda namligini yaxshi saqlashga xizmat qiladi.
            </p>
            <p
              className="about__center-text"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              Shuningdek, Turon kompaniyasi donni tegirmonga, un mahsulotlarini
              esa iste&lsquo;molchilarga beminnat yetkazib berish uchun maxsus
              avtopark xizmatini yo&lsquo;lga qo&lsquo;ygan.
            </p>
            <p
              className="about__center-text"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              Kompaniya maqsadi: Iste&lsquo;molchilarga ishlab chiqaruvchi bahosida
              sifatli mahsulot yetkazib berish.
            </p>
            <p
              className="about__center-text"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <b>Turon unlari - oliy sifatli bug'doy uni!</b>
            </p>
          </div>
          <div className="about__bottom">
            <h3 className="about__bottom-title">Bizning galereya</h3>
            <ul className="about__bottom-list">
              <li
                className="about__bottom-item"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <Image
                  className="about__bottom-img"
                  src={aboutImg}
                  alt="galereya rasmlar"
                  width={380}
                  height={228}
                />
              </li>
              <li
                className="about__bottom-item"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <Image
                  className="about__bottom-img"
                  src={aboutImg2}
                  alt="galereya rasmlar"
                  width={380}
                  height={228}
                />
              </li>
              <li
                className="about__bottom-item"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <Image
                  className="about__bottom-img"
                  src={aboutImg}
                  alt="galereya rasmlar"
                  width={380}
                  height={228}
                />
              </li>
              <li
                className="about__bottom-item"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <Image
                  className="about__bottom-img"
                  src={aboutImg2}
                  alt="galereya rasmlar"
                  width={380}
                  height={228}
                />
              </li>
              <li
                className="about__bottom-item"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <Image
                  className="about__bottom-img"
                  src={aboutImg}
                  alt="galereya rasmlar"
                  width={380}
                  height={228}
                />
              </li>
              <li
                className="about__bottom-item"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <Image
                  className="about__bottom-img"
                  src={aboutImg2}
                  alt="galereya rasmlar"
                  width={380}
                  height={228}
                />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutComp;
