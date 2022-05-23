import React from 'react';
import { css } from "@emotion/react";
import PacmanLoader from "react-spinners/PacmanLoader";

const override = css`
  display: block;
  margin: 2px;
`;

const Loading = () => {
    return (
        <div className="h-60 flex items-center justify-center">
            <PacmanLoader color='#cc2b5e' css={override} size={25} />
        </div>
    );
};

export default Loading;