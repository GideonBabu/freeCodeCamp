function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (new Boolean(arr[i]).toString() === "true") {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

bouncer([7, "ate", "", false, 9]);
