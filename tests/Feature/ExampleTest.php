<?php

namespace Tests\Feature;

// use Illuminate\Foundation\Testing\RefreshDatabase;

use App\Mail\ContactMail;
use Illuminate\Support\Facades\Mail;
use Tests\TestCase;

class ExampleTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function test_the_application_returns_a_successful_response()
    {
        $response = $this->get('/');

        $response->assertStatus(200);
    }


    public function test_メールが送信されること()
    {
        // 実際にはメールを送らないように設定
        Mail::fake();

        // メールが送られていないことを確認
        Mail::assertNothingSent();

        $name  = 'テスト太郎';
        $email = 'test@example.com';
        $body  = 'これはテストメッセージです';

        // メール送信処理を実施
        $response = $this->json('POST', 'api/contact', ['name' => $name, 'email' => $email, 'body' => $body]);

        // メッセージが指定したユーザーに届いたことをアサート
        Mail::assertSent(ContactMail::class, function ($mail) use ($email) {
            return $mail->hasTo($email);
        });

        // メールが1回送信されたことをアサート
        Mail::assertSent(ContactMail::class, 1);
    }
}
