import { useEffect } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import IndexPage from "./IndexPage/IndexPage";
import EventsPage from "./EventsPage/EventsPage";
import AboutPage from "./AboutPage/AboutPage";
import SponsorsPage from "./SponsorsPage/SponsorsPage";
import FaqPage from "./FaqPage/FaqPage";
import SocialsPage from "./SocialsPage/SocialsPage";

const redirectLinks = require("./Redirects.json");

/**
 * Returns an empty JSX element that will redirect the user to the given url.
 *
 * @param redirectUrl
 * @returns JSX.Element
 */
function Redirect({ redirectUrl }: { redirectUrl: string }) {
  useEffect(() => {
    window.location.href = redirectUrl;
  }, [redirectUrl]);

  return <></>;
}

export default function MainRouter() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"} component={IndexPage} />
        <Route exact path={"/events"} component={EventsPage} />
        <Route exact path={"/team"} component={AboutPage} />
        <Route exact path={"/sponsors"} component={SponsorsPage} />
        <Route exact path={"/faq"} component={FaqPage} />
        <Route exact path={"/socials"} component={SocialsPage} />

        {/* Generates a route with a redirect for each link in the JSON file */}
        {redirectLinks.map(
          (redirectLink: { fromUrl: string; toUrl: string }) => {
            return (
              <Route exact path={redirectLink.fromUrl}>
                <Redirect redirectUrl={redirectLink.toUrl} />
              </Route>
            );
          }
        )}

        {/* Default path if nothing matches */}
        <Route path={"/"} component={IndexPage} />
      </Switch>
    </BrowserRouter>
  );
}
