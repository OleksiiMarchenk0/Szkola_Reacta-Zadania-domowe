/**-----------TESTOWANIE APLIKACJI-ZADANIE 3--------------- */
import App from './App';
import { shallow } from "enzyme";

describe("react api test", () => {
  it("ilośc wygenerowanych userów", () => {
    const app = shallow(<App />);
    expect(app.find("UserList").prop("usersAmount")).toEqual(10);
  });
})