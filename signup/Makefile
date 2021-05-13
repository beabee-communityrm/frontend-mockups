SSH_HOSTNAME = jplusplus
SSH_DIR = /home/jplusplus/apps/beabee-mockups/
SSH_PATH = $(SSH_HOSTNAME):$(SSH_DIR)

serve:
	npm run dev

build:
	npm run generate

deploy: build
	rsync --compress --checksum --progress --recursive --update dist/ $(SSH_PATH)
dry-deploy: build
	rsync --dry-run --compress --checksum --progress --recursive --update dist/ $(SSH_PATH)
