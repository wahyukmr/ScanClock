# ScanClock — Maintenance and Release Runbook

**Document status:** Operational guide for the archived ScanClock project  
**Last project snapshot:** 23 November 2026  
**Application ID:** `com.scanclock`

This document explains how to restore, diagnose, maintain, build, and release ScanClock in the future. It is intended to be used together with `ARCHIVE-STATUS.md` and the `README.md` in the project root.

---

## 1. Project status and known baseline

ScanClock is an archived React Native demo/learning project. It is not being actively developed. A future update should only be undertaken when there is a concrete need, such as fixing a blocking defect, restoring a backend integration, or maintaining Play Store compatibility.

The last known project and Play Store state is:

| Item | Last known value |
|---|---|
| Application | ScanClock |
| Android application ID | `com.scanclock` |
| React Native | `0.81.0` |
| React | `19.1.0` |
| `react-test-renderer` | `19.1.0` |
| Node.js | `24.22.1` |
| npm | `11.19.1` |
| Java | `17.0.10` |
| Gradle Wrapper | `8.14.3` |
| Android NDK | `28.0.12433566` |
| Production track | `1.0.2`, version code `6` |
| Internal testing track | `1.0.3`, version code `7` |
| Production upload key | `android/app/scan-clock-pribadi.keystore` |

These versions describe the last recorded working environment, not a guarantee that every version remains the recommended version for a future release. Before upgrading tools or dependencies, check the current React Native, Android Gradle Plugin, Android SDK, Play Console, and native-library compatibility requirements.

### Known backend limitation

The project previously used this development API base URL:

`https://dev.pondokdigital.pondokqu.id/api`

On 22 November 2026, this hostname returned DNS `NXDOMAIN` from public DNS resolvers and from the phone. DNS resolution failed before an HTTP request could reach the server. The original backend is not maintained by the ScanClock project owner, and no API documentation or replacement base URL was available during the last test.

As a result, registration options for Divisi, Departemen, and Cabang could not be loaded. Do not assume this has been fixed. Re-test DNS and obtain a confirmed active API URL and endpoint contract from the backend owner before attempting to restore registration.

---

## 2. Important files and secrets

### Files to preserve

Do not delete these files or folders as part of routine cleanup:

- `src/` — JavaScript application source.
- `android/app/src/` — Android native source, manifest, resources, and app configuration.
- `ios/` — iOS native source and Xcode project.
- `android/gradle/` — Gradle Wrapper files.
- `android/gradlew` and `android/gradlew.bat` — Gradle Wrapper launchers.
- `package.json` and `package-lock.json` — dependency declarations and lockfile.
- `android/app/build.gradle` — Android application configuration and signing configuration.
- `android/gradle.properties`, `android/build.gradle`, and `android/settings.gradle` — Android build configuration.
- `Gemfile`, `ios/Podfile`, and `.bundle/config` — Ruby Bundler/CocoaPods configuration.
- `.env` — local environment configuration, if the project still requires it.
- `android/app/scan-clock-pribadi.keystore` — production upload key.

Generated folders such as `node_modules/`, `android/.gradle/`, `android/build/`, and `android/app/build/` were intentionally removed during archiving. They can be regenerated.

### Signing keys

There are three different key files/roles in the project history:

1. **Production upload key:** `android/app/scan-clock-pribadi.keystore`. Preserve it. Back it up securely. Do not commit it, upload it to a public repository, or replace it casually.
2. **Debug key:** `android/app/debug.keystore`. The current debug signing configuration refers to this file. It is not the production upload key.
3. **Test-only key:** previously stored outside the repository at `C:\Users\maryu\tools\scanclock-16kb-test.keystore`. It was for local test APKs only. Never use it for a Play Console production upload.

Google Play App Signing and the local upload key are not the same thing. The local production keystore signs the upload bundle; Google Play manages the app-signing key used for distribution when Play App Signing is enabled. Preserve the upload key that matches the Upload key certificate shown in Play Console.

