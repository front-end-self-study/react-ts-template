import React from "react";
import { Button, Input, Popover } from "antd";
import { t } from "@lingui/macro";
import { load } from "@/libs/i18n";
import { useAppDispatch } from "@/store/store";
import { setLanguage } from "@/store/modules/common";
import { useLingui } from "@lingui/react";
import { Trans } from "@lingui/macro";
const HomePage: React.FC = () => {
  useLingui();
  const dispatch = useAppDispatch();
  const changeLang = () => {
    load("zh");
    dispatch(setLanguage("zh"));
  };
  return (
    <div className="wrap">
      <Trans> who is me</Trans>

      <Button onClick={changeLang}>{t`change language`} </Button>
    </div>
  );
};
export default HomePage;
