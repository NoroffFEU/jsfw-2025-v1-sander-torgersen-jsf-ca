import { create } from "zustand";

interface SidebarMenuItemState {
  isOpen: boolean;
}
interface SidebarMenuItemActions {
  toggle: () => void;
  open: () => void;
  close: () => void;
}

export const useSidebarMenu = create<
  SidebarMenuItemState & SidebarMenuItemActions
>()((set) => ({
  isOpen: false,
  toggle: () => set((state) => ({ isOpen: !state.isOpen })),
  open: () => set({ isOpen: true }),
  close: () => set({ isOpen: false }),
}));
