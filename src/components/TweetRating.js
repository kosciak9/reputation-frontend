import React, { useEffect, useState } from "react";
import { useRoute } from "wouter";
import { Heart } from "react-feather";

export default function TweetRating() {
  const [match, params] = useRoute("/tweet/:id/rate");

  const [tweet] = useState({
    htmlContent:
      '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">The biggest threats to the Free Software Foundation are Clang and Richard Stallman.</p>&mdash; Ryan C. Gordon (@icculus) <a href="https://twitter.com/icculus/status/1172954637038759937?ref_src=twsrc%5Etfw">September 14, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
    verdict: null,
    verified: false,
    trustLevel: 77,
    opinions: [],
    datePosted: null,
    category: "Entertainment",
    likesDelta: 250
  });

  const { likesDelta, category, htmlContent } = tweet;

  useEffect(() => {
    if (match) {
      fetch(`/api/${params.id}`);
    }
  }, [match, params.id]);

  const buttonStyle = {
    width: "30%",
    height: 60,
    textTransform: "uppercase",
    borderRadius: 4,
    border: "none",
    fontSize: "1.5em",
    color: "white",
    margin: 16
  };

  return (
    <main
      style={{
        marginLeft: "auto",
        marginRight: "auto",
        maxWidth: 1000,
        padding: 24,
        display: "flex",
        flexDirection: "column"
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between"
        }}
      >
        <div>
          <span style={{ fontSize: "0.75em" }}>category:</span> {category}
        </div>
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            {likesDelta / 5}
            <Heart size={12} style={{ marginLeft: 4, marginRight: 4 }} />{" "}
            <span style={{ fontSize: "0.75em" }}>/ min</span>
          </div>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 24
        }}
      >
        <button style={{ ...buttonStyle, backgroundColor: "red" }}>
          Fake News
        </button>
        <button style={{ ...buttonStyle, backgroundColor: "green" }}>
          Vouch
        </button>
      </div>
    </main>
  );
}
