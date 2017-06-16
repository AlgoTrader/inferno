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

  it("#1 Controlled checkbox, checked=false", function() {
    render(<input type="checkbox" checked={false} />, container);
    const input = container.firstChild;

    expect(input.checked).toBe(false);
  });

  it("#2 Controlled checkbox, checked=false, got onClick with valid values", function() {
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
    expect({ gotOnClick }).toEqual({ gotOnClick: true });
    expect({ newChecked }).toEqual({ newChecked: true });
  });

  it("#3 Controlled checkbox, checked=false, got onChange with valid values", function() {
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
    expect({ gotOnChange }).toEqual({ gotOnChange: true });
    expect({ newChecked }).toEqual({ newChecked: true });
  });

  it("#4 Controlled checkbox, checked=true", function() {
    render(<input type="checkbox" checked={true} />, container);
    const input = container.firstChild;

    expect(input.checked).toBe(true);
  });

  it("#5 Controlled checkbox, checked=true, got onClick with valid values", function() {
    let gotOnClick = false;
    let newChecked = null;

    render(
      <input
        type="checkbox"
        checked={true}
        onClick={e => {
          gotOnClick = true;
          newChecked = e.target.checked;
        }}
      />,
      container
    );
    const input = container.firstChild;

    triggerEvent("click", input);

    expect(input.checked).toBe(true);
    expect({ gotOnClick }).toEqual({ gotOnClick: true });
    expect({ newChecked }).toEqual({ newChecked: false });
  });

  it("#6 Controlled checkbox, checked=true, got onChange with valid values", function() {
    let gotOnChange = false;
    let newChecked = null;

    render(
      <input
        type="checkbox"
        checked={true}
        onChange={e => {
          gotOnChange = true;
          newChecked = e.target.checked;
        }}
      />,
      container
    );
    const input = container.firstChild;

    triggerEvent("click", input);

    expect(input.checked).toBe(true);
    expect({ gotOnChange }).toEqual({ gotOnChange: true });
    expect({ newChecked }).toEqual({ newChecked: false });
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

  it("#1 Controlled radio, checked=false", function() {
    render(<input type="radio" checked={false} value="magic" />, container);
    const input = container.firstChild;

    expect(input.checked).toBe(false);
  });

  it("#2 Controlled radio, checked=false, got onClick with valid values", function() {
    let gotOnClick = false;
    let newChecked = null;

    render(
      <input
        type="radio"
        checked={false}
        value="magic"
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
    expect({ gotOnClick }).toEqual({ gotOnClick: true });
    expect({ newChecked }).toEqual({ newChecked: true });
  });

  it("#3 Controlled radio, checked=false, got onChange with valid values", function() {
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
    expect({ gotOnChange }).toEqual({ gotOnChange: true });
    expect({ newChecked }).toEqual({ newChecked: true });
  });
});
