import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

const homepage = await readFile(new URL("../src/app/page.tsx", import.meta.url), "utf8");

test("homepage exposes the hero section and primary navigation actions", () => {
  assert.match(homepage, /<section id="hero"/);
  assert.match(homepage, /href="\/register"[\s\S]*?Get Started/);
  assert.match(homepage, /href="#features"[\s\S]*?See how it works/);
});

test("hero includes the club illustration with descriptive alternative text", () => {
  assert.match(homepage, /src="\/logo-figure-mono-white\.png"/);
  assert.match(homepage, /alt="Pitchwork — club manager illustration"/);
});

test("feature marquee is rendered inside the hero after the hero content", () => {
  const heroStart = homepage.indexOf('<section id="hero"');
  const heroEnd = homepage.indexOf("</section>", heroStart);
  const hero = homepage.slice(heroStart, heroEnd);
  const contentRowEnd = hero.indexOf("</div>\n        </div>");
  const marqueePosition = hero.indexOf("<InfiniteMarquee />");

  assert.notEqual(heroStart, -1, "hero section should exist");
  assert.notEqual(marqueePosition, -1, "marquee should be rendered in the hero");
  assert.ok(contentRowEnd < marqueePosition, "marquee should follow the hero content row");
});

test("desktop hero is sized to the viewport while small screens can grow with content", () => {
  assert.match(homepage, /min-h-\[calc\(100svh-3\.5rem\)\]/);
  assert.match(homepage, /lg:h-\[calc\(100svh-3\.5rem\)\]/);
});
