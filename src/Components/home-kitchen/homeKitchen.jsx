import Image from "next/image";
import { LinkBtn } from "../link-btn/linkBtn";

//images
import kitchenImage from "../../Assets/images/home_recipe.jpg";

export const HomeKitchen = () => {
  return (
    <>
      <section
        style={{ color: "#DF953A !important", overflowX: "hidden", padding: "20px 0" }}
        className="hkichchen"
      >
        <div className="container">
          <div className="homeAbout__wrapper">
            <div
              className="homeAbout__box"
              data-aos="fade-up-right"
              data-aos-duration="1200"
            >
              <Image
                className="homeAbout__img"
                src={kitchenImage}
                alt="wheat"
                width="500"
                height="650"
              />
            </div>
            <div className="homeAbout__block">
              <h3
                style={{ color: "#DF953A !important" }}
                className="homeAbout__subtitle"
                data-aos="fade-up-left"
                data-aos-duration="1200"
              >
                Turon oshxonasiga xush kelibsiz
              </h3>
              <p
                style={{ color: "#DF953A !important" }}
                className="homeAbout__text"
                data-aos="fade-up-left"
                data-aos-duration="1200"
              >
                Biz bilan yangi ta’mlarni kashf eting! <br /> Chegara bilmas pazandalik
                sirlari sohibasi va uy bekasi ekanligingiz bilan oila
                aʼzolaringizni lol qoldirib, mamnun etishda davom eting aziz
                bekajonlar
              </p>
              <LinkBtn
                href="/recipe"
                bgcolor="#DF953A"
                data-aos="fade-up-left"
                data-aos-duration="1200"
              >
                Kirish
              </LinkBtn>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
