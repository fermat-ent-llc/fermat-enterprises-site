// GitHub Pages serves 404.html for any path it has no file for.
// Shipping a copy of index.html as 404.html lets React Router handle
// deep links like /services on a hard refresh.
import { copyFileSync } from "node:fs";
import { resolve } from "node:path";

const dist = resolve(import.meta.dirname, "..", "dist");
copyFileSync(resolve(dist, "index.html"), resolve(dist, "404.html"));
console.log("spa-fallback: wrote dist/404.html");
