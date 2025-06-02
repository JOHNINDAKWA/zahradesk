import { create } from 'zustand';

const useTicketStore = create((set, get) => ({
  tickets: [],
  setTickets: (newTickets) => set({ tickets: newTickets }),
  getTicketById: (id) =>
    (get().tickets || []).find((t) => String(t.id) === String(id)),
}));

export default useTicketStore;
