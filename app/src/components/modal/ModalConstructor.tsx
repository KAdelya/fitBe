import { observer } from "mobx-react";
import { cloneElement } from "react";
import { useStore } from "../../utils/use-stores-hook";


export const ModalConstructor = observer(() => {
    const { modalStore: { currentModal: CurrentModal } } = useStore();
    if (CurrentModal) {
        return cloneElement(CurrentModal);
    } else {
        return null;
    }
});
