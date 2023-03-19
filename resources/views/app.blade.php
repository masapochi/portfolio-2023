<!DOCTYPE html>
<html lang="ja">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <meta name="robots" content="noindex,nofollow">
  <title>{{ config('app.name') }}</title>
  <meta name="description" content="{{ config('app.description') }}">

  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:site" content="@__masapochi__">
  <meta name="twitter:creator" content="@__masapochi__">
  <meta name="twitter:url" content="{{ url()->full() }}">
  <meta name="twitter:title" content="{{ config('app.name') }}">
  <meta name="twitter:description" content="{{ config('app.description') }}">
  <meta name="twitter:image" content="{{ asset('images/ogp.jpg') }}">
  <meta name="csrf-token" content="{{ csrf_token() }}">


  <link href="{{ asset('/favicon.ico') }}" rel="shortcut icon" type="image/x-icon">

  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&amp;display=swap" rel="stylesheet">
  <link rel="stylesheet" href="{{ mix('css/app.css') }}">
  <script src="{{ mix('js/main.js') }}" defer></script>
</head>

<body>
  <div id="app"></div>

</body>

</html>
