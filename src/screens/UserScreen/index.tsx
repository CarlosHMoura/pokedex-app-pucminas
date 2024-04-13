import React from "react";
//import {  } from "./styles";

import { Button } from "../../components/Button";


export const UserScreen: React.FC = () => {
    return (
        <Button onPress={() => console.log("UserButton!")} title="User Screen" />
    );
};
