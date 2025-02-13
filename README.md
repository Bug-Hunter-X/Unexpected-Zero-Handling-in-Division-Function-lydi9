# Unexpected Zero Handling in Division Function

This repository demonstrates a common, yet subtle, bug in JavaScript related to how zero values are handled during division.

## The Bug
The `myFunction` function intends to divide two numbers (`a` and `b`). However, its handling of zero inputs is incorrect.  It only explicitly checks for zero for the first argument and this can lead to unexpected results in different situations.