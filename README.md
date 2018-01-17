Steps:
```
ionic cordova platform add cordova-android@6.4.0
ionic cordova plugin add cordova-plugin-facebook4 --save --variable APP_ID="123456789" --variable APP_NAME="myApplication"
ionic cordova build android
```


References:
- https://www.djamware.com/post/59ad3a0c80aca768e4d2b135/login-with-ionic-3-and-cordova-native-facebook-connect-plugin

Generate hash:
- keytool -J-Duser.language=en -list -v -keystore ~/.android/debug.keystore -alias androiddebugkey -storepass android -keypass android
