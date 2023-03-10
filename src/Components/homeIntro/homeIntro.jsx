import Image from "next/image";
import { LinkBtn } from "../link-btn/linkBtn";



// import images
import homeIntroImg from "../../Assets/images/turon_un_3.png";

function HomeIntro() {
  return (
    <section className="homeIntro">
      <div className="container">
        <div className="homeIntro__wrapper" data-aos="zoom-in">
          <div className="homeIntro__img--box">
            <Image
              className="homeIntro__img"
              src={homeIntroImg}
              alt="turon_un"
            />
          </div>
          <div className="homeIntro__block">
            <h1 className="homeIntro__title">Turon — mazali taomlar asosi</h1>
            <LinkBtn href="/about" bgcolor="#CC1C08">
              Batafsil
            </LinkBtn>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeIntro;
