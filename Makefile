UI_DIR=./ui
PLAYBOOK_DIR=./playbook
BLOG_DIR=./blog
UI_BUILD=./ui/build

# Build everything after cleaning
all:	clean  install	ui	gatsby	antora

# installs all npm dependencies
install:
	cd $(UI_DIR) && npm i
	cd $(PLAYBOOK_DIR) &&  npx http-server -v
	cd $(BLOG_DIR) && npm i

# Rule to build the UI before building the docs
ui: ./ui/build
	@echo "Building UI"
	cd $(UI_DIR) && npm i && gulp bundle

# Rule to build the Antora documentation
antora: ui
	@echo "Building Documentation"
	cd $(PLAYBOOK_DIR) &&  npx http-server -v && npx http-server build/site -c-1
	@echo "Antora site is up on"

# Rule to build the Gatsby blog and rest of the pages
gatsby:
	@echo "Building Blog"
	cd $(BLOG_DIR) && npm i && gatsby develop --verbose

# Rule to clean cache
clean:
	rm ui/build/ui-bundle.zip
	cd ./blog/ && gatsby clean
