build:
	@echo "Building game."
	docker-compose build jumper

run:
	@echo "Running game."
	docker-compose up jumper

stop:
	@echo "Stop service."
	docker-compose stop