import "feather-icons/dist/feather";
import React from "react";
import { Route, Link } from "wouter";
import TweetDetails from "./components/TweetDetails";
import TweetOpinions from "./components/TweetOpinions";

function App() {
  return (
    <div>
      <Route path="/">
        <Link href="/tweet/1">Test this!</Link>
      </Route>
      <Route path="/tweet/:id/opinions" component={TweetOpinions} />
      <Route path="/tweet/:id" component={TweetDetails} />
    </div>
  );
}

export default App;
