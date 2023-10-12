UI_DIR=./ui
PLAYBOOK_DIR=./playbook
BLOG_DIR=./blog
UI_BUILD=./ui/build

# Build everything
all:	clean  ui  antora  gatsby

# Rule to build the UI before building the docs
ui: ./ui/build
	@echo "Building UI"
	cd $(UI_DIR) && npm i && gulp bundle

# Rule to build the Antora documentation
antora:
	@echo "Building Documentation"
	cd $(PLAYBOOK_DIR) && npm i antora && npx antora antora-playbook.yml --stacktrace --fetch

# Rule to build the Gatsby blog and rest of the pages
gatsby:
	@echo "Building Blog"
	cd $(BLOG_DIR) && npm i && gatsby develop --verbose

# Rule to clean cache
clean:
	rm ui/build/ui-bundle.zip
	cd ./blog/ && gatsby clean
