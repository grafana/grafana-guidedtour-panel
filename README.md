# Guided tour panel for grafana dashboards

Add guided tour to your Grafana dashboards

## Features

- Add guided steps pointing to panel
- Customize tour theme ( color scheme)
- Automatic support for dark and light mode
- Supports Markdown content in the tour
- Optionally, Auto start the tour on dashboard load
- Optionally, Redirect to different dashboard at the end of the tour

## Setup

- Add Guided Tour Panel to your dashboard

  ![image](https://user-images.githubusercontent.com/153843/124014716-c6204180-d9db-11eb-8d4e-3518a8cba64e.png)

- Add as many steps required. Provide exact panel title for the step and then specify content. Content can be in markdown format.
  ![image](https://user-images.githubusercontent.com/153843/124014846-ef40d200-d9db-11eb-9d0c-b713676b0fd9.png)

- Customize the look and feel if required.

## Limitation

- For the panels hidden inside the collapsed rows are not supported
- Guided tour panel needs to be at the top of the dashboard or at least it should be in viewport
- Panels you are navigating should be in viewport
