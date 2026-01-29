# LoveNotes Monorepo Cli

## Start

```bash
yarn lovenotes -h
```

### Run build command defined in package.json

```bash
yarn lovenotes i18n build
# or
yarn build -p i18n
```

### Run dev command defined in package.json

```bash
yarn lovenotes web dev
# or
yarn dev -p i18n
```

### Clean

```bash
yarn lovenotes clean --dist --rust
# clean node_modules
yarn lovenotes clean --node-modules
```

### Init

> Generate files that make the monorepo work properly, the per project codegen will not be included anymore

```bash
yarn lovenotes init
```

## Tricks

### Define scripts to run a .ts files without `--loader ts-node/esm/transpile-only`

`lovenotes run` will automatically inject `ts-node`'s transpile service(swc used) for your scripts

```json
{
  "name": "@lovenotes/demo",
  "scripts": {
    "dev": "node ./dev.ts"
  }
}
```

```bash
lovenotes @lovenotes/demo dev
```

or

```json
{
  "name": "@lovenotes/demo",
  "scripts": {
    "dev": "r ./src/index.ts"
  },
  "devDependencies": {
    "@lovenotes-tools/cli": "workspace:*"
  }
}
```

### Short your key presses

```bash
# af is also available for running the scripts
yarn af web build
```

#### by custom shell script

> personally, I use 'af'

create file `af` in the root of LoveNotes project with the following content

```bash
#!/usr/bin/env sh
./tools/scripts/bin/runner.js lovenotes.ts $@
```

or on windows:

```cmd
node "./tools/cli/bin/runner.js" lovenotes.ts %*
```

and give it executable permission

```bash
chmod a+x ./af

# now you can run scripts with simply
./af web build
```

if you want to go further, but for vscode(or other forks) only, add the following to your `.vscode/settings.json`

```json
{
  "terminal.integrated.env.osx": {
    "PATH": "${env:PATH}:${cwd}"
  },
  "terminal.integrated.env.linux": {
    "PATH": "${env:PATH}:${cwd}"
  },
  "terminal.integrated.env.windows": {
    "PATH": "${env:PATH};${cwd}"
  }
}
```

restart all the integrated terminals and now you get:

```bash
af web build
```

```

```
