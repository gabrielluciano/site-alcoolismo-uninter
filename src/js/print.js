const PRINT_BUTTON_ID = "print";

function addPrintEventListener() {
  document.getElementById(PRINT_BUTTON_ID).addEventListener("click", function () {
    window.print();
  });
}

export { addPrintEventListener };
