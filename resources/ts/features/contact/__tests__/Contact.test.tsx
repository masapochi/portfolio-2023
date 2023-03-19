import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { rest } from "msw";
import { Contact } from "../components/Contact";
import { axiosClient } from "@/libs/axiosClient";
import { server } from "@/mocks/setupTests";

const inputElement = async (
  labelText: string | RegExp,
  text: string
): Promise<HTMLElement> => {
  const elem = screen.getByLabelText(labelText);
  await userEvent.clear(elem);
  await userEvent.type(elem, text);
  return elem;
};
const validInput = async (): Promise<void> => {
  expect(await inputElement(/name/i, "test name")).toHaveValue("test name");
  expect(await inputElement(/email/i, "test@gmail.com")).toHaveValue(
    "test@gmail.com"
  );
  expect(await inputElement(/subject/i, "test subject")).toHaveValue(
    "test subject"
  );
  expect(await inputElement(/message/i, "test message")).toHaveValue(
    "test message"
  );
};

describe("Contact", () => {
  beforeEach(() => {
    render(<Contact />);
  });

  it("表示されている", async () => {
    expect(screen.getByRole("heading", { level: 1 })).toBeInTheDocument();
  });

  describe("名前", () => {
    it("入力できる", async () => {
      expect(await inputElement(/name/i, "test name")).toHaveValue("test name");
    });

    it("空になった時にエラー", async () => {
      await userEvent.clear(await inputElement(/name/i, "test name"));
      const error = await screen.findByText(/名前は入力必須項目です/);
      expect(error).toBeInTheDocument();
    });
  });

  describe("メール", () => {
    it("入力できる", async () => {
      expect(await inputElement(/email/i, "test@gmail.com")).toHaveValue(
        "test@gmail.com"
      );
    });

    it("空になった時にエラー", async () => {
      await userEvent.clear(await inputElement(/email/i, "test@gmail.com"));
      const error = await screen.findByText(/メールアドレスは入力必須項目です/);
      expect(error).toBeInTheDocument();
    });

    it("不正な時にエラー", async () => {
      await inputElement(/email/i, "test email");
      const error = await screen.findByText(
        /メールアドレスの形式が正しくありません/
      );
      expect(error).toBeInTheDocument();
    });
  });

  describe("件名", () => {
    it("入力できる", async () => {
      expect(await inputElement(/subject/i, "test subject")).toHaveValue(
        "test subject"
      );
    });

    it("空になった時にエラー", async () => {
      await userEvent.clear(await inputElement(/subject/i, "test subject"));
      const error = await screen.findByText(/件名は入力必須項目です/);
      expect(error).toBeInTheDocument();
    });
  });

  describe("メッセージ", () => {
    it("入力できる", async () => {
      expect(await inputElement(/message/i, "test message")).toHaveValue(
        "test message"
      );
    });

    it("空になった時にエラー", async () => {
      await userEvent.clear(await inputElement(/message/i, "test message"));
      const error = await screen.findByText(/メッセージは入力必須項目です/);
      expect(error).toBeInTheDocument();
    });
  });

  describe("お問い合わせフォーム", () => {
    it("送信成功・失敗のメッセージが両方とも表示されていない", async () => {
      expect(
        screen.queryByText("メッセージの送信に成功しました")
      ).not.toBeInTheDocument();
      expect(
        screen.queryByText("メッセージの送信に失敗しました")
      ).not.toBeInTheDocument();
    });

    it("フォームが正しく送信されるか", async () => {
      const response = await axiosClient.post("/contact", {
        name: "test name",
        email: "test@gmail.com",
        subject: "test subject",
        message: "test message",
      });

      expect(response.status).toBe(200);
      expect(response.data).toEqual({
        success: true,
      });
    });

    it("メッセージの送信中はボタンを非活性化", async () => {
      // フォーム入力
      expect(await inputElement(/name/i, "test name")).toHaveValue("test name");
      expect(await inputElement(/email/i, "test@gmail.com")).toHaveValue(
        "test@gmail.com"
      );
      expect(await inputElement(/subject/i, "test subject")).toHaveValue(
        "test subject"
      );
      expect(await inputElement(/message/i, "test message")).toHaveValue(
        "test message"
      );

      const submit = screen.getByRole("button", { name: "Send Message" });
      expect(submit).toHaveTextContent(/Send Message/i);
      expect(submit).toBeInTheDocument();

      await userEvent.click(submit);

      // expect(submit).toHaveTextContent("Sending");
    });

    it("メッセージの送信が成功した時に成功メッセージが表示される", async () => {
      // フォーム入力
      await validInput();

      // 送信ボタンをクリック
      const submit = screen.getByRole("button", { name: /Send Message/i });
      await userEvent.click(submit);

      await waitFor(() => {
        expect(
          screen.getByText("メッセージの送信に成功しました")
        ).toBeInTheDocument();
      });
      await waitFor(
        () => {
          expect(
            screen.queryByText("メッセージの送信に成功しました")
          ).not.toBeInTheDocument();
        },
        { timeout: 6000 }
      );
    });

    it("メッセージの送信に失敗した時にエラーメッセージを表示", async () => {
      server.use(
        rest.post("/contact", (req, res, ctx) => {
          return res(ctx.status(500)); // サーバーエラーを返す
        })
      );
      // フォーム入力
      await validInput();

      // 送信ボタンをクリック
      const submit = screen.getByRole("button", { name: /Send Message/i });
      await userEvent.click(submit);

      await waitFor(() => {
        expect(
          screen.getByText("メッセージの送信に失敗しました")
        ).toBeInTheDocument();
      });
      await waitFor(
        () => {
          expect(
            screen.queryByText("メッセージの送信に失敗しました")
          ).not.toBeInTheDocument();
        },
        { timeout: 6000 }
      );
    });
  });
});
