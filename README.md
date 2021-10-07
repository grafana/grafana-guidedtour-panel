# Guided tour panel for grafana dashboards

Add guided tour to your Grafana dashboards.

**Disclaimer**: This plugin is an **EXPERIMENTAL** plugin. Only tested against selected versions of grafana and specific use cases.

![Guided tour panel cover image](https://user-images.githubusercontent.com/153843/124014480-7b062e80-d9db-11eb-8080-dd884f0ff5e8.png)

## Features

- Add guided steps targeting dashboard panels
- Customize the tour controller with custom markdown
- Customize tour color theme and style
- Support for grafana dark and light mode
- Does support markdown content
- Option to auto start the tour on dashboard load
- Option to redirect to different dashboard at the end of the tour

## Setup

1. Add Guided Tour Panel to your dashboard like any other panel.
2. Add as many steps required. Provide exact panel title for the step and then specify content. Content can be in markdown format.
3. Customize the look and feel if required.

## Known limitations

- Panels you are navigating should be in viewport
- Panels collapsed inside dashboard rows can't be targeted
- Guided tour panel controller needs to be at the top of the dashboard or at least it should be in viewport
