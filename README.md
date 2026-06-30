# DPUse Dropbox Connector

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
<span><!-- OWASP_BADGES_START -->
[![OWASP](https://img.shields.io/badge/OWASP-passed-4CAF50)](https://dpuse.github.io/dpuse-connector-dropbox/dependency-check-reports/dependency-check-report.html)
<!-- OWASP_BADGES_END --></span>

A TypeScript library that implements the Dropbox connector. It provides easy access to a curated set of files for demonstration and evaluation purposes.

## Installation

There’s no need to install this connector manually. Once released, it’s uploaded to the Data Positioning Engine cloud and becomes instantly available to all new instances of the browser app. A notification about the new version is also sent to all existing browser apps.

## Reports & Compliance

### Dependency Check Report

The OWASP Dependency Check Report identifies known vulnerabilities in project dependencies. It is generated automatically on each release using the npm package `owasp-dependency-check`. We also rely on GitHub Dependabot to continuously check for vulnerabilities across all dependencies.

[View the OWASP Dependency Check Report](https://dpuse.github.io/dpuse-connector-dropbox/dependency-check-reports/dependency-check-report.html)

### Dependency Licenses

The following table lists top-level production and peer dependencies. All these dependencies (including transitive ones) have been recursively verified to use Apache-2.0, CC0-1.0, or MIT—commercially friendly licenses with minimal restrictions. Developers cloning this repository should independently verify dev and optional dependencies; users of the uploaded library are covered by these checks.

<!-- DEPENDENCY_LICENSES_START -->
|Dependency|Version|License(s)|Document|
|:-|:-:|:-|:-|
|[@borewit/text-codec](https://github.com/Borewit/text-codec)|0.2.2|MIT|[LICENSE](licenses/downloads/@borewit/text-codec@0.2.2-LICENSE.txt)|
|[@dpuse/dpuse-shared](https://github.com/dpuse/dpuse-shared)|0.3.719|MIT|[LICENSE](licenses/downloads/@dpuse/dpuse-shared@0.3.719-LICENSE.txt)|
|[@dpuse/dpuse-tool-csv-parse](https://github.com/dpuse/dpuse-tool-csv-parse)|0.0.143|MIT|[LICENSE](licenses/downloads/@dpuse/dpuse-tool-csv-parse@0.0.143-LICENSE.txt)|
|[@dpuse/dpuse-tool-file-operators](https://github.com/dpuse/dpuse-tool-file-operators)|0.0.24|MIT|[LICENSE](licenses/downloads/@dpuse/dpuse-tool-file-operators@0.0.24-LICENSE.txt)|
|[@tokenizer/inflate](https://github.com/Borewit/tokenizer-inflate)|0.4.1|MIT|[LICENSE](licenses/downloads/@tokenizer/inflate@0.4.1-LICENSE.txt)|
|[@tokenizer/token](https://github.com/Borewit/tokenizer-token)|0.3.0|MIT|[LICENSE](licenses/downloads/@tokenizer/token@0.3.0-LICENSE.txt)|
|[chardet](https://github.com/runk/node-chardet)|2.1.1|MIT|[LICENSE](licenses/downloads/chardet@2.1.1-LICENSE.txt)|
|[csv-parse](https://github.com/adaltas/node-csv)|6.2.1|MIT|[LICENSE](licenses/downloads/csv-parse@6.2.1-LICENSE.txt)|
|[debug](https://github.com/debug-js/debug)|4.4.3|MIT|[LICENSE](licenses/downloads/debug@4.4.3-LICENSE.txt)|
|[eventemitter3](https://github.com/primus/eventemitter3)|5.0.4|MIT|[LICENSE](licenses/downloads/eventemitter3@5.0.4-LICENSE.txt)|
|[file-type](https://github.com/sindresorhus/file-type)|22.0.1|MIT|[LICENSE](licenses/downloads/file-type@22.0.1-LICENSE.txt)|
|[ieee754](https://github.com/feross/ieee754)|1.2.1|BSD-3-Clause|[LICENSE](licenses/downloads/ieee754@1.2.1-LICENSE.txt)|
|[ms](https://github.com/vercel/ms)|2.1.3|MIT|[LICENSE](licenses/downloads/ms@2.1.3-LICENSE.txt)|
|[p-queue](https://github.com/sindresorhus/p-queue)|9.3.0|MIT|[LICENSE](licenses/downloads/p-queue@9.3.0-LICENSE.txt)|
|[p-timeout](https://github.com/sindresorhus/p-timeout)|7.0.1|MIT|[LICENSE](licenses/downloads/p-timeout@7.0.1-LICENSE.txt)|
|[strtok3](https://github.com/Borewit/strtok3)|10.3.5|MIT|[LICENSE](licenses/downloads/strtok3@10.3.5-LICENSE.txt)|
|[token-types](https://github.com/Borewit/token-types)|6.1.2|MIT|[LICENSE](licenses/downloads/token-types@6.1.2-LICENSE.txt)|
|[uint8array-extras](https://github.com/sindresorhus/uint8array-extras)|1.5.0|MIT|[LICENSE](licenses/downloads/uint8array-extras@1.5.0-LICENSE.txt)|

<!-- DEPENDENCY_LICENSES_END -->

<!-- DEPENDENCY_TREE_START -->
- **[@dpuse/dpuse-shared](https://github.com/dpuse/dpuse-shared)** 0.3.719 — this month: 2026-06-29
- **[@dpuse/dpuse-tool-csv-parse](https://github.com/dpuse/dpuse-tool-csv-parse)** 0.0.143 — 2 months ago: 2026-04-21
  - **[@dpuse/dpuse-shared](https://github.com/dpuse/dpuse-shared)** 0.3.719 — this month: 2026-06-29
  - **[csv-parse](https://github.com/adaltas/node-csv)** 6.2.1 — 3 months ago: 2026-03-20 → **latest**: 7.0.0 — this month: 2026-06-14 ❗
- **[@dpuse/dpuse-tool-file-operators](https://github.com/dpuse/dpuse-tool-file-operators)** 0.0.24 — 2 months ago: 2026-04-23
  - **[@dpuse/dpuse-shared](https://github.com/dpuse/dpuse-shared)** 0.3.719 — this month: 2026-06-29
  - **[chardet](https://github.com/runk/node-chardet)** 2.1.1 — 8 months ago: 2025-10-29 ⚠️  → **latest**: 2.2.0 — this month: 2026-06-20 ❗
  - **[file-type](https://github.com/sindresorhus/file-type)** 22.0.1 — 2 months ago: 2026-04-09
    - **[@tokenizer/inflate](https://github.com/Borewit/tokenizer-inflate)** 0.4.1 — 7 months ago: 2025-11-18 ⚠️ 
      - **[debug](https://github.com/debug-js/debug)** 4.4.3 — 9 months ago: 2025-09-13 ⚠️ 
        - **[ms](https://github.com/vercel/ms)** 2.1.3 — 66 months ago: 2020-12-08 ⚠️ 
      - **[token-types](https://github.com/Borewit/token-types)** 6.1.2 — 5 months ago: 2026-01-01
    - **[strtok3](https://github.com/Borewit/strtok3)** 10.3.5 — 3 months ago: 2026-03-21
      - **[@tokenizer/token](https://github.com/Borewit/tokenizer-token)** 0.3.0 — 59 months ago: 2021-07-12 ⚠️ 
    - **[token-types](https://github.com/Borewit/token-types)** 6.1.2 — 5 months ago: 2026-01-01
      - **[@borewit/text-codec](https://github.com/Borewit/text-codec)** 0.2.2 — 3 months ago: 2026-03-11
      - **[@tokenizer/token](https://github.com/Borewit/tokenizer-token)** 0.3.0 — 59 months ago: 2021-07-12 ⚠️ 
      - **[ieee754](https://github.com/feross/ieee754)** 1.2.1 — 68 months ago: 2020-10-27 ⚠️ 
    - **[uint8array-extras](https://github.com/sindresorhus/uint8array-extras)** 1.5.0 — 10 months ago: 2025-08-22 ⚠️ 
- **[p-queue](https://github.com/sindresorhus/p-queue)** 9.3.0 — 1 month ago: 2026-05-16
  - **[eventemitter3](https://github.com/primus/eventemitter3)** 5.0.4 — 5 months ago: 2026-01-19
  - **[p-timeout](https://github.com/sindresorhus/p-timeout)** 7.0.1 — 8 months ago: 2025-10-07 ⚠️ 
<!-- DEPENDENCY_TREE_END -->

### Bundle Analysis Report

The Bundle Analysis Report provides a detailed breakdown of the bundle's composition and module sizes, helping to identify which modules contribute most to the final build. It is generated automatically on each release using the npm package `rollup-plugin-visualizer`.

[View the Bundle Analysis Report](https://dpuse.github.io/dpuse-connector-dropbox/stats/index.html)

<!-- BUNDLE_START -->

| Chunk/Module/File                                                                           | Composition                    |
| :------------------------------------------------------------------------------------------ | :----------------------------- |
| dpuse-connector-dropbox.es.js                                                               | 4.2 kB · gz 1.5 kB · br 1.3 kB |
| &nbsp;&nbsp;&nbsp;&nbsp;src                                                                 | `████████████████░░░░` 81.2%   |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;config.json                                 | `█████████░░░░░░░░░░░` 44.9%   |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;index.ts                                    | `███████░░░░░░░░░░░░░` 36.3%   |
| &nbsp;&nbsp;&nbsp;&nbsp;@dpuse/dpuse-shared                                                 | `████░░░░░░░░░░░░░░░░` 18.8%   |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dist/dpuse-shared-errors.es.js              | `██░░░░░░░░░░░░░░░░░░` 11.0%   |
| &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;dist/dpuse-shared-componentModuleTool.es.js | `██░░░░░░░░░░░░░░░░░░` 7.9%    |

<!-- BUNDLE_END -->

## Repository Management Commands

The following list details the repository management commands implementation by this project. For more details, please refer to the scripts section of the 'package.json' file in this project.

| Name                 | VSCode Shortcuts | Notes                                                                                                           |
| -------------------- | ---------------- | --------------------------------------------------------------------------------------------------------------- |
| audit                | alt+ctrl+shift+a | Audit the project's dependencies for known security vulnerabilities.                                            |
| build                | alt+ctrl+shift+b | Type-check, compile and minify for production. Output in '/dist' directory.                                     |
| build:rust           |                  | Compile the Rust helper crate to WebAssembly via `wasm-pack`. Requires the `wasm-pack` CLI in your PATH.        |
| buildConnectorConfig |                  |                                                                                                                 |
| bumpVersion          | alt+ctrl+shift+v |                                                                                                                 |
| check                | alt+ctrl+shift+c | List the dependencies in the project that are outdated.                                                         |
| document             | alt+ctrl+shift+d | Identify the licenses of the project's dependencies.                                                            |
| format               | alt+ctrl+shift+f | Enforce formatting style rules.                                                                                 |
| lint                 | alt+ctrl+shift+l | Check the code for potential errors and enforces coding styles.                                                 |
| publishToNPM         | alt+ctrl+shift+p | ❌ Not implemented.                                                                                             |
| release              | alt+ctrl+shift+r | Synchronise local repository with the main GitHub repository and upload connector to Data Positioning platform. |
| syncWithGitHub       | alt+ctrl+shift+s | Synchronise local repository with the main GitHub repository.                                                   |
| updateDependencies   | alt+ctrl+shift+l | Install the latest version of all Data Positioning dependencies.                                                |

## Compliance

The following badge reflects FOSSA's assessment of this repository's open-source license compliance.

## License

[MIT](./LICENSE) © 2026 Data Positioning Pty Ltd
