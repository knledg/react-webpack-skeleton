# React Webpack Skeleton

[Demo](http://knledg.github.io/react-webpack-skeleton/)

## Build Status

[![CircleCI](https://circleci.com/gh/knledg/react-webpack-skeleton/tree/master.svg?style=svg)](https://circleci.com/gh/knledg/react-webpack-skeleton/tree/master)

## Setup

- `git clone https://github.com/knledg/react-webpack-skeleton.git your-project`
- `cd your-project`
- `rm -rf .git`
- `git init && git remote add origin <sshUrl>`
- `npm install`
- `cp dev.env .env`
- `npm i -g foreman` (if you don't have it globally installed already)
- `make client`

## Features

- Button demo
- Input demo (text/select/switch/radio/checkbox/textarea)
- Progress bar demo
- Not Found page
- Table demo
- Tabs demo
- Welcome page (featuring different panels)
- Modal demo
- Notification demo
- Maps

## In progress of completion

- Accordions (in progress)
- Mail (waiting to be merged)
- Slider
- Profile (waiting to be merged)

## Todo

- Settings demos
- Timeline
- Tree View
- Fix routing on gh-pages

## Themes

- Blur Theme (Copyright (c) 2016 Akvemus GSC)

## Auth0

If you don't have an Auth0 account, create a new one, add the required .env vars.

Make sure in your Settings tab on Auth0's site to set callback url's to `http://localhost:8011/login` and
allowed origins to `http://localhost:8011`

