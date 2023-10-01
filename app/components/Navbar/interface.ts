import { Dispatch, SetStateAction } from "react";

export type NavbarProps = {

}

export declare interface LocaleInterface {
  lbl_signin: string;
  lbl_shop: string;
  lbl_filter: string;
  lbl_my_products: string;
  lbl_search: string;
}

export declare interface UseCustomInterface {
  data: {
    showProfile: boolean;
    showNav: boolean;
  },
  method: {
    setShowProfile: Dispatch<SetStateAction<boolean>>;
    setShowNav: Dispatch<SetStateAction<boolean>>;
  }
}
