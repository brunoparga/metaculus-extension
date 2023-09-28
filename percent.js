window.onload = () => {
  const button = [...document.getElementsByClassName("group/predict")][0]
  insertMyPercent(button)
}

const insertMyPercent = (button) => {
  const predict = queryPredict()
  const currentPercent = getCurrentPercent(button)
  const input = buildInput(currentPercent)
  predict.insertAdjacentElement("beforebegin", input)
  input.addEventListener("input", () => {
    button.style.left = `${input.value}%`
  })
}

const queryPredict = () => {
  return [...document.querySelectorAll("button")]
  .filter((el) => el.innerText === "Predict")
  [0]
}

const getCurrentPercent = (button) => {
  const percentage = button.style.getPropertyValue("left")
  const justTheNumber = percentage.substring(0, percentage.length - 1)
  return `${justTheNumber}.0`
}

const buildInput = (currentPercent) => {
  const input = document.createElement("input")
  input.setAttribute("type", "number")
  input.setAttribute("min", 0.1)
  input.setAttribute("max", 99.9)
  input.setAttribute("step", 0.1)
  input.setAttribute("value", currentPercent)
  input.style.backgroundColor = "black"
  input.style.color = "white"
  input.style.alignContent = "right"
  return input
}