The production keystore and its backup were SHA-256 verified as identical on 23 November 2026. The final AAB and its backup were also verified as identical.

### Credentials and environment variables

- `.env` is ignored by Git. Keep it out of commits and public uploads.
- Production signing passwords and aliases must never be placed in source code, README files, screenshots, or Git commits.
- The release signing block in `android/app/build.gradle` reads Gradle properties named `MYAPP_UPLOAD_STORE_FILE`, `MYAPP_UPLOAD_STORE_PASSWORD`, `MYAPP_UPLOAD_KEY_ALIAS`, and `MYAPP_UPLOAD_KEY_PASSWORD`.
- Check the current local signing configuration before building a release. Do not assume that passwords or aliases are present in the project directory.
- Prefer user-level Gradle properties or another private local secret store rather than committing signing credentials in the project-level `gradle.properties`.

If a credential or private key is ever committed to a public repository, treat it as exposed. Removing it in a later commit does not remove it from Git history. Rotate or replace the affected credential/key as appropriate and follow the relevant Google Play key-management process.

---

## 3. Restore the development environment

The archived working copy is at:

`C:\Project\ReactNative\ScanClock`

The final archive is at:

`C:\Project\Archives\ScanClock-final-2026-11-23`

The archive contains a copy of the source project, the final Internal testing AAB, and notes. Keep a second protected backup on a separate drive or secure storage location. Do not rely on two folders on the same physical disk as the only backups.

### 3.1 Restore from archive

If the working directory is damaged or missing:

1. Restore the `Project` directory from the final archive into a new working directory.
2. Do not overwrite the only copy of the archive.
3. Confirm `.env` and the production upload keystore are present in the restored project.
4. Confirm the upload keystore is the correct key by comparing its certificate with the Upload key certificate in Play Console.
5. Keep the archived AAB separately; it is a record of the last uploaded build, not a substitute for source code.

### 3.2 Check installed tools

Open PowerShell at the project root and check:

```powershell
node --version
npm --version
java -version
```

Check the Gradle Wrapper version:

```powershell
cd android
.\gradlew.bat --version
cd ..
```

The last recorded environment was Node `24.22.1`, npm `11.19.1`, Java `17.0.10`, Gradle Wrapper `8.14.3`, and NDK `28.0.12433566`. Start with the recorded environment when reproducing the old build. If it no longer works with the current toolchain, make tool upgrades deliberately and record them.

Also confirm Android Studio/Android SDK is installed and that `android/local.properties` points to the SDK on the current computer. `local.properties` is machine-specific and should not be committed.

### 3.3 Install JavaScript dependencies

The project was archived after `node_modules/` was removed. Restore dependencies using the lockfile:

```powershell
npm ci
```

Use `npm ci`, not `npm install`, for the first restoration. `npm ci` installs the dependency versions recorded by `package-lock.json` and fails rather than silently rewriting the lockfile when the manifests do not agree.

Do not run `npm audit fix`, broad dependency upgrades, or `npm install <package>@latest` as a routine restoration step. Those commands can change the dependency graph and may introduce React Native compatibility issues.

### 3.4 Android native environment

Check that the Android SDK and the NDK version required by the project are installed. The last recorded NDK was `28.0.12433566`. Do not change NDK, Gradle, Android Gradle Plugin, Kotlin, compile SDK, or target SDK independently. Verify compatibility across the complete Android build toolchain before changing any of them.

For a basic environment diagnostic, after dependencies are installed:

```powershell
npx react-native doctor
```

Review the actual diagnostics and fix only relevant problems. A diagnostic command is not proof that the project builds successfully.

### 3.5 iOS environment

The iOS source is retained. Building and signing an iOS app requires macOS, Xcode, and the compatible Apple toolchain; a Windows machine cannot perform the native Xcode archive/signing workflow.

On a suitable Mac, restore Ruby dependencies with the project's Bundler setup and install CocoaPods dependencies according to the `Gemfile` and `ios/Podfile`. Do not delete or rewrite the retained Swift AppDelegate migration files without a specific iOS build diagnosis.

---

