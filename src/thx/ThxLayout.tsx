import { Typography } from "@alfalab/core-components/typography";
import { ButtonMobile } from "@alfalab/core-components/button/mobile";
import rocket from "../assets/rocket.png";
import { thxSt } from "./style.css";
import { appSt } from "../style.css.ts";

export const ThxLayout = () => {
  return (
    <>
      <div className={thxSt.container}>
        <img
          alt="Картинка ракеты"
          src={rocket}
          width={135}
          className={thxSt.rocket}
        />
        <Typography.TitleResponsive
          font="system"
          tag="h1"
          view="large"
          defaultMargins
          weight="bold"
        >
          Еще чуть-чуть
        </Typography.TitleResponsive>
        <Typography.Text tag="p" view="primary-medium">
          Оформить детскую карту вы можете на следующем экране.
        </Typography.Text>
      </div>

      <div className={appSt.bottomBtn}>
        <ButtonMobile
          block
          view="primary"
          href="alfabank://debit_card_showcase?flowType=KIDS"
        >
          Оформить карту
        </ButtonMobile>
      </div>
    </>
  );
};
