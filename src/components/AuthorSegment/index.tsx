import React, { useContext } from "react";

import ConfigContext from "../../context/ConfigContext";
import { Body } from "../../theme";

import * as S from "./styles";

const AuthorSegment = (): JSX.Element => {
  const config = useContext(ConfigContext);

  return (
    <S.Wrapper>
      <S.Main>
        <S.Avatar src={config.user.avatar} />
        <S.Info>
          <S.AuthorName>{`${config.user.firstName} ${config.user.lastName}`}</S.AuthorName>
          <S.AboutText>
            <Body>{config.user.about}</Body>
          </S.AboutText>
        </S.Info>
      </S.Main>
      <S.Contact>
        <S.ShareLabel> </S.ShareLabel>
        <S.UserLinkGrid />
      </S.Contact>
      <S.Separator />
    </S.Wrapper>
  );
};

export default AuthorSegment;
