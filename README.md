# LoveNotes

## Getting started

### Web + server (local dev)

1. Install Node.js LTS and Rust.
2. Enable modern Yarn and install dependencies:

	```sh
	corepack enable
	corepack prepare yarn@stable --activate
	yarn install
	```

3. Build native dependencies:

	```sh
	yarn lovenotes @lovenotes/native build
	yarn lovenotes @lovenotes/server-native build
	```

4. Prepare the server environment:

	```sh
	cp packages/backend/server/.env.example packages/backend/server/.env
	yarn lovenotes server init
	```

5. Start the server:

	```sh
	yarn lovenotes server dev
	```

6. Start the frontend:

	```sh
	yarn dev
	```

For more details, see [docs/BUILDING.md](docs/BUILDING.md) and [docs/developing-server.md](docs/developing-server.md).

### Docker (dev services)

Run the required dev services (Postgres, Redis, Mailhog) via Docker, then start the server and web app locally:

```sh
cp ./.docker/dev/compose.yml.example ./.docker/dev/compose.yml
cp ./.docker/dev/.env.example ./.docker/dev/.env
docker compose -f ./.docker/dev/compose.yml up
```

Then follow the steps in “Web + server (local dev)” to build native deps, init, and run the server/frontend.

See [docs/developing-server.md](docs/developing-server.md) for details and notes about the Docker images.
