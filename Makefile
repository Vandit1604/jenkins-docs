
UI_DIR=./ui
PLAYBOOK_DIR=./playbook
BLOG_DIR=./blog
UI_BUILD=./ui/build
# Build everything
all:	ui  antora  gatsby

# Rule to build the UI before building the docs
ui: ./ui/build
	@echo "Building UI"
	cd $(UI_DIR) && gulp bundle

# Rule to build the Antora documentation
antora:
	@echo "Building Documentation"
	cd $(PLAYBOOK_DIR) && npx antora antora-playbook.yml --stacktrace --fetch

# Rule to build the Gatsby blog and rest of the pages
gatsby:
	@echo "Building Blog"
	cd $(BLOG_DIR) && gatsby develop --verbose

# Rule to clean cache
clean:
	rm ui/build/ui-bundle.zip
	cd ./blog/ && gatsby clean
