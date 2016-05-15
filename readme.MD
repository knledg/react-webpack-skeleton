# React Webpack Skeleton

## Setup

- `git clone https://github.com/knledg/react-webpack-skeleton.git your-project`
- `cd your-project`
- `rm -rf .git`
- `git init && git remote add origin <sshUrl>`
- `npm install`
- `cp dev.env .env`
- `npm i -g foreman` (if you don't have it globally installed already)
- `make client`

## Themes

- Blur Theme (Copyright (c) 2016 Akvemus GSC)


## Auth0

If you don't have an Auth0 account, create a new one, add the required .env vars.

Make sure in your Settings tab on Auth0's site to set callback url's to `http://localhost:8011/login` and
allowed origins to `http://localhost:8011`