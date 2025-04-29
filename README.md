# ask-nithyananda

Link to find all my Q&A from Ask Nithyananda  
https://sripriyesha.github.io/ask-nithyananda/

---

## Test the site locally

### Windows

⚠️ Run all commands below in PowerShell as administrator.

Prerequisites:

1. Install Chocolatey  
   https://chocolatey.org/install#individual

2. Install PHP

```bash
# Install PHP with Chocolatey
choco install php
```

3. Install Ruby

```bash
# Install Ruby with Chocolatey
choco install ruby -y
```

### Run the local site on MacOS And Windows

1. Install dependencies

```bash
# Install dependencies
gem install bundler
gem install jekyll
bundle install
```

2. Run the site locally

```bash
# Run the site locally
bundle exec jekyll serve --config _config.yml,_config_dev.yml --trace
```
