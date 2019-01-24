# React Native Paint

Minimal implementation of a "Paint" app using React Native and Expo

https://exp.host/@rmotr/rmotr-paint

<p align="center">
  <img src="http://i.imgur.com/XzR65hx.gif">
</p>


## Setting up project dependencies

```bash
$ npm install -d
```

## Setting up the Expo Development CLI

```bash
$ npm install -g exp
```

## Login or Signup

In order to start Expo server, you would need to be registered.

```
$ expo login
```

```
$ expo signup
```

## Running the app in a local server

Expo Development CLI provides, out of the box, a way to start a local server for your app and give your a URL to it. Just execute the `expo start` command from Expo Development CLI and the application will start. To see all options available execute `expo start --help`.

The server will continue running until you stop it with `expo stop`. Use `expo logs` to view logs.

Also you can specify type of protocol to use with `--exp`, `--http` (default) or `--redirect` options. You can choose type of host to use with too with `--lan`, `--localhost` or `--tunnel` (default) options. That last one allow you to view your app on other network.

```bash
$ expo start --dev [options]
```

## Running the app in your simulator

Expo Development CLI also provides a way to opens your app in Expo app in a currently running iOS simulator on your computer, or on a connected Android device.

```bash
$ expo start --ios [options]
```

```bash
$ expo start --android [options]
```

Note: If you will use an Android emulator, you will probably need to configure the `ANDROID_HOME` and `PATH` env variables to make it works correctly.

---
<p align="center">
  <a href="https://rmotr.com" target="_blank">
    <img src="http://i.imgur.com/JEIGdC6.png">
  </a>
</p>