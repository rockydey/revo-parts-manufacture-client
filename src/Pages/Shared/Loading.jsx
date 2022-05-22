import React from 'react';
import { css } from "@emotion/react";
import DotLoader from "react-spinners/DotLoader";

const override = css`
  display: block;
`;

const Loading = () => {
    return (
        <div className="h-40 flex items-center justify-center">
            <DotLoader color='#cc2b5e' css={override} size={60} />
        </div>
    );
};

export default Loading;