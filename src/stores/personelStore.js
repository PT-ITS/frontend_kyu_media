import { defineStore } from 'pinia';

export const usePersonelStore = defineStore('personel', {
    state: () => ({
        selectedPersonelId: null,
    }),
    actions: {
        setPersonelId(id) {
            this.selectedPersonelId = id;
        },
        clearPersonelId() {
            this.selectedPersonelId = null;
        }
    }
});
