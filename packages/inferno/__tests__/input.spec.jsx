import { render } from "inferno";
import { innerHTML, triggerEvent } from "inferno-utils";

// Checkboxes
describe("Controlled input type='checkbox' tests", () => {
  let container;

  beforeEach(function() {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(function() {
    render(null, container);
    container.innerHTML = "";
    document.body.removeChild(container);
  });

  it("Controlled checkbox, checked=false", function() {
    render(<input type="checkbox" checked={false} />, container);
    const input = container.firstChild;

    expect(input.checked).toBe(false);
  });

  it("Controlled checkbox, checked=false, got onClick with valid values", function() {
    let gotOnClick = false;
    let newChecked = null;

    render(
      <input
        type="checkbox"
        checked={false}
        onClick={e => {
          gotOnClick = true;
          newChecked = e.target.checked;
        }}
      />,
      container
    );
    const input = container.firstChild;

    triggerEvent("click", input);

    expect(input.checked).toBe(false);
    expect(gotOnClick).toBe(true);
    expect(newChecked).toBe(true);
  });

  it("Controlled checkbox, checked=false, got onChange with valid values", function() {
    let gotOnChange = false;
    let newChecked = null;

    render(
      <input
        type="checkbox"
        checked={false}
        onChange={e => {
          gotOnChange = true;
          newChecked = e.target.checked;
        }}
      />,
      container
    );
    const input = container.firstChild;

    triggerEvent("click", input);

    expect(input.checked).toBe(false);
    expect(gotOnChange).toBe(true);
    expect(newChecked).toBe(true);
  });
});

// Radio
describe("Controlled input type='radio' tests", () => {
  let container;

  beforeEach(function() {
    container = document.createElement("div");
    document.body.appendChild(container);
  });

  afterEach(function() {
    render(null, container);
    container.innerHTML = "";
    document.body.removeChild(container);
  });

  it("Controlled radio, checked=false", function() {
    render(<input type="radio" checked={false} value="magic" />, container);
    const input = container.firstChild;

    expect(input.checked).toBe(false);
  });

  it("Controlled radio, checked=false, got onClick with valid values", function() {
    let gotOnClick = false;
    let newChecked = null;

    render(
      <input
        type="radio"
        checked={false}
        value="magic"
        onClick={() => {
          gotOnClick = true;
        }}
      />,
      container
    );
    const input = container.firstChild;

    triggerEvent("click", input);

    expect(input.checked).toBe(false);
    expect(gotOnClick).toBe(true);
    expect(newChecked).toBe(true);
  });

  it("Controlled radio, checked=false, got onChange with valid values", function() {
    let gotOnChange = false;
    let newChecked = null;

    render(
      <input
        type="radio"
        checked={false}
        value="magic"
        onChange={e => {
          gotOnChange = true;
          newChecked = e.target.checked;
        }}
      />,
      container
    );
    const input = container.firstChild;

    triggerEvent("click", input);

    expect(input.checked).toBe(false);
    expect(gotOnChange).toBe(true);
    expect(newChecked).toBe(true);
  });
});
