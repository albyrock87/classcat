export default function cat(classes, prefix) {
  var value
  var className = ""
  var type = typeof classes

  if ((classes && type === "string") || type === "number") {
    return classes
  }

  prefix = prefix || " "

  if (Array.isArray(classes) && classes.length) {
    for (var i = 0, len = classes.length; i < len; i++) {
      if ((value = cat(classes[i], prefix))) {
        className += (className && prefix) + value
      }
    }
  } else {
    for (var i in classes) {
      if (classes.hasOwnProperty(i) && (value = classes[i])) {
        className +=
          (className && prefix) +
          i +
          (typeof value === "object" ? cat(value, prefix + i) : "")
      }
    }
  }

  return className
}
