import React from "react";
import { Link, useRoute } from "wouter";
import { CheckCircle, XCircle } from "react-feather";

function TweetOpinion(props) {
  const { username = "Random User", verdict = true, reason = "" } = props;

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        {username}
        {verdict ? (
          <CheckCircle style={{ marginLeft: 8 }} />
        ) : (
          <XCircle style={{ marginLeft: 8 }} />
        )}
      </div>
      {reason && (
        <div style={{ fontSize: "0.8em", fontStyle: "italic" }}>
          Reasoning: {reason}
        </div>
      )}
    </div>
  );
}

export default function TweetOpinions(props) {
  const { tweetUser = "anotherone", opinions = [{}] } = props;
  const [, params] = useRoute("/tweet/:id/opinions");

  return (
    <main
      style={{
        padding: 24,
        boxSizing: "border-box",
        width: "100vw",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
      }}
    >
      <h2 style={{ margin: 0, marginBottom: 24 }}>
        Opinions about @{tweetUser}'s{" "}
        <Link className="link" href={`/tweet/${params.id}`}>
          tweet
        </Link>
      </h2>
      {opinions.map(opinion => (
        <TweetOpinion {...opinion} />
      ))}
    </main>
  );
}
