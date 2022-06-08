import { NavLink } from "react-router-dom";

function Header() {
   return (<header>
      <div className="inner">
         <img className="icon" src="./icon.png" />
         <nav>
            {[{ title: 'Home', link: '/home' },
            { title: 'Marketplace', link: '/marketplace' },
            { title: 'Defi', link: '/defi' },
            { title: 'Sell Tokens', link: '/sell-tokens' },
            { title: 'Register/login', link: '/register' }].map((nav, i) => <NavLink className={(tab) => {
               if (tab.isActive) return 'nav-link active';
               return 'nav-link'
            }} to={nav.link} key={i}>{nav.title}</NavLink>)}

         </nav>
      </div>
   </header>);
}

export default Header;