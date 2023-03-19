import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Navbar from "../Navbar";
describe("Toggler", () => {
  it("トグルボタン（開く）が表示されているか", async () => {
    render(<Navbar />);
    const togglerOpen = screen.getByTestId("toggler-open");
    expect(togglerOpen).toBeInTheDocument();
  });
  it("トグルボタン（閉じる）が非表示になっているか", async () => {
    render(<Navbar />);
    const togglerOpen = screen.queryByTestId("toggler-close");
    expect(togglerOpen).not.toBeInTheDocument();
  });
  it("トグルボタン（開く）を押した時トグルボタン（閉じる）が表示される", async () => {
    render(<Navbar />);
    const togglerOpen = screen.getByTestId("toggler-open");
    await userEvent.click(togglerOpen);
    const togglerClose = screen.getByTestId("toggler-close");
    expect(togglerClose).toBeInTheDocument();
  });
  it("トグルボタン（開く）を押した時オーバーレイが表示される", async () => {
    render(<Navbar />);
    const togglerOpen = screen.getByTestId("toggler-open");
    await userEvent.click(togglerOpen);
    const overlay = screen.getByTestId("overlay");
    expect(overlay).toBeInTheDocument();
  });
  it("オーバーレイ表示時にトグルボタン（閉じる）を押すと、オーバーレイが非表示になる", async () => {
    render(<Navbar />);
    const togglerOpen = screen.getByTestId("toggler-open");
    await userEvent.click(togglerOpen);
    const togglerClose = screen.getByTestId("toggler-close");
    await userEvent.click(togglerClose);
    waitFor(() => {
      const overlay = screen.queryByTestId("overlay");
      expect(overlay).not.toBeInTheDocument();
    });
  });
  it("オーバーレイ表示時にメニュー項目をクリックすると、オーバーレイが非表示になる", async () => {
    render(<Navbar />);
    const togglerOpen = screen.getByTestId("toggler-open");
    await userEvent.click(togglerOpen);
    const menu = screen.getByRole("link", { name: "Skills" });
    await userEvent.click(menu);
    waitFor(async () => {
      const overlay = screen.queryByTestId("overlay");
      expect(overlay).not.toBeInTheDocument();
    });
  });
});
