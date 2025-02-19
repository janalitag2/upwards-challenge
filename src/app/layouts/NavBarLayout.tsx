import { SearchBar } from "../../components/search-bar/SearchBar";
import "../../css/App.css";

type NavBarProps = {
  handleOnSearch: (search: string) => void;
};

const NavBarLayout = (props: NavBarProps) => {
  const { handleOnSearch } = props;

  return (
    <div className="nav-bar">
      {/* Future enhancements - other navbar items */}
      <SearchBar onSearch={handleOnSearch} />
    </div>
  );
};

export default NavBarLayout;
