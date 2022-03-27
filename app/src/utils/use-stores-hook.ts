import { MobXProviderContext } from "mobx-react";
import React, { useContext } from "react";
import mainStore, { MainStore } from "../stores/mainStore";

export function useStore(): MainStore{
    return <MainStore>useContext(MobXProviderContext);
}
