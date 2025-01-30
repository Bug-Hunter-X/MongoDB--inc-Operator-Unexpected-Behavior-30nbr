# MongoDB $inc Operator Unexpected Behavior
This repository demonstrates an uncommon bug related to the `$inc` operator in MongoDB. The bug arises from the incorrect usage of `$inc` which may lead to a field being decremented below zero.  This can cause unexpected errors in your application.

## Bug Description
The provided code attempts to decrement the age field using the `$inc` operator.  However, if the `age` field is already 0 or a negative value, the decrement operation can lead to incorrect results.

## Solution
The solution involves adding a conditional check to ensure that the `age` field does not decrement below zero.