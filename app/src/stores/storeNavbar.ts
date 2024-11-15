import { create } from "zustand";

interface NavbarState {
  isOpen: boolean;
  toggleNavbar: () => void;
  itemsNavbarDesktop: { name: string; link: string }[];
  selectedItemNavbarDesktop: string;
  setSelectedItemNavbarDesktop: (nameItem: string) => void;
}

export const useNavbarStore = create<NavbarState>((set) => ({
  isOpen: false,
  toggleNavbar: () => set((state) => ({ isOpen: !state.isOpen })),

  itemsNavbarDesktop: [
    {
      name: "Home",
      link: "/",
    },
    {
        name: "About",
        link: "/about",
    },
  ],
  selectedItemNavbarDesktop: "",
  setSelectedItemNavbarDesktop: (nameItem) =>
    set(() => ({
      selectedItemNavbarDesktop: nameItem,
    })),
}));
