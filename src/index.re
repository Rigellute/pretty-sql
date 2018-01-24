[@bs.module "./registerServiceWorker"] external register_service_worker : unit => unit = "default";
[%bs.raw {|require('uikit/dist/css/uikit.min.css')|}];

ReactDOMRe.renderToElementWithId(<App />, "root");

register_service_worker();
