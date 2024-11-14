import { ButtonMobile } from "@alfalab/core-components/button/mobile";

import { Typography } from "@alfalab/core-components/typography";

import card from "./assets/card.png";
import { LS, LSKeys } from "./ls";
import { appSt } from "./style.css";
import { ThxLayout } from "./thx/ThxLayout";
import { Gap } from "@alfalab/core-components/gap";
import { sendDataToGA } from "./utils/events.ts";

export const App = () => {
  const submit = () => {
    sendDataToGA().then(() => {
      LS.setItem(LSKeys.ShowThx, true);
    });
  };

  if (LS.getItem(LSKeys.ShowThx, false)) {
    return <ThxLayout />;
  }

  return (
    <>
      <div className={appSt.container}>
        <div className={appSt.box}>
          <Typography.Text tag="p" view="primary-medium" weight="bold">
            Карта для ребёнка
          </Typography.Text>
          <img src={card} alt="Карта для ребенка" style={{ width: "100%" }} />
        </div>

        <Gap size={32} />

        <Typography.TitleResponsive
          font="system"
          tag="h3"
          view="medium"
          weight="semibold"
          className={appSt.productsTitle}
        >
          Детская карта
        </Typography.TitleResponsive>
        <Typography.Text tag="p" view="primary-medium" color="secondary">
          Бесплатная карта с кэшбэком
        </Typography.Text>

        <Gap size={12} />

        <div className={appSt.products}>
          <div className={appSt.bonus}>
            <Typography.Text tag="p" view="primary-large" weight="bold">
              5%
            </Typography.Text>
            <Typography.Text tag="p" view="primary-small" color="secondary">
              В трёх категориях на выбор и 1% на все — всегда
            </Typography.Text>
          </div>
          <div className={appSt.bonus}>
            <Typography.Text tag="p" view="primary-large" weight="bold">
              0 ₽
            </Typography.Text>
            <Typography.Text tag="p" view="primary-small" color="secondary">
              Выпуск и обслуживание
            </Typography.Text>
          </div>
        </div>

        <Gap size={20} />

        <Typography.TitleResponsive
          font="system"
          tag="h3"
          view="small"
          weight="semibold"
          className={appSt.productsTitle}
        >
          Карта в приложении у вас и ребёнка
        </Typography.TitleResponsive>
        <Typography.Text tag="p" view="primary-medium" color="secondary">
          Ребёнок видит историю своих покупок и учится управлять тратами
        </Typography.Text>
      </div>

      <Gap size={96} />

      <div className={appSt.bottomBtn}>
        <ButtonMobile block view="primary" href="alfabank://debit_card_showcase?flowType=KIDS" onClick={submit}>
          Выбрать
        </ButtonMobile>
      </div>
    </>
  );
};
