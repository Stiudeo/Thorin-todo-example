<!DOCTYPE html>
<html>
<head>
   <meta charset="utf-8">
   <meta http-equiv="X-UA-Compatible" content="IE=edge">
   <title>TODO SPA</title>
   <meta name="description" content="">
   <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0">
   <link href="{{ asset('/css/styles.css', true) }}" rel="stylesheet" media="screen">
</head>
<body>
<div id="react-app">
</div>
{% if environment == "production" %}
   <script type="text/javascript" src="{{ asset('/js/main.min.js') }}" ></script>
{% else %}
   <script type="text/javascript" src="{{ asset('/js/main.js') }}"></script>
{% endif %}
</body>
</html>