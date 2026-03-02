<h1 align="center">
  <img src="https://user-images.githubusercontent.com/78135608/232244383-5e1389db-ce56-4c83-9627-4f3d1a489c6e.png" alt="yacd">
</h1>

> Yet Another [Clash](https://github.com/yaling888/clash) [Dashboard](https://github.com/yaling888/clash-dashboard)

## Usage

Add to your sing-box config.json

```
  "experimental": {
    "clash_api": {
      "external_controller": "127.0.0.1:9090",
      "external_ui_download_url": "https://github.com/butukay/yacd-macos/dashboard.zip"
    }
  }
```

## Development

```sh
# install dependencies
# you may install pnpm with `npm i -g pnpm`
pnpm i

# start the dev server
# then go to http://127.0.0.1:3000
pnpm start


# build optimized assets
# ready to deploy assets will be in the directory `public`
pnpm build
```
