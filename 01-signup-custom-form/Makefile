SSH_HOSTNAME = jplusplus
SSH_DIR = /home/jplusplus/apps/beabee-mockups/01/
SSH_PATH = $(SSH_HOSTNAME):$(SSH_DIR)

serve:
	python3 -m http.server 8000

deploy: 
	rsync --compress --checksum --progress --recursive --update ./ $(SSH_PATH)
dry-deploy: 
	rsync --dry-run --compress --checksum --progress --recursive --update ./ $(SSH_PATH)

