<h1 align="center">
  <img src="https://github.com/butukay/yacd-macos/blob/8543dd57b6b8bbf721daa27c6c9e17a1616dda1c/screenshot.png" alt="yacd">
</h1>

> Yet Another [Clash](https://github.com/yaling888/clash) [Dashboard](https://github.com/yaling888/clash-dashboard)

## Usage

Add to your sing-box config.json

```
  "experimental": {
    "clash_api": {
      "external_controller": "127.0.0.1:9090",
      "external_ui_download_url": "https://butukay.github.io/yacd-macos/dashboard.zip"
    }
  }
```

## Development

```sh
# install dependencies
# you may install pnpm with `npm i -g pnpm`
pnpm i

# start the dev server
pnpm start

# build optimized assets
# ready to deploy assets will be in the directory `public`
pnpm build
```
