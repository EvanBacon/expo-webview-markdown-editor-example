import WebView from "react-native-webview";

export default function Page() {
  return (
    <WebView
      source={{
        html: `
<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://unpkg.com/easymde/dist/easymde.min.css"><script src="https://unpkg.com/easymde/dist/easymde.min.js"></script>
    </head>
    <body>
        <textarea></textarea>
        <script>
        const easyMDE = new EasyMDE();
        </script>
    </body>
</html>
`,
      }}
      style={{ flex: 1 }}
    />
  );
}
