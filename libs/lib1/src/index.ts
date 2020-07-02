import { fn2 } from "@myrepo/lib2";

export function fn1() {
  return "f1";
}

export function fn12() {
  return fn1() + fn2();
}
