import React from 'react';
import "../styles/Main.css";
import Disclaimer from './Disclaimer';
import BodyPanel from './BodyPanel';
import Header from './Header';
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
        <LocationBanner>There's a mammogram screening location close to you:</LocationBanner>
        <Disclaimer />
      </div>
    </div>
  );
}

export default Main;