## 4. First restoration smoke test

Do this before making feature changes.

### 4.1 Confirm package versions

```powershell
node -e "const p=require('./package.json'); console.log({react:p.dependencies?.react, reactNative:p.dependencies?.['react-native'], testRenderer:p.devDependencies?.['react-test-renderer']});"
```

The last known compatible pairing was React `19.1.0` and `react-test-renderer` `19.1.0` with React Native `0.81.0`. If changing React or React Native later, check the official compatibility requirements and keep the renderer aligned with the React version where it is used.

### 4.2 Build a debug APK

```powershell
cd android
.\gradlew.bat assembleDebug
```

The expected output location is normally:

`android/app/build/outputs/apk/debug/app-debug.apk`

If the build fails, retain the complete first error and relevant Gradle output. Do not immediately delete caches, upgrade dependencies, or run a full clean build. Diagnose the first meaningful failure first.

### 4.3 Install and launch on a device

Connect an Android device with USB debugging enabled:

```powershell
adb devices
```

Install the debug APK:

```powershell
adb install -r .\app\build\outputs\apk\debug\app-debug.apk
```

The exact relative path depends on whether the command is run from the project root or `android` directory. Verify the package ID is still `com.scanclock` and launch the application.

A successful debug launch confirms basic build/startup only. It does not prove that login, registration, API connectivity, camera/permission flows, or all business functions work.

---

## 5. Backend/API maintenance

Do not assume the previous development API is still available. The old host failed DNS resolution in the final 2026 test.

### 5.1 Confirm the backend before changing application code

Obtain from the backend owner:

- Confirmed active HTTPS base URL.
- Whether access requires VPN or an internal network.
- Login and registration endpoint paths and HTTP methods.
- Divisions endpoint path and response example.
- Departments endpoint path, required division identifier, and response example.
- Branches endpoint path and response example.
- Authentication requirements, request fields, error format, and test credentials.
- A Postman/Apidog collection or equivalent API documentation, if available.

Do not guess a replacement hostname, hard-code an IP address for an HTTPS API, or invent response data to make the form appear functional.

### 5.2 Check DNS and HTTPS reachability

After receiving the confirmed hostname, test it from the development computer:

```powershell
Resolve-DnsName <confirmed-api-hostname>
```

Then test HTTPS reachability:

```powershell
curl.exe -v --connect-timeout 10 https://<confirmed-api-hostname>/<known-health-or-api-path>
```

Use an endpoint that the backend owner confirms. A `404` at an unverified root path does not necessarily mean the server is unavailable; DNS, TCP, TLS, HTTP routing, authentication, and application response are separate layers.

Also test from the target Android device, since its network/DNS path can differ from Windows.

### 5.3 Validate the three registration dropdowns

The existing auth flow uses service functions for:

- Divisions.
- Departments filtered by a selected division ID.
- Branches.

Check each endpoint independently in Apidog/Postman before testing the React Native UI. Confirm the response structure contains the fields the UI expects, including the relevant `id` and `name` values. Then verify the UI maps the correct identifiers into the registration request.

The existing service catches some errors and replaces them with generic messages such as `Failed to fetch divisions`. When maintaining this code, preserve useful diagnostic information such as the original network error, HTTP status, and safe server message. Never log access tokens, passwords, or personal user data.

If the backend remains unavailable, registration cannot be considered functional. Decide explicitly whether to keep the demo archived, restore the backend, or undertake a separately scoped mock-backend project. Do not represent mock data as live production data.

---

## 6. Dependency and framework maintenance

Only update dependencies when there is a concrete reason: a security issue, a Play Store/Android compatibility requirement, a reproducible defect, or a planned feature.

Recommended sequence:

1. Create a Git branch for the maintenance change.
2. Record the current Node, npm, Java, Gradle, Android SDK, NDK, React Native, and React versions.
3. Read the official React Native upgrade instructions and release notes for the target version.
4. Check compatibility of native libraries, especially libraries that include Android native code.
5. Upgrade one logically related set at a time.
6. Keep `react`, `react-test-renderer`, and React Native versions compatible.
7. Run tests and build a debug APK.
8. Test on a physical device.
9. Review `package-lock.json` and the complete dependency diff.
10. Only then prepare a release build.

