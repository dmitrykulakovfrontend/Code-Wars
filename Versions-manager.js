/*
  In this kata we are going to mimic a software versioning system.

  You have to implement a vm function returning an object.

  It should accept an optional parameter that represents the initial version. The input will be in one of the following formats: "{MAJOR}", "{MAJOR}.{MINOR}", or "{MAJOR}.{MINOR}.{PATCH}". More values may be provided after PATCH but they should be ignored. If these 3 parts are not decimal values, an exception with the message "Error occured while parsing version!" should be thrown. If the initial version is not provided or is an empty string, use "0.0.1" by default.

  This class should support the following methods, all of which should be chainable (except release):

  major() - increase MAJOR by 1, set MINOR and PATCH to 0
  minor() - increase MINOR by 1, set PATCH to 0
  patch() - increase PATCH by 1
  rollback() - return the MAJOR, MINOR, and PATCH to their values before the previous major/minor/patch call, or throw an exception with the message "Cannot rollback!" if there's no version to roll back to. Multiple calls to rollback() should be possible and restore the version history
  release() - return a string in the format "{MAJOR}.{MINOR}.{PATCH}"
  May the binary force be with you!
*/

// Answer:

const vm = (init) => {
  return new VersionManager(init);
};

class VersionManager {
  constructor(initialVersion) {
    if (!initialVersion?.length) {
      this.majorVersion = 0;
      this.minorVersion = 0;
      this.patchVersion = 1;
      this.history = [];
      return;
    }
    const versions = initialVersion.split(".");
    if (
      (versions[0] && Number.isNaN(+versions[0])) ||
      (versions[1] && Number.isNaN(+versions[1])) ||
      (versions[2] && Number.isNaN(+versions[2]))
    ) {
      throw new Error("Error occured while parsing version!");
    }
    versions[0] ? (this.majorVersion = versions[0]) : (this.majorVersion = 0);
    versions[1] ? (this.minorVersion = versions[1]) : (this.minorVersion = 0);
    versions[2] ? (this.patchVersion = versions[2]) : (this.patchVersion = 0);
    this.history = [];
  }
  release() {
    return `${this.majorVersion}.${this.minorVersion}.${this.patchVersion}`;
  }
  major() {
    this.history.push(this.currentVersion());
    this.majorVersion++;
    this.minorVersion = 0;
    this.patchVersion = 0;
    return this;
  }
  currentVersion() {
    return {
      major: this.majorVersion,
      minor: this.minorVersion,
      patch: this.patchVersion,
    };
  }
  minor() {
    this.history.push(this.currentVersion());
    this.minorVersion++;
    this.patchVersion = 0;
    return this;
  }
  patch() {
    this.history.push(this.currentVersion());
    this.patchVersion++;
    return this;
  }
  rollback() {
    let previousVersion = this.history.pop();
    if (!previousVersion) {
      throw new Error("Cannot rollback!");
    }
    this.majorVersion = previousVersion.major;
    this.minorVersion = previousVersion.minor;
    this.patchVersion = previousVersion.patch;
    return this;
  }
}

// BigO: O(n)
