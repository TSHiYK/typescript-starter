/// <reference path="../typings/index.d.ts" />
import * as assert from "power-assert";
import {add} from "../src/main";

it("2 + 3 = 5", () => {
  assert(add(2, 3) === 5);
});