Avoid changing React Native, React, Gradle, Android Gradle Plugin, Kotlin, Java, and NDK all at once. That makes regression diagnosis unnecessarily difficult.

For changes involving native Android libraries, also review current Google Play requirements for target API level, supported devices, native ABI compatibility, and 16 KB memory page-size support. These requirements can change. In the earlier ScanClock release work, `react-native-mmkv` was associated with a 16 KB page-size compatibility issue; re-check the actual library version and native binaries rather than assuming the old result still applies.

---

## 7. Android versioning and release procedure

### 7.1 Check Play Console before selecting a version

The last known published/tested versions were:

- Production: `1.0.2` / version code `6`.
- Internal testing: `1.0.3` / version code `7`.

The next uploaded Android bundle must use a version code greater than every version code already used for this application in Play Console. Based on the last recorded state, `8` is the next candidate, but verify the current Play Console tracks first. Do not reuse `7` or assume the Play Console has not changed since the archive date.

A possible next version name is `1.0.4`, but choose a name appropriate to the actual change. The version code must still be monotonically increasing.

The version values are configured in `android/app/build.gradle`.

### 7.2 Verify production upload signing

Before building a release:

1. Confirm `android/app/scan-clock-pribadi.keystore` exists.
2. Confirm the signing properties are available locally: `MYAPP_UPLOAD_STORE_FILE`, `MYAPP_UPLOAD_STORE_PASSWORD`, `MYAPP_UPLOAD_KEY_ALIAS`, and `MYAPP_UPLOAD_KEY_PASSWORD`.
3. Confirm the key certificate matches the Upload key certificate in Play Console.
4. Do not use the debug keystore or the test-only keystore.
5. Never commit passwords or the production keystore.

The release signing configuration currently uses `signingConfigs.release`. If the required Gradle properties are missing, stop and restore the secure signing configuration; do not switch release signing to debug signing.

### 7.3 Build an Android App Bundle

From the project root:

```powershell
cd android
.\gradlew.bat bundleRelease
```

The expected output is:

`android/app/build/outputs/bundle/release/app-release.aab`

Check the actual build output and confirm the application ID and version code. Do not upload a debug APK or an AAB signed with a test-only key.

### 7.4 Verify and archive the bundle

Before upload:

- Confirm package ID is `com.scanclock`.
- Confirm version name and globally increasing version code.
- Confirm the bundle was signed with the production upload key.
- Review Play Console's bundle checks, device compatibility, native library, and 16 KB page-size findings.
- Keep the AAB and record its SHA-256 hash.

Example hash command:

```powershell
Get-FileHash .\app\build\outputs\bundle\release\app-release.aab -Algorithm SHA256
```

Copy the AAB into a dated release archive outside the working project. Retain the corresponding source commit and release notes.

### 7.5 Test before Production

Use Internal testing first:

1. Create an Internal testing release in Play Console.
2. Upload the AAB.
3. Add the tester email if needed.
4. Roll out the Internal testing release.
5. Opt in using the tester link.
6. Install from Google Play, not from a locally signed test APK.
7. Test startup, login, registration, the three registration dropdowns, and every feature affected by the change.
8. Check crashes and Android compatibility.

Only publish to Production if the application is intentionally being made available to public users and its user-facing functionality is acceptable. Internal testing was the accepted path used for the 2026 dormant-account resolution; a future maintenance update does not automatically need to go to Production.

### 7.6 Production release

If a future decision is made to release publicly:

- Confirm backend functionality and privacy/data handling.
- Review the store listing, countries/regions, target API requirements, data safety declarations, and policy status.
- Review the release notes and rollout percentage.
- Use staged rollout where appropriate.
- Monitor Android Vitals, crashes, and ANRs after release.

Do not release publicly merely to test whether a build works. Use Internal testing for that purpose.

---

