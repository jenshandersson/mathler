# Expo Mathler

My React Native version of Mathler. Built using Expo and Typescript. Managed by bun.

## Run

`bun install`  
`bun start` 
(This will start the local server, then download the Expo Go app to run it on your device)

## Expo Snack

I uploaded a version of the code base as a Snack, it runs on iOS, Android and Web: https://snack.expo.dev/@jenshandersson/mathler-snack

<img width="425" alt="image" src="https://github.com/jenshandersson/mathler/assets/1150467/f63baab4-81ad-489a-b551-627d1c4a94b4">

## Testing

Extracted most of the game logic and testing using Jest unit test. Normally my test philisophy is to unit test "logic", snapshot or other UI testing often becomes a pain when iterating and re-designing UI, so try and avoid it. There are still a lot more to test, and some edge cases to handle like running out of problems. 
