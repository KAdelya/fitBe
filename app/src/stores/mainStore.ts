import {makeAutoObservable} from 'mobx';
import {ModalStore} from './modalStore';

class MainStore {
    modalStore: ModalStore;

    constructor() {
        this.modalStore = new ModalStore(this);
        makeAutoObservable(this);
    }
}

const mainStore = new MainStore();

export default mainStore;
export {MainStore};
