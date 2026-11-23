# ScanClock - Project Archive

Archived: 2026-11-23

## Project Status

This project is archived as a completed React Native learning/demo project.

No active feature development is planned.

## Application

- Name: ScanClock
- Package ID: com.scanclock
- React Native: 0.81.0
- React: 19.1.0

## Google Play Status

- Production: 1.0.2 (versionCode 6)
- Internal Testing: 1.0.3 (versionCode 7)
- Latest internal testing release: Active

Production was intentionally left unchanged.

## Backend

The development API hostname previously used by the application could not be resolved during the final verification.

Registration dropdowns for Divisions, Departments, and Branches may therefore fail.

The backend is not maintained by this project owner. No backend restoration is planned.

## Android Signing

- Production upload keystore: android/app/scan-clock-pribadi.keystore
- Debug keystore: android/app/debug.keystore
- Test-only keystore: stored separately

The production upload keystore must be backed up securely.

Never commit production signing credentials or environment secrets.

## Release Archive

The final Android App Bundle is archived separately:

ScanClock-1.0.3-7-internal-testing.aab

The SHA-256 hash of the archived bundle was verified against the original build output.

The production upload keystore backup was also verified against the original file.

## Restore Development Environment

Install dependencies:

```bash
npm ci
```

Build Android debug:

```bash
cd android
.\gradlew.bat assembleDebug
```

A release build requires the appropriate Android SDK, NDK, Java environment, environment variables, and production signing configuration.

## Important Notes

- Keep package ID unchanged.
- Do not replace the production upload keystore casually.
- Do not commit .env or production signing credentials.
- Preserve package-lock.json for dependency reproducibility.
- The project source code and Git history are retained for future learning and reference.
  '@ | Set-Content -Path .\ARCHIVE-STATUS.md -Encoding UTF8
