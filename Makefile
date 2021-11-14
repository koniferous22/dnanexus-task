clean:
	sudo rm -rf ./.docker/db-volume
	mkdir ./.docker/db-volume

dev:
	docker-compose up --build

dev-reset: clean run-dev

# This should be executed against running stack
migration-run:
	docker-compose exec api npm run orm -- migration:run
