# Device id

##### _Enter mini description here_

## Quick Links

If you would like to contribute, please refer to [guidelines](https://github.com/Device id/Device id/blob/master/CONTRIBUTING.md) and a list of [open tasks](https://github.com/Device id/Device id/issues).

For more information, please refer to the [Wiki page](https://github.com/Device id/Device id/wiki) and [FAQ](https://github.com/Device id/Device id/wiki/FAQ)

## Usage

1. Start Server : npm start
2. Test Server : npm test

## Description

Lorem Ipsum Description ...

## Overview

Device id project allows ....

Device id is made with:

-   NodeJS
-   MongoDB
-   Express
-   Mongoose
-   Grunt
-   Yeoman
-   Yeoman Restgoose
-   ..., _and many more awesome tools_.

Check out [jSend](https://labs.omniti.com/labs/jsend) for additional information about the JSON API Response Specs.

## Table of contents

-   [Device id](#awesome-api-generator)
-   [Description](#Description)
-   [Overview](#overview)
-   [Table of Contents](#table-of-contents)
-   [Architecture](#Architecture)
-   [Generic Endpoint Summary](#Generic-Endpoint-Summary)
-   Installation
    -   [Compatibility](#compatibility)
    -   [Prerequisites](#prerequisites)
    -   [Building](#building)
    -   [Docker](#docker)
    -   [Homebrew](#homebrew)
-   [Getting Started](#getting-started)
-   [Workflow Integration](#workflow-integration)
-   [Github Integration](#github-integration)
-   [Online Generators](#online-generators)
-   [Guidelines for Contribution](https://github.com/awesome-api-generator/awesome-api-generator/wiki/Guidelines-for-Contribution)
-   [Companies/Projects using Device id](#companiesprojects-using-Device id)
-   [Device id Core Team](#Device id-core-team)
-   [License](#license)

## Architecture

All Schemas will have basic CRUD operations with added endpoints. A `markdown` detailed documentation page is available for each schema in the `docs` directory.

API Infrastructure : (Image Courtesy : [APIGEE](https://pages.apigee.com/watch-demo-edge-reg.html))  
![Image Courtesy : https://pages.apigee.com/watch-demo-edge-reg.html](https://pages.apigee.com/rs/apigee/images/demo-page-graph.png)

## Generic Endpoint Summary

-   `[GET]` /api/\<schema>s - Retrieve All _Items_
-   `[POST]` /api/\<schema> - Create a new _Item_
-   `[GET]` /api/\<schema>/<:id> - Retrieve a single _Item_ with `id`
-   `[PUT]` /api/\<schema>/<:id> - Edit a single _Item_ with `id`
-   `[DELETE]` /api/\<schema>/<:id> - Delete a single _Item_ with `id`
-   `[GET]` /api/\<schema>s/test - Quick Test item
-   `[DELETE]` /api/\<schema>s - Delete all _items_ in the collection
-   `[GET]` /api/\<schema>s/search?keyword=name:deb - Search All _Items_ with name as deb

**N.B**: The `/test` endpoint for all schemas are for quick development testing only. Do Disable this when in production!

## License

MIT  
Copyright 2017 \<COPYRIGHT HOLDER>

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

:warning: THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
# node-restapi-mongodb
