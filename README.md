# Objects

## Object Basics

- allow us to use keys and values to store information in one variable
- const objectName = { keyName: value, keyName2: value2 }
- keys are properties, values can be ANY data type
- similar to arrays, but we name the indexes when we make an object

## Read, Add and Update

- dot notation (most common)
  - objectName.keyName => gives us the value at that key (can not use variables for the key name)
- bracket notation
  - objectName[keyName] (can use variables)

## Delete Properties

- delete objectName.keyName
- delete objectName[keyName]

## Looping

- for...in
- for(const key in objectName) { code }

## Keys and Values

- Object.keys(objectName)