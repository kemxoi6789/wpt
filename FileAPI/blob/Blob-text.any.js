// META: title=Blob Text
// META: script=../support/Blob.js
'use strict';

promise_test(async () => {
  const blob = new Blob(["PASS"]);
  const text = await blob.text();
  assert_equals(text, "PASS");
}, "Blob.text()")

promise_test(async () => {
  const blob = new Blob();
  const text = await blob.text();
  assert_equals(text, "");
}, "Blob.text() empty blob data")

promise_test(async () => {
  const blob = new Blob(["P", "A", "SS"]);
  const text = await blob.text();
  assert_equals(text, "PASS");
}, "Blob.text() multi-element array in constructor")

promise_test(async () => {
  const non_unicode = "\u0061\u030A";
  const input_arr = new TextEncoder("utf-8").encode(non_unicode);
  const blob = new Blob([input_arr]);
  const text = await blob.text();
  assert_equals(text, non_unicode);
}, "Blob.text() non-unicode")

promise_test(async () => {
  const blob = new Blob(["PASS"], { type: "text/plain;charset=utf-16le" });
  const text = await blob.text();
  assert_equals(text, "PASS");
}, "Blob.text() different charset param in type option")

promise_test(async () => {
  non_unicode = "\u0061\u030A";
  input_arr = new TextEncoder("utf-8").encode(non_unicode);
  blob = new Blob([input_arr], { type: "text/plain;charset=utf-16le" });
  text = await blob.text();
  assert_equals(text, non_unicode);
}, "Blob.text() different charset param with non-ascii input")
