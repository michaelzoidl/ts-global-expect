/// <reference types="chai" />

declare namespace NodeJS {
  interface Global {
    expect: Chai.ExpectStatic;
  }
}

declare const expect: Chai.ExpectStatic;
