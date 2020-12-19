/**-----------TESTOWANIE APLIKACJI-ZADANIE 2--------------- */
import App from "./App";
import { shallow } from "enzyme";
import MyComponent from "./MyComponent";
import Input from "./Input";
import { getByTestId, getByText,render, screen } from "@testing-library/react";
import fireEvent from "@testing-library/user-event";
describe("app test", () => {
  it("initial value should be 0", () => {
    const app = shallow(<App />);
    expect(app.find("MyComponent").prop("start")).toEqual(0);
  });
  it("initial value should be 10", () => {
    let component = shallow(<MyComponent start={10} />);
    let counterVal = component.find(".counterVal");
    expect(counterVal.text()).toBe("Count : 10");
  });
  it("should be buttons + and - ", () => {
    const wrapper = shallow(<MyComponent />);
    const substract = wrapper.find("div button.substract");
    expect(substract.text()).toBe("-");
    const add = wrapper.find("div button.add");
    expect(add.text()).toBe("+");
  });
  it("state should properly changes", () => {
    const wrapper = shallow(<MyComponent />);
    const substract = wrapper.find("div button.substract");
    let counterVal = wrapper.find("div span.counterVal");
    const add = wrapper.find(".add");
    add.simulate("click");
    counterVal = wrapper.find("div span.counterVal");
    expect(counterVal.text()).toBe("Count : 1");
    substract.simulate("click");
    counterVal = wrapper.find("div span.counterVal");
    expect(counterVal.text()).toBe("Count : -1");
  });
  const setup = () => {
    const utils = render(<Input />)
    const input = utils.getByLabelText('cost-input')
    return {
      input,
      ...utils,
    }
  }
  test("change value after set it in input field", async () => {
    //doesn't work
    let wrapper = shallow(<MyComponent />);
    const { input } = setup()
    fireEvent.change(input, { target: { value: '3' } })
    expect(input.value).toBe('3')

    // const counterVal = wrapper.find("span.counterVal");
    // const submit = wrapper.find(".submit");
    // expect(counterVal.text()).toBe("Count : 3");
    
  });
  it("state should set 0 after reset ", () => {
    let wrapper = shallow(<MyComponent />);
    let counterVal = wrapper.find("span.counterVal");
    let reset = wrapper.find("button.Reset");
    let add = wrapper.find(".add");
    add.simulate("click");
    add.simulate("click");
    reset.simulate("click");
    counterVal = wrapper.find("span.counterVal");
    expect(counterVal.text()).toBe("Count : 0");
  });
});
