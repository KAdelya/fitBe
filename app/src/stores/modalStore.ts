import {makeAutoObservable} from 'mobx';
import {MainStore} from './mainStore';

export class ModalStore {
    currentModal = null;

    constructor(mainStore: MainStore) {
        this.currentModal = null;
        makeAutoObservable(this);
    }

    clearCurrentModal = () => {
        this.currentModal = null;
    }

    setCurrentModal = (modal: any) => {
        this.currentModal = modal;
    }
}
