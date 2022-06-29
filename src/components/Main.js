import React from 'react';
import "../styles/Main.css";
import Disclaimer from './Disclaimer';
// import Cards from './Cards';
// import ContentWithRightRail from './ContentWithRightRail';
import BodyPanel from './BodyPanel';
// import RightRail from './RightRail';
import Header from './Header';
// import Bottom from './Bottom';
import Hero from './Hero';
import ContentFull from './ContentFull';
import UnorderedList from './UnorderedList';
import LocationBanner from './LocationBanner';

function Main() {
  return (
    <div>
      <Header />
      <Hero darkText="true" phone="(219) 703-2089">
        To learn more<br />
        and schedule your<br />
        mammogram, call
      </Hero>
      <div class="container">
        <ContentFull>
          <BodyPanel headline="Early detection saves lives. Call today.">
            Get screened for breast cancer at the provider that is most preferred for cancer care* in Northwest Indiana.
          </BodyPanel>
          <UnorderedList />
        </ContentFull>
        {/* <Cards /> */}
        {/* <Footer /> */}
        <LocationBanner>There's a mammogram screening location close to you:</LocationBanner>
        <Disclaimer />
      </div>
      {/* <Bottom /> */}
      {/* <script src="./Scripts"></script> */}
    </div>
  );
}

export default Main;