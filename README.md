# About

This is a demo cross platform (android/ios) application created using react native.
The main purpose is to have a ready to use app in order to practice Qa Automation with it,
or to have a ready to go app when working on a new framework and just want to prototype things.

Note: This is not a production app. It does not implement any backend service, it has static data and it was made just to look like a real app for practice purposes. It contains 7 views/screens with text inputs, buttons, date picker, scroll lists, check boxes, etc.

It was tested in both Android and iOS, so you should be able to run your automated tests
against it.

## Setup

Please follow react-native instructions for the step by step environment setup.
<https://reactnative.dev/docs/set-up-your-environment>

Just as general guidance:

- For android you will have to download and configure
  the android sdk, emulator, environment variables, java jdk, etc
- For iOS, you have to download the latest xcode, emulators and command line build tools.
- Also latest nodejs should be downloaded.

## Step 1: Install dependencies

```bash
# using npm
npm install

# OR using Yarn
yarn install
```

## For iOS only
~~~bash
cd ios/
bundle execute
bundle exec pod install
# If you get any version issue as output remove the pod lock file if any and try again.
~~~

## Step 2: Start the Metro Server, follow and choose your options

```bash
# using npm
npm start

# OR using Yarn
yarn start
```

## Create/update a testing android .apk 

```bash
# first create/update the bundle
npm run bundle-android

# after that cd to android/ directory
cd android

# and run the gradle command
./gradlew assembleDebug

# this will create/update apk located in 
android/app/build/outputs/
```

Note: Unless you already have a working react native environment in your os, you will probably
face some issues the first time you try to build and run the app. Poorly configured environment variables, conflict with java versions, nodejs versions, etc Just search the internet for the error and you should be able to fix it.

The app login dummy email is <johndoe@email.com> and the password is 123.

Any questions feel free to contact me.
Gonzalo Graf <grafgonzalo@gmail.com>


<img width="314" alt="app-screenshot" src="https://github.com/user-attachments/assets/25e951a6-9723-4642-ac86-3b5482424693">

