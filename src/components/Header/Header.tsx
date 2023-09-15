import { FC } from "react";

import ContactsPanel from "../ContactsPanel";
import Navigation from "../Navigation";

const Header: FC = () => {
  return (
    <header>
      <div>
        <ContactsPanel />
        <div>
          <p>Logo</p>
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