## 8. Git workflow for future maintenance

The final archived commit was:

`9b252f7 chore: archive ScanClock 1.0.3 internal testing state`

The working tree was clean immediately after this commit. The commit was local at that time; no push was performed as part of the archive procedure.

For future work:

1. Start from the archived commit or a verified copy of it.
2. Create a maintenance branch, for example `maintenance/fix-registration-api`.
3. Make a focused change.
4. Run `git diff --check` and inspect `git diff`.
5. Confirm `.env`, production keystore, signing passwords, and other secrets are not staged.
6. Run relevant tests and builds.
7. Commit with a descriptive message.
8. Push only after reviewing the remote repository and confirming no secret or generated build output is included.

Do not use `git reset --hard`, `git clean -fdx`, or broad restore commands as routine cleanup. They can destroy local configuration or uncommitted work.

The public GitHub repository has existed previously. If a secret is discovered in Git history, adding it to `.gitignore` or deleting it in a later commit is not sufficient; treat it as exposed and rotate it.

---

## 9. Backup and recovery policy

Maintain at least two independent copies of:

- The source project and Git history.
- The production upload keystore.
- The secure record of the keystore alias/password.
- The `.env` file or a sanitized template plus a secure copy of the actual values.
- Final AABs and their SHA-256 hashes.
- Release notes and the source commit associated with each AAB.

At least one backup should be on a separate physical drive or a secure storage service. Do not store the keystore and its password together in an unprotected folder.

For every future release, create a dated archive such as:

`C:\Project\Archives\ScanClock-<version>-<date>`

Recommended contents:

```text
ScanClock-<version>-<date>/
├── Project/                 # Source snapshot, without generated caches
├── Release/
│   ├── app-release.aab
│   └── SHA256.txt
└── Notes/
    ├── Release-notes.txt
    ├── Build-environment.txt
    └── Git-commit.txt
```

Protect `Project/` if it includes `.env` or a signing key. Do not publish this archive as a public download.

---

## 10. Quick maintenance checklist

Before changing code:

- [ ] Restore from a verified backup; do not edit the only archive copy.
- [ ] Confirm `.env` and the active API URL.
- [ ] Confirm production upload keystore and signing configuration.
- [ ] Record current toolchain versions.
- [ ] Check Play Console for the latest version code across all tracks.
- [ ] Create a Git maintenance branch.

Before uploading an AAB:

- [ ] `npm ci` completed successfully.
- [ ] Debug build succeeds.
- [ ] App launches on a physical device.
- [ ] Changed flows have been tested.
- [ ] API endpoints and response contracts have been verified.
- [ ] React/native dependency compatibility has been checked.
- [ ] Current Play requirements, including target API and 16 KB native page-size checks, have been reviewed.
- [ ] Version code is greater than every version already uploaded.
- [ ] Production upload key is used; debug/test key is not used.
- [ ] AAB package ID and version values are correct.
- [ ] AAB has been archived and SHA-256 recorded.
- [ ] Internal testing is completed before considering Production.
- [ ] No secrets or generated outputs are staged in Git.

---

## 11. Official references

Check the current official documentation when performing future maintenance; build requirements and Play policies can change.

- React Native environment setup: https://reactnative.dev/docs/set-up-your-environment
- React Native upgrading: https://reactnative.dev/docs/upgrading
- Android build configuration and shrinking: https://developer.android.com/build
- Android app signing: https://developer.android.com/studio/publish/app-signing
- Google Play app releases: https://support.google.com/googleplay/android-developer/answer/9859348
- Google Play testing tracks: https://support.google.com/googleplay/android-developer/answer/9845334
- Google Play 16 KB page-size guidance: https://developer.android.com/guide/practices/page-sizes

---

## 12. Final operating principle

Treat ScanClock as archived by default. Reopen maintenance only for a clear reason. Restore from the verified archive, diagnose the actual failing layer, make the smallest justified change, test through Internal testing, preserve the upload key, and document every release. Do not modernize every dependency or expose the demo to Production merely because the project has been reopened.
