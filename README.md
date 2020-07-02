# Yarn workspaces typescript monorepo

## Overview

This monorepo conatains multiple apps with multiple dependent libs (with cross dependencies between the libs).
It is minimalistic and optimized for quick and smooth development process, but also includes a production build and production run option.

## Structure and dependecies

```
- /
    - tsconfig.json // base ts config
    - package.json       // workspace defs and scripts
    - apps/              // root dir for services (top level apps)
        - service1       // depends on lib1, shows http://localhost:7001/api/v1/f1|f12
        - service1       // depends on lib2, shows http://localhost:7002/api/v1/f2
    - libs/              // root dir for libraries (shared code)
        - lib1           // depends on lib2, exposes f1() and f12()
        - lib2           // exposes f2

```

## Yarn scripts

All the following command can and should be run from the monorepo root.

After cloning, install dependencies by running `yarn`.

```
> yarn
```

For production build testing, run:

```
yarn service1 start:prod
```

You should be able too brows to `http://localhost:7001/api/v1/f1` to see the service in action.
Note that calling `http://localhost:7001/api/v1/f12` results in running code from service1, lib1 and lib2.

For development of a service run:

```
yarn service1 start
```

Once running, any change in the code of the service or of any of its dependencies will result in a fast reload of the server.
For example browse to `http://localhost:7001/api/v1/f12`, then change the returning string in `f2` in `lib2` and hit refresh.
You should be able to see your changes.
