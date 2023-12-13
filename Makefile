UI_DIR=./ui
PLAYBOOK_DIR=./playbook

# Build everything after cleaning
all:	clean	ui	antora

install:
	npm i -g gulp

# Rule to build the UI before building the docs
ui:	install
	@echo "Building UI"
	cd $(UI_DIR) && npm i && gulp bundle

# Rule to build the Antora documentation
antora:	ui
	@echo "Building documentation"
	cd $(PLAYBOOK_DIR) && npx antora --fetch antora-playbook.yml
	cd $(PLAYBOOK_DIR) && npx http-server -v && npx http-server build/site -c-1
	@echo "Antora site is up"

# Rule to clean cache
clean:
	rm ui/build/ui-bundle.zip
	rm -rf playbook/build
