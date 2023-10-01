import { type FC, ReactElement } from "react";
import { BiSearch } from "react-icons/bi";
import locale from "./hooks/locale";

const SearchBar: FC<{}> = (): ReactElement => {
  return (
    <div className="flex items-center bg-gray-100 p-2 rounded-full max-md:hidden">
      <button>
        <BiSearch size={20} className="opacity-50" />
      </button>
      <input
        type="text"
        className="outline-none bg-transparent ml-2 caret-blue-500 placeholder:font-light placehodler:text-gray-600 text-md"
        placeholder={locale.lbl_search}
        autoComplete="false"
      />
    </div>
  );
};

export default SearchBar;
