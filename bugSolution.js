```javascript
db.collection.updateOne(
  { name: "John" },
  {
    $inc: { age: -1 },
    $min: { age: 0 } // Ensures age does not go below 0
  }
);
```