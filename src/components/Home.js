
import Header from './Header';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper';

import 'swiper/css'
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Footer from './Footer';

function Home() {
   return (
      <div className="home-page">
         <Header />
         <div className="header-banner">
            <Swiper autoplay={{ delay: 5000, disableOnInteraction: false }}
               slidesPerView={1}
               loop={true}
               spaceBetween={0}
               navigation={true}
               pagination={{ clickable: true }}
               modules={[Autoplay, Pagination, Navigation]}
               className={'sliders'}
               rewind={true}>
               {[
                  {
                     title: 'Permissionless, compliant, and one-of-its-kind',
                     content: 'GRDC provides investors with a simple, intelligent, and user-friendly method to buy into fractional, tokenized properties, leveraging the U.S. legal system and the permissionless, unrestricted token issuance on Solana. Investing with GRDC means low maintenance property ownership, access to cash flows related to the property(e.g., rent), and frictionless ownership transactions via GRDC Coin. At GRDC we are reinventinting real estate ownership.',
                     img: 'bg_logo2.png',
                     link: { title: 'Learn More', url: '' }
                  },
                  {
                     title: 'Decentralised Real Estate Investment Coin',
                     sub_title: 'GRDC THE FUTURE!',
                     content: 'How do you change the world?! By recycling 1 piece of garbage at a time! Or, in our instance recycling 1000’s of pounds of garbage annually! Green Real Estate Development Coin is building and developing a blueprint where apartment complexes will have zero garbage going to the landfills! 100% of the garbage is going to be recycled onsite! As an early Investor you can grab yourself a front row seat as this new concept unfolds and becomes a reality! You can own brand new crypto coins called GRDC at a fraction of what the ICO price will go for.',
                     img: 'bg_logo2.png',
                     link: { title: 'Contact Us', url: '' }
                  },
                  {
                     title: 'DeFi Integrated',
                     sub_title: 'fractional investments',
                     content: 'Leverage your assets like never before with the power of Decentralized Finance on the blockchain. The GRDC  collateralization platform lets you supercharge your tokenized real estate portfolio.',
                     img: 'bg_logo2.png',
                     link: { title: 'Our Services', url: '' }
                  }
               ].map((slider, i) => <SwiperSlide className='each-slider' style={{ backgroundImage: `url(${slider.img})` }} key={i}>
                  <div className='inner'>
                     <h2 className='title'>{slider.title}</h2>
                     {slider.sub_title && <h1 className='sub-title'>{slider.sub_title}</h1>}
                     <p className='content'>{slider.content}</p>
                     <Link className='link' to={slider.link.url}>{slider.link.title}</Link>
                  </div>
               </SwiperSlide>)}
            </Swiper>
         </div>
         <div className='f-intro'>
            <div className='inner'>
               <h1>DeFi Integrated</h1>
               <h2>Discover the Power of the GRDC Platform </h2>
               <p>Leverage your assets like never before with the power of Decentralized Finance on the blockchain.</p>
               <p>The GRDC collateralization platform lets you supercharge your tokenized real estate portfolio. </p>
               <div className='links'>
                  {[
                     { title: 'HOW IT WORKS', url: '' },
                     { title: 'WHY IT WORKS', url: '' },
                     { title: 'HOW TO USE IT', url: '' }
                  ].map((link, i) => <Link className='each-link' to={link.url}>{link.title}</Link>)}
               </div>
            </div>
         </div>
         <div className='s-intro'>
            <div className='inner'>
               <h1>Permissionless, compliant, and one-of-its-kind</h1>
               <p>GRDCToken provides investors with a simple, intelligent, and user-friendly method to buy into fractional, tokenized properties, leveraging the U.S. legal system and the permissionless, unrestricted token issuance of GRDCToken. </p>
               <p>
                  Investing with GRDC means low maintenance property ownership, access to cash flows related to the property (e.g., rent), and frictionless ownership transactions via GRDCTokens.
               </p>
            </div>
         </div>
         <div className='intro-desc'>
            <div className='inner'>
               {[
                  {
                     icon: 'unique-coins.png',
                     title: 'Unique Tokens',
                     content: 'Ownership of each property is distributed across a finite number of representative tokens. Based on token share, owners can collect revenue from rent, and vote on property decisions.'
                  },
                  {
                     icon: 'managed.png',
                     title: 'Property Managed',
                     content: 'Each GRDC property has a property management company managing the property on RealToken owners behalf. The property management company sources tenants, collects rent, and manages repairs, so the diverse group of GRDC owners don’t have to.'
                  },
                  {
                     icon: 'llc-owned.png',
                     title: 'LLC Owned',
                     content: 'Real estate can’t directly be tokenized, but legal entities can. Each property is owned by company (either an Inc or an LLC). Each company is tokenized as a unique set of GRDC and made available for purchase. '
                  },
                  {
                     icon: 'payments.png',
                     title: 'Instant Payments',
                     content: 'With blockchains, we no longer need to wait 30 days to receive a bank transfer. Owning property with GRDC allows you to get and monitor you investment real-time. Dividends are paid using a US-Dollar stablecoin, sent to your wallet.'
                  },
               ].map((each, i) => <div className='each-desc' key={i}>
                  <img className='icon' src={each.icon} />
                  <div className='content'>
                     <h1>{each.title}</h1>
                     <p>{each.content}</p>
                  </div>
               </div>)}
            </div>
         </div>
         <div className='tok-intro'>
            <div className='inner'>
               <div className='thumbnail'></div>
               <div className='content'>
                  <h1>TOKENIZING REAL ESTATE</h1>
                  <h2>The future of real estate investing is fractional</h2>
                  <p>Fractional ownership democratizes access to real estate investment, and therefore distributes and minimizes the risks and labor involved with owning property. And GRDC Token makes it even simpler!</p>
                  <Link className='link' to={''}>EXPLORE</Link>
               </div>
            </div>
         </div>
         <div className='future-intro'>
            <div className='inner'>
               <h1>Tokenizing Real Estate</h1>
               <h2>The future of real estate investing is fractional</h2>
               <p>Tokenizing real estate has become the focus of many institutions in 2022, and is likely to continue into the future as Solana offers a way to add improved levels of liquidity (tokens) to a notoriously illiquid industry (real estate).</p>
               <p>Fractional ownership democratizes access to real estate investment, and therefore distributes and minimizes the risks and labor involved with owning property.  And RealToken makes it even simpler!</p>
               <Link className='link' to={''}>GET STARTED</Link>
            </div>
         </div>
         <div className='learn-more'>
            <div className='inner'>
               <h1>Learn more about GRDC</h1>
               <div className='datas'>
                  {[
                     {
                        title: 'Episode 3 — 15% drop in Detroit: Opportunity or threat?',
                        date: 'May 22, 2022',
                        content: '15% drop in Detroit: Opportunity or threat? Vous pouvez retrouver le version française de cet article en cliquant ici. For some time now, it has been possible to find articles or tweets indicating that real estate has dropped in the Rust Belt area, where RealT has...',
                        link: { title: 'READ MORE', url: '' }
                     },
                     {
                        title: 'Episode 3 — 15% drop in Detroit: Opportunity or threat?',
                        date: 'May 22, 2022',
                        content: '15% drop in Detroit: Opportunity or threat? Vous pouvez retrouver le version française de cet article en cliquant ici. For some time now, it has been possible to find articles or tweets indicating that real estate has dropped in the Rust Belt area, where RealT has...',
                        link: { title: 'READ MORE', url: '' }
                     },
                     {
                        title: 'Episode 3 — 15% drop in Detroit: Opportunity or threat?',
                        date: 'May 22, 2022',
                        content: '15% drop in Detroit: Opportunity or threat? Vous pouvez retrouver le version française de cet article en cliquant ici. For some time now, it has been possible to find articles or tweets indicating that real estate has dropped in the Rust Belt area, where RealT has...',
                        link: { title: 'READ MORE', url: '' }
                     }
                  ].map((each, i) => <div className='each-data' key={i}>
                     <h2>{each.title}</h2>
                     <h3>{each.date}</h3>
                     <p>{each.content}</p>
                     <Link to={each.link.url}>{each.link.title}</Link>
                  </div>)}
               </div>
            </div>
         </div>
         <div className='our-team'>
            <div className='inner'>
               <h1>OUR <span>TEAM</span></h1>
               <div className='members'>
                  {[
                     {
                        avatar: 'dale.jpeg',
                        name: 'Dale Willie',
                        desc: 'I’ve been in the real estate and construction worlds for over 22 years. My first construction job was to fire a General onsite and take over a job he wasn’t doing. That was 23 years ago! Since then I’ve built and invested into many different types of real estate deals. This is by far the best deal I’ve ever worked on. Building complexes where 100% of the garbage is recycled is going to be the best job I’ve ever accomplished. I am so excited about the future that I’ve invested the past couple years of my time and resources to seeing GRDC come to life. Join me into a new world using crypto to build a better place for everyone!',
                        position: 'Chief Executive Officer'
                     },
                     {
                        avatar: 'edward.jpeg',
                        name: 'Edward Gentry',
                        desc: '',
                        position: 'Finance Manager'
                     },
                     {
                        avatar: 'vinay.jpeg',
                        name: 'Vinay Phadnis',
                        desc: '',
                        position: 'Chief Technology Officer'
                     },
                     {
                        avatar: 'la.jpeg',
                        name: 'La Fountain',
                        desc: '',
                        position: 'Project Manager'
                     }
                  ].map((member, i) => <div className='each-member' key={i}>
                     <div className='thumbnail' style={{ backgroundImage: `url(${member.avatar})` }}>
                        <div className='resizer'></div>
                     </div><div className='content'>
                        <h2>{member.name}</h2>
                        <p>{member.position}</p>
                     </div>
                  </div>)}
               </div>
            </div>
         </div>
         <div className='newsletter ln-top'>
            <div className='inner'>
               <h1>NEWSLETTER</h1>
               <h3>Subscribe to our newsletter<br />Get our latest updates as they happen.</h3>
               <form onSubmit={(e) => e.preventDefault()}>
                  <input type={'email'} placeholder="Email Address..." />
                  <button type='submit'>Subscribe</button>
               </form>
            </div>
         </div>
         <Footer />
      </div>);
}

export default Home;