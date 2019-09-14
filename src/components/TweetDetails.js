import React, { useEffect, useState } from "react";
import { useRoute, Link } from "wouter";
import { ArrowRight } from "react-feather";

export default function TweetDetails() {
  const [match, params] = useRoute("/tweet/:id");

  const [tweet] = useState({
    htmlContent:
      '<blockquote class="twitter-tweet"><p lang="en" dir="ltr">The biggest threats to the Free Software Foundation are Clang and Richard Stallman.</p>&mdash; Ryan C. Gordon (@icculus) <a href="https://twitter.com/icculus/status/1172954637038759937?ref_src=twsrc%5Etfw">September 14, 2019</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>',
    verdict: null,
    verified: false,
    trustLevel: 77,
    category: "",
    opinions: [],
    datePosted: null
  });

  const { verdict, verified, trustLevel, htmlContent } = tweet;

  let color;
  let backgroundColor;
  if (trustLevel > 0) {
    backgroundColor = "#FA0000";
    color = "white";
  }
  if (trustLevel > 30) {
    backgroundColor = "#555655";
    color = "white";
  }
  if (trustLevel > 75) {
    backgroundColor = "#158F00";
    color = "white";
  }

  useEffect(() => {
    if (match) {
      fetch(`/api/${params.id}`);
    }
  }, [match, params.id]);

  return (
    <main
      style={{
        minHeight: 300,
        padding: 24,
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        gridTemplateRows: "repeat(5, 1fr)"
      }}
    >
      <div
        style={{
          gridArea: "1 / 1 / 6 / 4",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />
      <div
        style={{
          gridArea: "2 / 4 / 6 / 6",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <div style={{ flexGrow: 1 }}>
          <h2 style={{ marginTop: 0 }}>
            verdict: {verified ? verdict : `not yet`}
          </h2>
          {!verdict && (
            <h3>
              current trust:{" "}
              <span style={{ padding: 4, color, backgroundColor }}>
                {trustLevel}%
              </span>
            </h3>
          )}
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
        >
          <Link
            style={{ alignSelf: "center" }}
            className="link"
            href={`/tweet/${params.id}/opinions`}
          >
            see who vouched
          </Link>
          <ArrowRight
            style={{ marginLeft: 8 }}
            color="rgba(0, 0, 0, 0.5)"
            size="16"
          />
        </div>
      </div>
    </main>
  );
}
