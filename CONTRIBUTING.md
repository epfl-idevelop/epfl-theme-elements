Contributing
============

Welcome, so you are thinking about contributing ?
Awesome, this a great place to start.

Setup
-----

```bash
git clone git@github.com:epfl-si/epfl-theme-elements.git
cd epfl-theme-elements
npm i
```

Test
----

```bash
npm t
```

Build
-----

```bash
npm run release
```

and check the `dist` and `release` folders.

Release
-------

  1. Update [CHANGELOG.md](CHANGELOG.md)
  2. Update the version in [package.json](package.json)
  3. Build and commit the `dist` folder
  4. Deploy and tagging (check below)
  5. Create the release package in GitHub
  6. Publish with ``npm publish``

Deploy
------

Copy the deploy tool on the servers (if doesn't exist on the server):
```bash
./deploy_tool/web2018.sh deploy_tools
```

Deploy the archive on the servers:
```bash
scp release/*cdn.zip <user>@<server>:~
```

Then on each server:
```bash
./web2018.sh deploy <archive>
```

Tagging
-------
```bash
git tag -a v<version> -m "EPFL Theme Elements - <version>"
git push --tags
```

License
-------

Apache License 2.0

(c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland, VPSI, 2018.

See the [LICENSE](LICENSE) file for more details.
